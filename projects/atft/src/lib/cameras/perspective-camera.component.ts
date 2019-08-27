import {Component, forwardRef, Input} from '@angular/core';
import {AbstractCamera} from './abstract-camera';
import * as THREE from 'three';

@Component({
  selector: 'atft-perspective-camera',
  providers: [{ provide: AbstractCamera, useExisting: forwardRef(() => PerspectiveCameraComponent) }],
  template: '<ng-content></ng-content>'
})
export class PerspectiveCameraComponent extends AbstractCamera<THREE.PerspectiveCamera> {

  @Input() fov: number;
  @Input() near: number;
  @Input() far: number;


  constructor() {
    console.log('PerspectiveCameraComponent.constructor');
    super();
  }

  protected afterInit(): void {
    console.log('PerspectiveCameraComponent.afterInit');
    // let aspectRatio = undefined; // Updated later
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      undefined,
      this.near,
      this.far
    );

    this.applyPosition();
  }

  public updateAspectRatio(aspect: number) {
    console.log('PerspectiveCameraComponent.updateAspectRatio: ' + aspect);
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
  }

}
