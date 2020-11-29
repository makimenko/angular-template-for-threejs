import {Component} from '@angular/core';
import {moduleMetadata} from '@storybook/angular';
import {AtftDataCenterActorModule} from '../../../projects/atft/src/lib/actor/data-center';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {worldSceneWrapper} from '../scene-wrapper/world-scene-wrapper';


@Component({
  template: `
    <atft-renderer-canvas>
      <atft-orthographic-camera [positionX]=0 [positionY]=0 [positionZ]="100" [zoom]="4">
      </atft-orthographic-camera>



      <atft-scene name="scene" #mainScene>
        <atft-ambient-light color="0xFFFFFF" intensity="0.4"></atft-ambient-light>

        <atft-point-light intensity="0.5" distance="1000" translateX=90 translateY=90
                          translateZ=90></atft-point-light>
        <atft-point-light intensity="0.8" distance="1000" [translateX]="-60" [translateY]="-60"
                          [translateZ]="50"></atft-point-light>

        <atft-text-actor [text]="label" [animate]="animate" [minDelay]="minDelay" [maxDelay]="maxDelay">
        </atft-text-actor>

      </atft-scene>
    </atft-renderer-canvas>
  `
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
        AtftDataCenterActorModule
      ]
    })
  ],
  args: {
    animate: true,
    label: 'Hello, welcome to the world of animation!',
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
    minDelay: { control: { type: 'range', min: 0, max: 300, step: 1 } },
    maxDelay: { control: { type: 'range', min: 0, max: 1000, step: 1 } },
  }
};



export const Animate = (args) => ({
  component: StorybookTextComponent,
  props: args
});
