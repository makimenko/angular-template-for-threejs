import {Component, Input, Optional, SkipSelf} from '@angular/core';
import * as THREE from 'three';
import {RendererService} from '../../renderer/renderer.service';
import {appliedColor, provideParent} from '../../util';
import {AbstractObject3D} from '../abstract-object-3d';
import {AbstractConnector} from './abstract-connector';
import {AnimationService} from '../../animation';
import {Subscription} from 'rxjs';

var lineVertShader = `
  attribute float lineDistance;
  varying float vLineDistance;

  void main() {
    vLineDistance = lineDistance;
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    gl_Position = projectionMatrix * mvPosition;
  }
  `;

var lineFragShader = `
  uniform vec3 diffuse;
  uniform float opacity;
  uniform float time; // added time uniform

  uniform float dashSize;
  uniform float gapSize;
  varying float vLineDistance;

  void main() {
		float totalSize = dashSize + gapSize;
		float modulo = mod( vLineDistance + time, totalSize ); // time added to vLineDistance

    if ( modulo > dashSize ) {
      discard;
    }

    gl_FragColor = vec4( diffuse, opacity );
  }
  `;


@Component({
  selector: 'atft-line-connector',
  providers: [provideParent(LineConnectorComponent)],
  template: '<ng-content></ng-content>'
})
export class LineConnectorComponent extends AbstractConnector<THREE.Line> {

  @Input()
  materialColor = 0xffffff;

  @Input() animated = true;

  // TODO: move to abstract?
  private geometry: THREE.BufferGeometry;

  protected line: THREE.Line;
  private material: THREE.LineDashedMaterial;

  protected animation: Subscription;
  protected time = 0;
  protected timeScale = 10;
  protected clock = new THREE.Clock();

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>,
    protected animationService: AnimationService,
  ) {
    super(rendererService, parent);
  }

  public createConnectorObject(): THREE.Line {
    this.geometry = this.getLineGeometry();

    if (this.animated) {
      console.log('LineConnectorComponent.createConnectorObject animated');
      this.material = new THREE.ShaderMaterial({
        uniforms: {
          diffuse: {value: new THREE.Color(appliedColor(this.materialColor))},
          dashSize: {value: 4},
          gapSize: {value: 1},
          opacity: {value: 1},
          time: {value: 0} // added uniform
        },
        vertexShader: lineVertShader,
        fragmentShader: lineFragShader,
        transparent: true
      });

      this.line = new THREE.Line(this.geometry, this.material);
      this.animate = this.animate.bind(this);
      this.animation = this.animationService.animate.subscribe(this.animate);
    } else {
      console.log('LineConnectorComponent.createConnectorObject solid');
      const material = new THREE.LineBasicMaterial({
        color: appliedColor(this.materialColor)
      });
      this.line = new THREE.Line(this.geometry, material);
    }

    return this.line;
  }

  updateLineGeometry(): void {
    console.log('LineConnectorComponent.updateLineGeometry');
    this.geometry = this.getLineGeometry();
    this.line.geometry = this.geometry;
    this.rendererService.render();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    if (this.animation) {
      this.animation.unsubscribe();
    }
  }

  private animate() {
    // console.log('LineConnectorComponent.animate');
    if (this.material && this.material.uniforms) {
      this.time += this.clock.getDelta();
      this.material.uniforms.time.value = -1 * this.time * this.timeScale;
      this.line.computeLineDistances();
    }
  }

}
