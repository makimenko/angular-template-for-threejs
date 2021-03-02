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

export enum LineEndType {
  none = 'none',
  circle = 'circle',
  arrow = 'arrow'
}


@Component({
  selector: 'atft-line-connector',
  providers: [provideParent(LineConnectorComponent)],
  template: '<ng-content></ng-content>'
})
export class LineConnectorComponent extends AbstractConnector implements OnDestroy {

  @Input()
  materialColor = 0xffffff;


  @Input() dashSize = 4;
  @Input() gapSize = 1;
  @Input() opacity = 1;
  @Input() lineType: LineType = LineType.dashed;
  @Input() startType: LineEndType = LineEndType.circle;
  @Input() endType: LineEndType = LineEndType.arrow;

  @Input() animated = true;
  protected animation: Subscription;
  protected time = 0;
  protected timeScale = 10;
  protected clock = new THREE.Clock();

  protected line: THREE.Line;
  protected lineStart: THREE.Mesh;
  protected lineEnd: THREE.Mesh;

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>,
    protected animationService: AnimationService,
  ) {
    super(rendererService, parent);
  }


  protected newObject3DInstance(): THREE.Object3D {
    const lineObject = super.newObject3DInstance();

    // console.log('DagreEdgeComponent.newObject3DInstance');
    this.appendLineEnds(lineObject);
    return lineObject;
  }

  protected appendLineEnds(lineObject: THREE.Object3D) {
    // 1. Init Material
    const material = new THREE.MeshBasicMaterial({ color: appliedColor(this.materialColor) });

    // 2. Create start
    const startGeometry = this.getConnectorEndGeometry(this.startType);
    if (startGeometry) {
      this.lineStart = new THREE.Mesh(startGeometry, material);
      lineObject.add(this.lineStart);
    }

    // 3. Create end
    const endGeometry = this.getConnectorEndGeometry(this.endType);
    if (endGeometry) {
      this.lineEnd = new THREE.Mesh(endGeometry, material);
      lineObject.add(this.lineEnd);
    }
  }

  protected getConnectorEndGeometry(type: string): THREE.BufferGeometry {
    switch (type) {
      case LineEndType.circle:
        return new THREE.CircleGeometry(0.7, 16);
        break;
      case LineEndType.arrow:
        const shape = new THREE.Shape();

        shape.moveTo(0, 0);
        shape.lineTo(1, 2);
        shape.lineTo(0, 1.7);
        shape.lineTo(-1, 2);

        const geometry = new THREE.ShapeBufferGeometry(shape);

        return geometry;
        break;
      default:
        return undefined;
    }

  }

  public createLineMesh(): THREE.Line {
    const geometry = this.getLineGeometry();

    if (this.animated) {
      // console.log('LineConnectorComponent.createLineMesh animated');
      const material = new THREE.ShaderMaterial({
        uniforms: {
          diffuse: { value: new THREE.Color(appliedColor(this.materialColor)) },
          dashSize: { value: 4 },
          gapSize: { value: 0.5 },
          opacity: { value: 1 },
          time: { value: 0 } // added uniform
        },
        vertexShader: lineVertShader,
        fragmentShader: lineFragShader,
        transparent: true
      });

      this.line = new THREE.Line(geometry, material);
      this.animate = this.animate.bind(this);
      this.animation = this.animationService.animate.subscribe(this.animate);
    } else {
      // console.log('LineConnectorComponent.createLineMesh solid');
      const material = new THREE.LineBasicMaterial({
        color: appliedColor(this.materialColor)
      });
      this.line = new THREE.Line(geometry, material);
    }

    return this.line;
  }

  updateLineGeometry(): void {
    // console.log('LineConnectorComponent.updateLineGeometry');
    const geometry = this.getLineGeometry();
    this.line.geometry = geometry;
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
