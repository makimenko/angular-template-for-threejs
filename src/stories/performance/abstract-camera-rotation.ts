import {ViewChild} from '@angular/core';
import * as THREE from 'three';
import {AnimationService} from '../../../projects/atft/src/lib/animation/animation.service';
import {PerspectiveCameraComponent} from '../../../projects/atft/src/lib/camera/perspective-camera.component';

export abstract class AbstractCameraRotation {

  @ViewChild(PerspectiveCameraComponent, {static: false})
  camera;
  clock = new THREE.Clock();
  matrix = new THREE.Matrix4();
  period = 20; // rotation time in seconds


  constructor(protected animation: AnimationService) {
    this.animate = this.animate.bind(this);
    animation.animate.subscribe(this.animate);
    animation.start();
  }

  animate() {
    if (this.camera) {
      this.matrix.makeRotationZ(this.clock.getDelta() * 2 * Math.PI / this.period);
      this.camera.camera.position.applyMatrix4(this.matrix);
      this.camera.camera.lookAt(new THREE.Vector3());
    }
  }

}
