import {Component, forwardRef, Input, Optional, SkipSelf} from '@angular/core';
import * as THREE from 'three';
import { provideParent } from '../../util';
import {AbstractObject3D} from '../abstract-object-3d';
import {MeshLine, MeshLineMaterial} from 'three.meshline';
import {AbstractConnector} from './abstract-connector';
import {appliedColor} from '../../util/applied-color';
import {AnimationService} from '../../animation/animation.service';
import {RendererService} from '../../renderer/renderer.service';

@Component({
  selector: 'atft-mesh-line-connector',
  providers: [provideParent(MeshLineConnectorComponent)],
  template: '<ng-content></ng-content>'
})
export class MeshLineConnectorComponent extends AbstractConnector<THREE.Mesh> {

  @Input()
  materialColor = 0xffffff;

  @Input()
  transparent = true;

  @Input()
  opacity = 0.5;

  @Input()
  lineWidth = 0.8;

  @Input()
  depthWrite = true;

  @Input()
  depthTest = true;

  @Input()
  animated = false;

  @Input() animationIncrement = -0.002;

  private geometry: THREE.BufferGeometry;
  private line: MeshLine;
  private lineMaterial: MeshLineMaterial;


  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>,
    protected animationService: AnimationService
  ) {
    super(rendererService, parent);
  }

  createConnectorObject(): THREE.Mesh {
    this.geometry = this.getLineGeometry();

    this.line = new MeshLine();
    const arr = this.geometry.getAttribute('position').array;
    this.line.setGeometry(arr);

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
      // console.log('MeshLineConnectorComponent.createConnectorObject animated');
      this.animate = this.animate.bind(this);
      this.animationService.animate.subscribe(this.animate);
    }
    return mesh;
  }

  private animate() {
    // console.log('MeshLineConnectorComponent.animate');
    this.lineMaterial.uniforms.dashOffset.value += this.animationIncrement;
  }

  updateLineGeometry(): void {
    // console.log('MeshLineConnectorComponent.updateLineGeometry');
    this.geometry = this.getLineGeometry();
    // https://github.com/spite/THREE.MeshLine/issues/51#issuecomment-379579926
    this.line.setGeometry(this.geometry);
    this.rendererService.render();
  }

}
