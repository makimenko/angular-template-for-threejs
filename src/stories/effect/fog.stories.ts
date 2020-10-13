import {moduleMetadata} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {Component} from '@angular/core';
import {effectsSceneWrapper} from '../scene-wrapper/effects-scene-wrapper';


@Component({
  template: effectsSceneWrapper(`
        <atft-fog *ngIf="enable" [near]="near" [far]="far" [color]="color"></atft-fog>
  `)
})
class StorybookFogComponent {

  enable: boolean;
  color: string;
  near: number;
  far: number;

}

export default {
  title: 'Effects / Fog',
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule
      ]
    })
  ],
  args: {
    enable: true,
    color: '0xDDDDDD',
    near: 10,
    far: 200
  },
  argTypes: {
    enable: {control: {type: 'boolean'}},
    color: {
      control: {
        type: 'select',
        options: [
          '0xDDDDDD',
          '0xAA0000',
          '0x00AA00',
          '0x0000AA'
        ]
      }
    },
    near: {control: {type: 'number', min: 1, max: 1000}},
    far: {control: {type: 'number', min: 1, max: 1000}},
  }
};

export const Fog = (args) => ({
  component: StorybookFogComponent,
  props: args
});
