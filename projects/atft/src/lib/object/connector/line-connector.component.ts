import {Component, Input, Optional, SkipSelf} from '@angular/core';
import * as THREE from 'three';
import {RendererService} from '../../renderer/renderer.service';
import {appliedColor, provideParent} from '../../util';
import {AbstractObject3D} from '../abstract-object-3d';
import {AbstractConnector} from './abstract-connector';
import {AnimationService} from '../../animation';
import {Subscription} from 'rxjs';


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
  private animationIncrement: 0.001;
  protected animation: Subscription;

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

      console.log('LineConnectorComponent.createConnectorObject dash');
      this.material = new THREE.LineDashedMaterial({
        color: appliedColor(this.materialColor),
        dashSize: 1.2,
        gapSize: 2,
        scale: 1
      });

      this.line = new THREE.Line(this.geometry, this.material);
      this.line.computeLineDistances();

      // console.log('MeshLineConnectorComponent.createConnectorObject animated');
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
    this.geometry = this.getLineGeometry();
    this.line.geometry = this.geometry;
    this.line.computeLineDistances();
    this.rendererService.render();
  }

  private animate() {
    // console.log('MeshLineConnectorComponent.animate');
    if (this.material && this.material.uniforms) {
      console.log('animate');
      this.material.uniforms.dashOffset.value += this.animationIncrement;
    }
  }

}
