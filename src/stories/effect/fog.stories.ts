import {moduleMetadata} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {Component} from '@angular/core';
import {effectsSceneWrapper} from '../scene-wrapper/effects-scene-wrapper';


@Component({
  selector: 'app-storybook',
  template: effectsSceneWrapper(`
    <atft-effect-composer *ngIf="enable">
        <atft-fog [near]="near" [far]="far" color="color"></atft-fog>
    </atft-effect-composer>
  `)
})
class StorybookFogComponent {

  enable: boolean;
  color: string;
  near: number;
  far: number;

}

export default {
  title: 'Effect/Fog',
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule
      ]
    })
  ],
  args: {
    enable: true,
    background: '0xDDDDDD',
    color: '0xDDDDDD',
    near: 10,
    far: 200
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
    color: {
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
    near: {control: {type: 'number', min: 1, max: 1000}},
    far: {control: {type: 'number', min: 1, max: 1000}},
  }
};

export const Fog = (args) => ({
  component: StorybookFogComponent,
  props: args
});
