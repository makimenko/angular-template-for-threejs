import { Component, Input, OnDestroy, Optional, SkipSelf } from '@angular/core';
import { Subscription } from 'rxjs';
import * as THREE from 'three';
import { AnimationService } from '../../animation';
import { RendererService } from '../../renderer/renderer.service';
import { appliedColor, provideParent } from '../../util';
import { AbstractObject3D } from '../abstract-object-3d';
import { AbstractConnector } from './abstract-connector';

const lineVertShader = `
  attribute float lineDistance;
  varying float vLineDistance;

  void main() {
    vLineDistance = lineDistance;
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    gl_Position = projectionMatrix * mvPosition;
  }
  `;

const lineFragShader = `
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


export enum LineType {
  dashed = 'dash',
  solid = 'solid'
}


@Component({
  selector: 'atft-line-connector',
  providers: [provideParent(LineConnectorComponent)],
  template: '<ng-content></ng-content>'
})
export class LineConnectorComponent extends AbstractConnector implements OnDestroy {

  @Input()
  materialColor = 0xffffff;


  @Input() solid = false;
  @Input() dashSize = 4;
  @Input() gapSize = 0.5;
  @Input() opacity = 1;
  @Input() lineType: LineType = LineType.dashed;

  @Input() animated = true;
  protected animation: Subscription;
  protected time = 0;
  protected timeScale = 5;
  protected clock = new THREE.Clock();

  protected line: THREE.Line;


  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>,
    protected animationService: AnimationService,
  ) {
    super(rendererService, parent);
  }

  public createLineMesh(): THREE.Line {
    const geometry = this.getLineGeometry();

    if (this.solid) {
      // console.log('LineConnectorComponent.createLineMesh solid');
      const material = new THREE.LineBasicMaterial({
        color: appliedColor(this.materialColor)
      });
      this.line = new THREE.Line(geometry, material);
    } else {
      // console.log('LineConnectorComponent.createLineMesh animated');
      const material = new THREE.ShaderMaterial({
        uniforms: {
          diffuse: { value: new THREE.Color(appliedColor(this.materialColor)) },
          dashSize: { value: this.dashSize },
          gapSize: { value: this.gapSize },
          opacity: { value: this.opacity },
          time: { value: 0 } // added uniform
        },
        vertexShader: lineVertShader,
        fragmentShader: lineFragShader,
        transparent: true
      });

      this.line = new THREE.Line(geometry, material);

      if (this.animated) {
        this.animate = this.animate.bind(this);
        this.animation = this.animationService.animate.subscribe(this.animate);
      }
    }

    return this.line;
  }

  updateLineGeometry(): void {
    // console.log('LineConnectorComponent.updateLineGeometry');
    const geometry = this.getLineGeometry();
    this.line.geometry = geometry;
    this.line.computeLineDistances();
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
    const material: any = this.line?.material;
    if (this.line?.material) {
      this.time += this.clock.getDelta();
      material.uniforms.time.value = -1 * this.time * this.timeScale;
      this.line.computeLineDistances();
    }
  }

}
