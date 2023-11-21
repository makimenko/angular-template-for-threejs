import {Component, Input} from '@angular/core';
import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../../projects/atft/src/lib/atft.module';
import {AnimationService} from '../../../../projects/atft/src/lib/animation/animation.service';
import {worldSceneWrapper} from "../../scene-wrapper/world-scene-wrapper";

@Component({
  selector: 'app-storybook',
  template: worldSceneWrapper(`
  <atft-effect-composer>
  </atft-effect-composer>

  <atft-sphere-mesh [radius]="0.5" [widthSegments]="10" [hightSegments]="20" material="lamb" materialColor="#0000ff"
    #a [translateY]="50" [translateX]="-10" [translateZ]="translateZ">
  </atft-sphere-mesh>
  <atft-sphere-mesh [radius]="0.5" [widthSegments]="10" [hightSegments]="20" material="lamb" materialColor="#0000ff"
    #b [translateY]="-50" [translateX]="10" [translateZ]="5">
  </atft-sphere-mesh>

  <atft-line-connector [source]="a" [target]="b" [materialColor]="lineColor" [animated]="true" >
  </atft-line-connector>
  `)
})
class StorybookLineBloomComponent {

  @Input() lineColor: any;
  @Input() translateZ = 5;

  constructor(private animationService: AnimationService) {
    this.animationService.start();
  }

}


const meta: Meta<StorybookLineBloomComponent> = {
  title: 'Animate/Connector/Line Bloom',
  component: StorybookLineBloomComponent,
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
type Story = StoryObj<StorybookLineBloomComponent>;

export const Sample: Story = {
  args: {
    lineColor: '#ff0000',
    translateZ: 5,
  },
};
