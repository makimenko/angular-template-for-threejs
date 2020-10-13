import {moduleMetadata} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {Component} from '@angular/core';


@Component({
  template: `
    <atft-orbit-controls style="height:100%" rotateSpeed=1 zoomSpeed=1.2>
      <atft-renderer-canvas>
        <atft-perspective-camera [zAxisUp]="true" positionX=50 positionY=-20 positionZ=50></atft-perspective-camera>
        <atft-scene [background]="color">
          <atft-fog *ngIf="enable" [near]="10" [far]="100" [color]="color"></atft-fog>
          <atft-point-light intensity="0.5" distance="1000" translateX=90 translateY=90
                            translateZ=90></atft-point-light>
          <atft-point-light intensity="0.8" distance="1000" [translateX]="-60" [translateY]="-60"
                            [translateZ]="50"></atft-point-light>
          <atft-box-mesh height="10" width="10" depth="10" material="phong" materialColor="0xffffff">

          </atft-box-mesh>
        </atft-scene>
      </atft-renderer-canvas>
    </atft-orbit-controls>

  `
})
class StorybookFogComponent {

  enable: boolean;
  color: string;

}

export default {
  title: 'Effects / Fog',
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule
      ]
    })
  ],
  args: {
    enable: true,
    color: '0xDDDDDD'
  },
  argTypes: {
    enable: {control: {type: 'boolean'}},
    color: {
      control: {
        type: 'select',
        options: [
          '0xDDDDDD',
          '0xAA0000',
          '0x00AA00',
          '0x0000AA'
        ]
      }
    }
  }
};

export const Fog = (args) => ({
  component: StorybookFogComponent,
  props: args
});
