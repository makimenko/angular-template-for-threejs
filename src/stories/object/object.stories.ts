import { Component } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import { AtftModule } from '../../../projects/atft/src/lib/atft.module';
import { axesSceneWrapper } from '../scene-wrapper/axes-scene-wrapper';

@Component({
  template: axesSceneWrapper(`
    <atft-empty
        [translateX]="translateX"
        [translateY]="translateY"
        [translateZ]="translateZ"
        [rotateX]="rotateX"
        [rotateY]="rotateY"
        [rotateZ]="rotateZ"
    >
      <atft-cylinder-mesh [radiusTop]="2.0" [radiusBottom]="7.0" [height]="10" [radialSegments]="36" [heightSegments]="1"
                          [material]="material" materialColor="0x00ff00">
      </atft-cylinder-mesh>
      <atft-torus-mesh [radius]="10" [tube]="1" [radialSegments]="16" [tubularSegments]="100" material="phong"
            materialColor="0x0000ff">
      </atft-torus-mesh>
            <atft-torus-mesh [radius]="10" [tube]="1" [radialSegments]="16" [tubularSegments]="100" material="phong"
            materialColor="0xff0000" [rotateX]="90 | deg2rad">
      </atft-torus-mesh>
    </atft-empty>
  `)
})
class StorybookObjectComponent {
  material = 'phong';
}

export default {
  title: 'Object',
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule
      ]
    })
  ],
  args: {
    translateX: 0,
    translateY: 0,
    translateZ: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0
  },
  argTypes: {
    translateX: { control: { type: 'range', min: -50, max: 50, step: 1 } },
    translateY: { control: { type: 'range', min: -50, max: 50, step: 1 } },
    translateZ: { control: { type: 'range', min: -50, max: 50, step: 1 } },
    rotateX: { control: { type: 'range', min: 0, max: 3.14, step: 0.1 } },
    rotateY: { control: { type: 'range', min: 0, max: 3.14, step: 0.1 } },
    rotateZ: { control: { type: 'range', min: 0, max: 3.14, step: 0.1 } }
  }
};

export const AbstractPorerties = (args) => ({
  component: StorybookObjectComponent,
  props: args
});
