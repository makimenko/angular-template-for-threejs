import {Component} from '@angular/core';
import {axesSceneWrapper} from '../scene-wrapper/axes-scene-wrapper';

@Component({
  template: axesSceneWrapper(`
      <atft-svg-loader model="./assets/svg/worldwide.svg" maxX="15" maxY="15">
      </atft-svg-loader>
      <atft-svg-loader [model]="model" [overrideMaterialColor]="overrideMaterialColor"
        maxX="10" maxY="10"  translateZ="2">
      </atft-svg-loader>
  `)
})
export class StorybookSVGLoaderComponent {

}
