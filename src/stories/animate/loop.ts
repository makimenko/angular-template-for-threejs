import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {axesSceneWrapper} from '../scene-wrapper/axes-scene-wrapper';
import {BoxMeshComponent} from '../../../projects/atft/src/lib/object/mesh';
import {AnimationService} from '../../../projects/atft/src/lib/animation';

@Component({
  template: axesSceneWrapper(`
  <atft-box-mesh height="10" width="10" depth="10" material="phong" materialColor="0xffffff">
  </atft-box-mesh>
  `)
})
export class StorybookLoopComponent implements AfterViewInit {

  @ViewChild(BoxMeshComponent, {static: false}) box;

  k = 0;

  constructor(private animationService: AnimationService) {

  }

  public ngAfterViewInit() {
    this.animate = this.animate.bind(this);
    this.animationService.animate.subscribe(this.animate);
    this.animationService.start();
  }

  public animate() {
    this.k += 0.02;
    this.box.rotateX = this.k;
    this.box.rotateY = -this.k * 2;
    this.box.rotateZ = this.k * 3.3;
    this.box.applyRotation();
  }

}
