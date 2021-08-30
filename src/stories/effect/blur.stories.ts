import {moduleMetadata} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {Component} from '@angular/core';
import {effectsSceneWrapper} from '../scene-wrapper/effects-scene-wrapper';


@Component({
  selector: 'app-storybook',
  template: effectsSceneWrapper(`
    <atft-effect-composer *ngIf="enable">
    <atft-blur *ngIf="enable" ></atft-blur>
    </atft-effect-composer>
  `)
})
class StorybookDotScreenComponent {

}

export default {
  title: 'Effect/Blur',
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule
      ]
    })
  ],
  args: {
    enable: true,
    background: '#FFFFFF',
  },
  argTypes: {
    enable: {control: {type: 'boolean'}},
    background: {
      options: [
        '#FFFFFF',
        '#DDDDDD',
        '#AA0000',
        '#00AA00',
        '#0000AA'
      ],
      control: {
        type: 'color'
      }
    },
  }
};

export const Blur = (args) => ({
  component: StorybookDotScreenComponent,
  props: args
});
