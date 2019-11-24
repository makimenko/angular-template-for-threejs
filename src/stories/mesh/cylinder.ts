import {Component} from '@angular/core';
import {axesSceneWrapper} from '../scene-wrapper/axes-scene-wrapper';

@Component({
  selector: 'app-storybook-cylinder-mesh',
  template: axesSceneWrapper(`
      <atft-cylinder-mesh [radiusTop]="2.0" [radiusBottom]="7.0" [height]="10" [radialSegments]="36" [heightSegments]="1"
                          material="phong" materialColor="0x00ff00">
      </atft-cylinder-mesh>
  `)
})
export class StorybookCylinderMeshComponent {

}
