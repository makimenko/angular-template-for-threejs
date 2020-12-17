import { Component } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';
import { AnimationService } from '../../../projects/atft/src/lib/animation/animation.service';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import { AtftModule } from '../../../projects/atft/src/lib/atft.module';
import { axesSceneWrapper } from '../scene-wrapper/axes-scene-wrapper';


@Component({
  template: axesSceneWrapper(`
  <atft-sphere-mesh [radius]="2" [widthSegments]="10" [hightSegments]="20" material="lamb" materialColor="0x00ff00"
    #a translateY="50" translateX="-10" [translateZ]="translateZ">
  </atft-sphere-mesh>
  <atft-sphere-mesh [radius]="2" [widthSegments]="10" [hightSegments]="20" material="lamb" materialColor="0x00ff00"
    #b translateY="-20" translateX="-30" translateZ="+10">
  </atft-sphere-mesh>
  <atft-line-connector [source]="a" [target]="b" materialColor="0xff0000"></atft-line-connector>
  `)
})
class StorybookLineComponent {

}

@Component({
  template: axesSceneWrapper(`
  <atft-sphere-mesh [radius]="2" [widthSegments]="10" [hightSegments]="20" material="lamb" materialColor="0x00ff00"
    #a translateY="50" translateX="-10" [translateZ]="translateZ">
  </atft-sphere-mesh>
  <atft-sphere-mesh [radius]="2" [widthSegments]="10" [hightSegments]="20" material="lamb" materialColor="0x00ff00"
    #b translateY="-50" translateX="10" translateZ="+10">
  </atft-sphere-mesh>
  <atft-mesh-line-connector [source]="a" [target]="b" materialColor="0xff0000"></atft-mesh-line-connector>
  `)
})
class StorybookMeshLineComponent {

}

@Component({
  template: axesSceneWrapper(`
  <atft-sphere-mesh [radius]="2" [widthSegments]="10" [hightSegments]="20" material="lamb" materialColor="0x00ff00"
    #a translateY="50" translateX="-10" [translateZ]="translateZ">
  </atft-sphere-mesh>
  <atft-sphere-mesh [radius]="2" [widthSegments]="10" [hightSegments]="20" material="lamb" materialColor="0x00ff00"
    #b translateY="-50" translateX="10" translateZ="+10">
  </atft-sphere-mesh>

  <atft-mesh-line-connector [source]="a" [target]="b" materialColor="0xff0000"
  [animated]="true"
  >
  </atft-mesh-line-connector>
  `)
})
class StorybookMeshLineAnimationComponent {

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
    translateZ: -10
  },
  argTypes: {
    translateZ: { control: { type: 'range', min: -100, max: 100, step: 1 } }
  }
};

export const MeshLine = (args) => ({
  component: StorybookMeshLineComponent,
  props: args
});

export const Line = (args) => ({
  component: StorybookLineComponent,
  props: args
});

export const AnimatedMeshLine = (args) => ({
  component: StorybookMeshLineAnimationComponent,
  props: args
});
