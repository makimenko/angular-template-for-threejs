import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {Component} from '@angular/core';
import {performanceSceneWrapper} from '../scene-wrapper/performance-scene-wrapper';

@Component({
  selector: 'app-storybook',
  template: performanceSceneWrapper(`
    <atft-text-mesh
        atft-dashed-draw materialColor="#00EE00" dashColor="#00FF00"
        [initialOpacity]="0.0" [targetOpacity]="0.1"
        text="Hello world"
    ></atft-text-mesh>

    <atft-sphere-mesh
        atft-dashed-draw materialColor="#0000FF" dashColor="#0000FF"
        [targetOpacity]="0.1"
        [radius]="10" [heightSegments]="10" [widthSegments]="10"
        [translateY]="20"
    ></atft-sphere-mesh>

    <atft-cylinder-mesh
        atft-dashed-draw materialColor="#0000FF" dashColor="#0000FF"
        [initialOpacity]="0.5" [hideDash]="true"
        [height]="20" [heightSegments]="20" [radialSegments]="20"
        [radiusBottom]="2" [radiusTop]="5"
        [translateY]="20" [translateX]="20"
    ></atft-cylinder-mesh>
  `)
})
class StorybookDashedDrawComponent {

}


const meta: Meta<StorybookDashedDrawComponent> = {
  title: 'Effects/Dashed Draw',
  component: StorybookDashedDrawComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule
      ]
    })
  ],
};


export default meta;
type Story = StoryObj<StorybookDashedDrawComponent>;

export const DashedDraw: Story = {
};




