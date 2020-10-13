import {moduleMetadata} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {Component} from '@angular/core';
import {effectsSceneWrapper} from '../scene-wrapper/effects-scene-wrapper';


@Component({
  template: effectsSceneWrapper(`
    <atft-dof *ngIf="enable" [focus]="focus" [aperture]="aperture" [maxblur]="maxblur"></atft-dof>
  `)
})
class StorybookFogComponent {

  enable: boolean;
  color = '0xffffff';
  focus = 1.0;
  aperture = 0.025;
  maxblur = 0.01;

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
    focus: 10.0,
    aperture: 0.0001,
    maxblur: 0.005
  },
  argTypes: {
    enable: {control: {type: 'boolean'}},
    focus: {control: {type: 'range', min: 1, max: 3000, step: 10}},
    aperture: {control: {type: 'range', min: 0, max: 0.0002, step: .00001}},
    maxblur: {control: {type: 'range', min: 0, max: 0.02, step: .001}}
  }
};

export const DepthOfField = (args) => ({
  component: StorybookFogComponent,
  props: args
});
