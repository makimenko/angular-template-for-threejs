import {Component} from '@angular/core';
import {performanceSceneWrapper} from '../scene-wrapper/performance-scene-wrapper';
import {AbstractCameraRotation} from './abstract-camera-rotation';
import {AnimationService} from '../../../projects/atft/src/lib/animation';

@Component({
  template: performanceSceneWrapper(`
  <div *ngFor="let item of [].constructor(iterations); let x = index">
    <div *ngFor="let item of [].constructor(iterations); let y = index">
        <atft-empty [translateX]="(x*offset)-translate" [translateY]="(y*offset)-translate">
            <atft-box-mesh [height]="size" [width]="size" [depth]="size" materialColor="0xdadaff">
            </atft-box-mesh>
        </atft-empty>
    </div>
  </div>
  `)
})
export class StorybookMeshPerformanceComponent extends AbstractCameraRotation {
  size = 5;
  iterations = 50;
  offset = this.size * 1.05;
  translate = (this.iterations * this.offset) / 2;


  constructor(protected animation: AnimationService) {
    super(animation);
  }


}
