import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {Component} from "@angular/core";
import {axesSceneWrapper} from "../../scene-wrapper/axes-scene-wrapper";
import {AtftModule} from '../../../../projects/atft/src/lib/atft.module';

@Component({
  selector: 'app-storybook',
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
                          [material]="material" materialColor="#00ff00">
      </atft-cylinder-mesh>
      <atft-torus-mesh [radius]="10" [tube]="1" [radialSegments]="16" [tubularSegments]="100" material="phong"
            materialColor="#0000ff">
      </atft-torus-mesh>
            <atft-torus-mesh [radius]="10" [tube]="1" [radialSegments]="16" [tubularSegments]="100" material="phong"
            materialColor="#ff0000" [rotateX]="90 | deg2rad">
      </atft-torus-mesh>
    </atft-empty>
  `)
})
class StorybookObjectModificationComponent {
  material = 'phong';
  translateX: number = 0;
  translateY: number = 0;
  translateZ: number = 0;
  rotateX: number = 0;
  rotateY: number = 0;
  rotateZ: number = 0;
}


const meta: Meta<StorybookObjectModificationComponent> = {
  title: 'Basic/Object/Modification',
  component: StorybookObjectModificationComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule
      ]
    })
  ],

};


export default meta;
type Story = StoryObj<StorybookObjectModificationComponent>;

export const Translate: Story = {
  args: {
    translateX: 10,
    translateY: 12,
    translateZ: -5
  },
  argTypes: {
    translateX: {control: {type: 'range', min: -50, max: 50, step: 1}},
    translateY: {control: {type: 'range', min: -50, max: 50, step: 1}},
    translateZ: {control: {type: 'range', min: -50, max: 50, step: 1}},
  }
};

export const Rotate: Story = {
  args: {
    rotateX: 1,
    rotateY: 0,
    rotateZ: 0.7
  }, argTypes: {
    rotateX: {control: {type: 'range', min: 0, max: 3.14, step: 0.1}},
    rotateY: {control: {type: 'range', min: 0, max: 3.14, step: 0.1}},
    rotateZ: {control: {type: 'range', min: 0, max: 3.14, step: 0.1}}
  }
};

