import {Component} from '@angular/core';
import {moduleMetadata} from '@storybook/angular';
import {AnimationService} from '../../../projects/atft/src/lib/animation/animation.service';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {axesSceneWrapper} from '../scene-wrapper/axes-scene-wrapper';
import {worldSceneWrapper} from '../scene-wrapper/world-scene-wrapper';


@Component({
  template: axesSceneWrapper(`
  <atft-sphere-mesh [radius]="2" [widthSegments]="10" [hightSegments]="20" material="lamb" materialColor="#00ff00"
    #a [translateY]="50" [translateX]="-10" [translateZ]="translateZ">
  </atft-sphere-mesh>
  <atft-sphere-mesh [radius]="2" [widthSegments]="10" [hightSegments]="20" material="lamb" materialColor="#00ff00"
    #b [translateY]="-20" [translateX]="-30" [translateZ]="+10">
  </atft-sphere-mesh>

  <atft-line-connector [source]="a" [target]="b" materialColor="#ff0000"></atft-line-connector>
  `)
})
class StorybookLineComponent {

}


@Component({
  template: axesSceneWrapper(`
  <atft-sphere-mesh [radius]="2" [widthSegments]="10" [hightSegments]="20" material="lamb" materialColor="#00ff00"
    #a [translateY]="50" [translateX]="-10" [translateZ]="translateZ">
  </atft-sphere-mesh>
  <atft-sphere-mesh [radius]="2" [widthSegments]="10" [hightSegments]="20" material="lamb" materialColor="#00ff00"
    #b [translateY]="-50" [translateX]="10" [translateZ]="+10">
  </atft-sphere-mesh>

  <atft-line-connector [source]="a" [target]="b" materialColor="#ff0000" [animated]="true" >
  </atft-line-connector>
  `)
})
class StorybookLineAnimationComponent {

  constructor(private animationService: AnimationService) {
    this.animationService.start();
  }

}

@Component({
  template: worldSceneWrapper(`
  <atft-effect-composer>
  </atft-effect-composer>

  <atft-sphere-mesh [radius]="0.5" [widthSegments]="10" [hightSegments]="20" material="lamb" materialColor="#0000ff"
    #a [translateY]="50" [translateX]="-10" [translateZ]="translateZ">
  </atft-sphere-mesh>
  <atft-sphere-mesh [radius]="0.5" [widthSegments]="10" [hightSegments]="20" material="lamb" materialColor="#0000ff"
    #b [translateY]="-50" [translateX]="10" [translateZ]="5">
  </atft-sphere-mesh>

  <atft-line-connector [source]="a" [target]="b" materialColor="#0000ff" [animated]="true" >
  </atft-line-connector>
  `)
})
class StorybookLineBloomComponent {

  constructor(private animationService: AnimationService) {
    this.animationService.start();
  }

}


export default {
  title: 'Other/Connector',
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule
      ]
    })
  ],
  args: {
    translateZ: 5
  },
  argTypes: {
    translateZ: {control: {type: 'range', min: -100, max: 100, step: 1}}
  }
};

export const Line = (args) => ({
  component: StorybookLineComponent,
  props: args
});

export const AnimatedLine = (args) => ({
  component: StorybookLineAnimationComponent,
  props: args
});

export const BloomLine = (args) => ({
  component: StorybookLineBloomComponent,
  props: args
});
