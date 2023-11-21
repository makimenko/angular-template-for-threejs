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
        <atft-dof [focus]="focus" [aperture]="aperture" [maxblur]="maxblur"></atft-dof>
    </atft-effect-composer>
  `)
})
class StorybookDofComponent {

  @Input()
  enable = true;

  @Input()
  background : any;

  @Input()
  focus? : number;

  @Input()
  aperture? : number;

  @Input()
  maxblur? : number;

}


const meta: Meta<StorybookDofComponent> = {
  title: 'Effects/Depth Of Field',
  component: StorybookDofComponent,
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
      options: [
        '#FFFFF',
        '#DDDDDD',
        '#AA0000',
        '#00AA00',
        '#0000AA'
      ],
      control: {
        type: 'color'
      }
    },
    focus: {control: {type: 'range', min: 1, max: 3000, step: 10}},
    aperture: {control: {type: 'range', min: 0, max: 0.0005, step: .00001}},
    maxblur: {control: {type: 'range', min: 0, max: 0.05, step: .001}}
  }
};


export default meta;
type Story = StoryObj<StorybookDofComponent>;

export const Sample: Story = {
  args: {
    enable : true,
    background : '#FFFFFF',
    focus: 10.0,
    aperture: 0.0001,
    maxblur: 0.005
  },
};

export const Sample2: Story = {
  args: {
    enable : true,
    background : '#FFFFFF',
    focus: 1,
    aperture: 0.00002,
    maxblur: 0.037
  },
};

export const Sample3: Story = {
  args: {
    enable : true,
    background : '#dad3d3',
    focus: 300,
    aperture: 0.00001,
    maxblur: 0.05
  },
};


