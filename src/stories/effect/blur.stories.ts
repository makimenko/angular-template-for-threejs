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
    <atft-blur *ngIf="enable" ></atft-blur>
    </atft-effect-composer>
  `)
})
class StorybookBlurComponent {
  @Input()
  enable = true;

  @Input()
  background : any;
}



const meta: Meta<StorybookBlurComponent> = {
  title: 'Effects/Blur',
  component: StorybookBlurComponent,
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


export default meta;
type Story = StoryObj<StorybookBlurComponent>;

export const Blur: Story = {
  args: {
    enable : true,
    background : '#FFFFFF'
  },
};

