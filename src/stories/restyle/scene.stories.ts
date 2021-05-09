import {Component} from '@angular/core';
import {moduleMetadata} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {darkWorldSceneWrapper} from '../scene-wrapper/dark-world-scene-wrapper';


const modelPath = 'assets/model/Restyle';

@Component({
  template: darkWorldSceneWrapper(`
      <atft-obj-loader
              model="${modelPath}/Restyle-Scene.obj"
              material="${modelPath}/Restyle-Scene.mtl"
              resourcePath="${modelPath}"
              [translateZ]="1">
          >
      </atft-obj-loader>
  `)
})
class StorybookObjLoaderComponent {

}

export default {
  title: 'Restyle',
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule
      ]
    })
  ]
};

export const Scene = (args) => ({
  component: StorybookObjLoaderComponent,
  props: args
});


