import {moduleMetadata} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {Component} from '@angular/core';
import {performanceSceneWrapper} from '../scene-wrapper/performance-scene-wrapper';

@Component({
  template: performanceSceneWrapper(`
    <atft-text-mesh atft-dashed-draw materialColor="0x00EE00" dashColor="0x00FF00" text="Hello world"></atft-text-mesh>
  `)
})
class StorybookDashedDrawComponent {

}

export default {
  title: 'Effect/Dashed Draw',
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule
      ]
    })
  ]
};


export const DashedDraw = (args) => ({
  component: StorybookDashedDrawComponent,
  props: args
});
