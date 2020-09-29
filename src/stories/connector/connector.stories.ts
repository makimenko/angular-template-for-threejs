import { Component } from '@angular/core';
import { moduleMetadata, storiesOf } from '@storybook/angular';
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


const defaultArgs = {
  translateZ: -10
};

const defaultArgTypes = {
  translateZ: { control: { type: 'range', min: -100, max: 100, step: 1 } }
};


storiesOf('Connector', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        AtftModule
      ]
    }),
  )
  .add('mesh-line', (args) => ({
    component: StorybookMeshLineComponent,
    props: args
  }), {
    args: defaultArgs,
    argTypes: defaultArgTypes
  })
  .add('line', (args) => ({
    component: StorybookLineComponent,
    props: args
  }), {
    args: defaultArgs,
    argTypes: defaultArgTypes
  })
  .add('mesh-line-animation', (args) => ({
    component: StorybookMeshLineAnimationComponent,
    props: args
  }), {
    args: defaultArgs,
    argTypes: defaultArgTypes
  })
;


