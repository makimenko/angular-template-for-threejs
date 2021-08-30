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
    background: '#FFFFFF',
    color: '#DDDDDD',
    near: 10,
    far: 200
  },
  argTypes: {
    enable: {control: {type: 'boolean'}},
    background: {
      control: {
        options: [
          '#FFFFFF',
          '#DDDDDD',
          '#AA0000',
          '#00AA00',
          '#0000AA'
        ],
        type: 'color'
      }
    },
    color: {
      control: {
        options: [
          '#FFFFFF',
          '#DDDDDD',
          '#AA0000',
          '#00AA00',
          '#0000AA'
        ],
        type: 'color'
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
