import {Component} from '@angular/core';
import {axesSceneWrapper} from '../scene-wrapper/axes-scene-wrapper';

@Component({
  template: axesSceneWrapper(`
  <atft-frame-mesh [thickness]="2" [sizeX]="15" [sizeY]="20" [translateZ]="0.5" material="basic" materialColor="0xff0000">
  </atft-frame-mesh>
  `)
})
export class StorybookFrameMeshComponent {

}
