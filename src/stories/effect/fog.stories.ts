import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {Component, Input} from '@angular/core';
import {effectsSceneWrapper} from '../scene-wrapper/effects-scene-wrapper';
import {AtftDataCenterActorModule} from "../../../projects/atft/src/lib/actor/data-center";


@Component({
  selector: 'app-storybook',
  template: effectsSceneWrapper(`
    <atft-effect-composer *ngIf="enable">
        <atft-fog [near]="near" [far]="far" [color]="color"></atft-fog>
    </atft-effect-composer>
  `)
})
class StorybookFogComponent {

  @Input()
  enable!: boolean;

  @Input()
  background : any;

  @Input()
  color!: any;

  @Input()
  near!: number;

  @Input()
  far!: number;

}





const meta: Meta<StorybookFogComponent> = {
  title: 'Effects/Fog',
  component: StorybookFogComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule,
        AtftDataCenterActorModule
      ]
    })
  ],
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


export default meta;
type Story = StoryObj<StorybookFogComponent>;

export const Sample: Story = {
  args: {
    enable: true,
    background: '#FFFFFF',
    color: '#DDDDDD',
    near: 10,
    far: 200
  },
};


export const Sample2: Story = {
  args: {
    enable: true,
    background: '#FFFFFF',
    color: '#FF0000',
    near: 0,
    far: 150
  },
};

export const Sample3: Story = {
  args: {
    enable: true,
    background: '#FF0000',
    color: '#AA0000',
    near: 0,
    far: 150
  },
};
