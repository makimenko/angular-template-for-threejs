import {moduleMetadata} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {Component} from '@angular/core';
import {effectsSceneWrapper} from '../scene-wrapper/effects-scene-wrapper';


@Component({
  template: effectsSceneWrapper(`
    <atft-dot-screen *ngIf="enable" ></atft-dot-screen>
  `)
})
class StorybookDotScreenComponent {

  enable: boolean;


}

export default {
  title: 'Effects / Dot Screen',
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule
      ]
    })
  ],
  args: {
    enable: true
  },
  argTypes: {
    enable: {control: {type: 'boolean'}}
  }
};

export const DotScreen = (args) => ({
  component: StorybookDotScreenComponent,
  props: args
});
