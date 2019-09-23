import {Component, forwardRef, Input} from '@angular/core';
import * as THREE from 'three';
import {AbstractObject3D} from '../abstract-object-3d';
import {MeshLine, MeshLineMaterial} from 'three.meshline';
import {AbstractConnector} from './abstract-connector';
import {appliedColor} from '../../util/applied-color';
import {AnimationService} from '../../animation/animation.service';

@Component({
  selector: 'atft-mesh-line-connector',
  providers: [{provide: AbstractObject3D, useExisting: forwardRef(() => MeshLineConnectorComponent)}],
  template: '<ng-content></ng-content>'
})
export class MeshLineConnectorComponent extends AbstractConnector<THREE.Mesh> {

  @Input()
  materialColor = 0xffff00;

  @Input()
  transparent = true;

  @Input()
  opacity = 0.5;

  @Input()
  lineWidth = 0.5;

  @Input()
  depthWrite = true;

  @Input()
  depthTest = true;

  @Input()
  animated = false;

  @Input() animationIncrement = 0.002;

  private geometry: THREE.Geometry;
  private line: MeshLine;
  private lineMaterial: MeshLineMaterial;


  constructor(private animationService: AnimationService) {
    super();
  }

  createConnectorObject(): THREE.Mesh {
    this.geometry = this.getLineGeometry();

    this.line = new MeshLine();
    this.line.setGeometry(this.geometry);

    this.lineMaterial = (this.animated ?
        new MeshLineMaterial({
          color: appliedColor(this.materialColor),
          transparent: this.transparent,
          opacity: this.opacity,
          lineWidth: this.lineWidth,
          depthWrite: this.depthWrite,
          depthTest: this.depthTest,
          side: THREE.DoubleSide,
          blending: THREE.NormalBlending,
          // TODO: props
          dashArray: 0.05,
          dashOffset: 0.1,
          dashRatio: 0.1
        })
        : new MeshLineMaterial({
          color: appliedColor(this.materialColor),
          transparent: this.transparent,
          opacity: this.opacity,
          lineWidth: this.lineWidth,
          depthWrite: this.depthWrite,
          depthTest: this.depthTest,
          side: THREE.DoubleSide,
          blending: THREE.NormalBlending
        })
    );

    const mesh = new THREE.Mesh(this.line.geometry, this.lineMaterial);
    if (this.animated) {
      this.animate = this.animate.bind(this);
      this.animationService.animate.subscribe(this.animate);
    }
    return mesh;
  }

  private animate() {
    this.lineMaterial.uniforms.dashOffset.value += this.animationIncrement;
  }


  updateLineGeometry(): void {
    // https://github.com/spite/THREE.MeshLine/issues/51#issuecomment-379579926
    this.line.setGeometry(this.geometry);
    this.render.emit();
  }

}
