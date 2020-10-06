import { Component, Input } from '@angular/core';
import * as THREE from 'three';
import { RendererService } from '../renderer/renderer.service';
import { provideParent } from '../util';
import { AbstractCamera } from './abstract-camera';

@Component({
  selector: 'atft-perspective-camera',
  providers: [provideParent(PerspectiveCameraComponent, AbstractCamera)],
  template: '<ng-content></ng-content>'
})
export class PerspectiveCameraComponent extends AbstractCamera<THREE.PerspectiveCamera> {

  @Input() fov: number;
  @Input() near: number;
  @Input() far: number;

  constructor(
    protected rendererService: RendererService
  ) {
    super(rendererService);
  }

  protected createCamera(): void {
    // console.log('PerspectiveCameraComponent.createCamera');
    // let aspectRatio = undefined; // Updated later
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      undefined,
      this.near,
      this.far
    );
  }

  public updateAspectRatio(aspect: number) {
    // console.log('PerspectiveCameraComponent.updateAspectRatio: ' + aspect);
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
  }

}
