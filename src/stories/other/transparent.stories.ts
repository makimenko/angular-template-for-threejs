import {Component, Input} from '@angular/core';
import {moduleMetadata} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {axesSceneWrapper} from '../scene-wrapper/axes-scene-wrapper';


@Component({
  template: axesSceneWrapper(`
      <atft-empty *ngFor="let item of [].constructor(10); let k = index" [translateY]="0+(k*10)">
        <atft-sphere-mesh *ngFor="let item of [].constructor(10); let i = index"
              [radius]="5" [widthSegments]="20" [hightSegments]="20"
              [translateX]="translateX-(i*10)" [translateY]="-30"
              [transparent]="true" [opacity]="0.3">
        </atft-sphere-mesh>
      </atft-empty>
  `)
})
class StorybookTransparentComponent {

  @Input() translateX;
  @Input() materialColor;
}


export default {
  title: 'Other/Transparent',
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule
      ]
    })
  ],
  args: {
    materialColor: '0x00ff00',
    translateX: 20
  },
  argTypes: {
    materialColor: {control: {type: 'select', options: ['0xff0000', '0x00ff00', '0x0000ff']}},
    translateX: {control: {type: 'range', min: -50, max: 50, step: 1}}
  }
};

export const Transparent = (args) => ({
  component: StorybookTransparentComponent,
  props: args
});
