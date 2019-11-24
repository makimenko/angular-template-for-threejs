import {Component} from '@angular/core';
import {axesSceneWrapper} from '../scene-wrapper/axes-scene-wrapper';

@Component({
  template: axesSceneWrapper(`
      <atft-object-loader model="assets/model/Server.json">
      </atft-object-loader>
  `)
})
export class StorybookObjectLoaderComponent {

}
