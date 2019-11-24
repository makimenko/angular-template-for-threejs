import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {axesSceneWrapper} from '../scene-wrapper/axes-scene-wrapper';
import {BoxMeshComponent} from '../../../projects/atft/src/lib/object/mesh';
import * as THREE from 'three';
import {AnimationService} from '../../../projects/atft/src/lib/animation';

@Component({
  template: axesSceneWrapper(`
  <atft-box-mesh height="10" width="10" depth="10" material="phong" materialColor="0xffffff">
  </atft-box-mesh>
  `)
})
export class StorybookMixerComponent implements AfterViewInit {

  @ViewChild(BoxMeshComponent, {static: false}) box;

  private mixer: THREE.AnimationMixer;

  private clock = new THREE.Clock();
  private boxObject: THREE.Object3D;

  constructor(private animationService: AnimationService) {

  }

  public ngAfterViewInit() {
    this.boxObject = this.box.getObject();
    const positionKF = new THREE.VectorKeyframeTrack('.position', [0, 1, 2, 4], [0, 0, 0, 0, 50, 0, 0, 50, 5, 0, 0, 0]);
    const helloClip = new THREE.AnimationClip('Hello', 4, [positionKF]);
    this.mixer = new THREE.AnimationMixer(this.boxObject);
    const clipAction = this.mixer.clipAction(helloClip);
    clipAction.play();

    this.animate = this.animate.bind(this);
    this.animationService.animate.subscribe(this.animate);
    this.animationService.start();
  }

  public animate() {
    if (this.mixer) {
      this.mixer.update(this.clock.getDelta());
    }
  }

}
