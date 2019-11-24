import {Component, Input} from '@angular/core';
import {axesSceneWrapper} from '../scene-wrapper/axes-scene-wrapper';

@Component({
  template: axesSceneWrapper(`
      <atft-sphere-mesh [radius]="4" [widthSegments]="20" [hightSegments]="20" material="phong" materialColor="0xff0000">
      </atft-sphere-mesh>
  `)
})
export class StorybookSphereMeshComponent {

  @Input() translateX = 0;
}
