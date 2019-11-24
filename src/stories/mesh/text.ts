import {Component} from '@angular/core';
import {axesSceneWrapper} from '../scene-wrapper/axes-scene-wrapper';

@Component({
  template: axesSceneWrapper(`
  <atft-text-mesh [text]="text" [rotateZ]="(90 | deg2rad)" material="phong" [materialColor]="materialColor"
      [bevelEnabled]="true" curveSegments="20" [centered]="true">
  </atft-text-mesh>`)
})
export class StorybookTextMeshComponent {

}
