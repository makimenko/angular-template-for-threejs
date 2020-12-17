import {moduleMetadata} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {Component} from '@angular/core';
import {effectsSceneWrapper} from '../scene-wrapper/effects-scene-wrapper';


@Component({
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
    background: '0xFFFFFF',
  },
  argTypes: {
    enable: {control: {type: 'boolean'}},
    background: {
      control: {
        type: 'select',
        options: [
          '0xFFFFFF',
          '0xDDDDDD',
          '0xAA0000',
          '0x00AA00',
          '0x0000AA'
        ]
      }
    },
  }
};

export const Blur = (args) => ({
  component: StorybookDotScreenComponent,
  props: args
});
