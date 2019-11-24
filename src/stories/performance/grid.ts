import {Component} from '@angular/core';
import {performanceSceneWrapper} from '../scene-wrapper/performance-scene-wrapper';
import {AbstractCameraRotation} from './abstract-camera-rotation';
import {AnimationService} from '../../../projects/atft/src/lib/animation';

@Component({
  template: performanceSceneWrapper(`
  <atft-grid-mesh [size]="5" [iterationsX]="50" [iterationsY]="50" [offset]="1.05"></atft-grid-mesh>
  `)
})
export class StorybookGridPerformanceComponent extends AbstractCameraRotation {

  constructor(protected animation: AnimationService) {
    super(animation);
  }

}
