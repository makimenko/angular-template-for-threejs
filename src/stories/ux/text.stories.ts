import {Component} from '@angular/core';
import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {uxSceneWrapper} from '../scene-wrapper/ux-scene-wrapper';
import {UxActorModule} from '../../../projects/atft/src/lib/actor/ux';


@Component({
  selector: 'app-storybook',
  template: uxSceneWrapper(`
    <atft-text-actor [text]="label" [animate]="animate" [minDelay]="minDelay" [maxDelay]="maxDelay">
    </atft-text-actor>
  `)
})
class StorybookTextComponent {

  label!: string;
  animate!: boolean;
  minDelay!: number;
  maxDelay!: number;

}




const meta: Meta<StorybookTextComponent> = {
  title: 'UX/Text',
  component: StorybookTextComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule,
        UxActorModule
      ]
    })
  ],
  argTypes: {
    animate: {
      description: 'Enable animated text?',
      control: {
        type: 'boolean'
      }
    },
    label: {
      description: 'Please choose title of workstation',
      control: {type: 'text'}
    },
    minDelay: {control: {type: 'range', min: 0, max: 300, step: 1}},
    maxDelay: {control: {type: 'range', min: 0, max: 1000, step: 1}},
  }
};


export default meta;
type Story = StoryObj<StorybookTextComponent>;

export const Text: Story = {
  args: {
    animate: true,
    label: 'Hello, welcome to the world of animationService!',
    minDelay: 5,
    maxDelay: 20
  },
};


