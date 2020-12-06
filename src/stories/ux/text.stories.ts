import {Component} from '@angular/core';
import {moduleMetadata} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {uxSceneWrapper} from '../scene-wrapper/ux-scene-wrapper';
import {UxActorModule} from '../../../projects/atft/src/lib/actor/ux';


@Component({
  template: uxSceneWrapper(`
    <atft-text-actor [text]="label" [animate]="animate" [minDelay]="minDelay" [maxDelay]="maxDelay">
    </atft-text-actor>
  `)
})
class StorybookTextComponent {

  label: string;
  animate: boolean;
  minDelay: number;
  maxDelay: number;

}


export default {
  title: 'UX / Text',
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule,
        UxActorModule
      ]
    })
  ],
  args: {
    animate: true,
    label: 'Hello, welcome to the world of animationService!',
    minDelay: 5,
    maxDelay: 20
  },
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


export const Animate = (args) => ({
  component: StorybookTextComponent,
  props: args
});
