import { Directive, Input, forwardRef, HostListener } from '@angular/core';
import { AbstractCamera } from './abstract-camera';
import * as THREE from 'three';

@Directive({
  selector: 'atft-perspective-camera',
  providers: [{ provide: AbstractCamera, useExisting: forwardRef(() => PerspectiveCameraDirective) }]
})
export class PerspectiveCameraDirective extends AbstractCamera<THREE.PerspectiveCamera> {

  // @Input() cameraTarget: THREE.Object3D;

  @Input() fov: number;
  @Input() near: number;
  @Input() far: number;


  constructor() {
    console.log('PerspectiveCameraDirective.constructor');
    super();
  }

  protected afterInit(): void {
    console.log('PerspectiveCameraDirective.afterInit');
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
    console.log('PerspectiveCameraDirective.updateAspectRatio: ' + aspect);
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
  }

}
