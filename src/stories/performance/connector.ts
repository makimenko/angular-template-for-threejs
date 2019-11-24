import {Component} from '@angular/core';
import {performanceSceneWrapper} from '../scene-wrapper/performance-scene-wrapper';
import {AnimationService} from '../../../projects/atft/src/lib/animation';
import {AbstractCameraRotation} from './abstract-camera-rotation';

@Component({
  template: performanceSceneWrapper(`
<div *ngFor="let item of [].constructor(200); let i = index">
  <atft-empty #a [translateY]="50" [translateX]="(-i*2)+50" [translateZ]="5+i">
  </atft-empty>
  <atft-empty #b [translateY]="-50" [translateX]="(-i)+50" [translateZ]="5-i">
  </atft-empty>
  <atft-mesh-line-connector [source]="a" [target]="b" materialColor="0xff0000" [animated]="true" [animationIncrement]="0.003"
    transparent="false">
  </atft-mesh-line-connector>
  </div>
  `)
})
export class StorybookConnectorPerformanceComponent extends AbstractCameraRotation {

  constructor(private animationService: AnimationService) {
    super(animationService);
  }

}
