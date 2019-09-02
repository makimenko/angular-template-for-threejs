import {Component, forwardRef, Input} from '@angular/core';
import {AbstractCamera} from './abstract-camera';
import * as THREE from 'three';

@Component({
  selector: 'atft-perspective-camera',
  providers: [{provide: AbstractCamera, useExisting: forwardRef(() => PerspectiveCameraComponent)}],
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

  protected createCamera(): void {
    console.log('PerspectiveCameraComponent.createCamera');
    // let aspectRatio = undefined; // Updated later
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      undefined,
      this.near,
      this.far
    );
  }

  public updateAspectRatio(aspect: number) {
    console.log('PerspectiveCameraComponent.updateAspectRatio: ' + aspect);
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
  }

}
