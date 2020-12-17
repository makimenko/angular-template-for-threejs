import {moduleMetadata} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {Component} from '@angular/core';
import {performanceSceneWrapper} from '../scene-wrapper/performance-scene-wrapper';

@Component({
  template: performanceSceneWrapper(`
    <atft-text-mesh
        atft-dashed-draw materialColor="0x00EE00" dashColor="0x00FF00"
        [initialOpacity]="0.0" [targetOpacity]="0.1"
        text="Hello world"
    ></atft-text-mesh>

    <atft-sphere-mesh
        atft-dashed-draw materialColor="0x0000FF" dashColor="0x0000FF"
        [targetOpacity]="0.1"
        [radius]="10" [hightSegments]="10" [widthSegments]="10"
        [translateY]="20"
    ></atft-sphere-mesh>

    <atft-cylinder-mesh
        atft-dashed-draw materialColor="0x0000FF" dashColor="0x0000FF"
        [initialOpacity]="0.5" [hideDash]="true"
        [height]="20" [heightSegments]="20" [radialSegments]="20"
        [radiusBottom]="2" [radiusTop]="5"
        [translateY]="20" [translateX]="20"
    ></atft-cylinder-mesh>
  `)
})
class StorybookDashedDrawComponent {

}

export default {
  title: 'Effect/Dashed Draw',
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule
      ]
    })
  ]
};


export const DashedDraw = (args) => ({
  component: StorybookDashedDrawComponent,
  props: args
});
