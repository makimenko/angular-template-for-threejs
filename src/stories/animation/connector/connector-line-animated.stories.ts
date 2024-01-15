import {Component, Input} from '@angular/core';
import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../../projects/atft/src/lib/atft.module';
import {axesSceneWrapper} from '../../scene-wrapper/axes-scene-wrapper';
import {AnimationService} from '../../../../projects/atft/src/lib/animation/animation.service';


@Component({
  selector: 'app-storybook',
  template: axesSceneWrapper(`
  <atft-sphere-mesh [radius]="2" [widthSegments]="10" [heightSegments]="20" material="lamb" materialColor="#00ff00"
    #a [translateY]="50" [translateX]="-10" [translateZ]="translateZ">
  </atft-sphere-mesh>
  <atft-sphere-mesh [radius]="2" [widthSegments]="10" [heightSegments]="20" material="lamb" materialColor="#00ff00"
    #b [translateY]="-50" [translateX]="10" [translateZ]="+10">
  </atft-sphere-mesh>

  <atft-line-connector [source]="a" [target]="b" materialColor="#ff0000" [animated]="true" >
  </atft-line-connector>
  `)
})
class StorybookLineAnimationComponent {

  @Input() lineColor: any;
  @Input() translateZ = 5;


  constructor(private animationService: AnimationService) {
    this.animationService.start();
  }

}



const meta: Meta<StorybookLineAnimationComponent> = {
  title: 'Animate/Connector/Line Animated',
  component: StorybookLineAnimationComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule
      ]
    })
  ],
  argTypes: {
    lineColor: {control: {type: 'color'}},
    translateZ: {control: {type: 'range', min: -100, max: 100, step: 1}},
  }
};


export default meta;
type Story = StoryObj<StorybookLineAnimationComponent>;

export const Sample: Story = {
  args: {
    lineColor: '#ff0000',
    translateZ: 5,
  },
};
