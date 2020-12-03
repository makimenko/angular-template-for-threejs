import {moduleMetadata} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {Component} from '@angular/core';
import {effectsSceneWrapper} from '../scene-wrapper/effects-scene-wrapper';


@Component({
  template: effectsSceneWrapper(`
    <atft-effect-composer *ngIf="enable">
        <atft-dof [focus]="focus" [aperture]="aperture" [maxblur]="maxblur"></atft-dof>
    </atft-effect-composer>
  `)
})
class StorybookDofComponent {


}

export default {
  title: 'Effects / DOF',
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
    focus: 10.0,
    aperture: 0.0001,
    maxblur: 0.005
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
    focus: {control: {type: 'range', min: 1, max: 3000, step: 10}},
    aperture: {control: {type: 'range', min: 0, max: 0.0005, step: .00001}},
    maxblur: {control: {type: 'range', min: 0, max: 0.05, step: .001}}
  }
};

export const DepthOfField = (args) => ({
  component: StorybookDofComponent,
  props: args
});
