import {Component} from '@angular/core';
import {axesSceneWrapper} from '../scene-wrapper/axes-scene-wrapper';

@Component({
  template: axesSceneWrapper(`
  <atft-torus-mesh [radius]="5" [tube]="2" [radialSegments]="16" [tubularSegments]="100" [arc]="6.28" material="phong"
        materialColor="0x0000ff">
  </atft-torus-mesh>
  `)
})
export class StorybookTorusMeshComponent {

}
