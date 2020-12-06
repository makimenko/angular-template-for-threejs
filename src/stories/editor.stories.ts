import {Component} from '@angular/core';
import {moduleMetadata} from '@storybook/angular';
import {AtftDataCenterActorModule} from '../../projects/atft/src/lib/actor/data-center';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../projects/atft/src/lib/atft.module';


@Component({
  template: `
    <atft-renderer-canvas>
      <atft-orthographic-camera [zAxisUp]="true" [positionX]=50 [positionY]=-50 [positionZ]=50 [zoom]="8"
                                atft-raycaster-camera atft-raycaster-enable>
      </atft-orthographic-camera>
      <atft-scene name="scene" background="0xa0a0a0">
        <atft-fog color="0xa0a0a0" near="80" far="500"></atft-fog>
        <atft-plane-mesh name="ground" height="2000" width="2000" materialColor="0x999999" [depthWrite]="true" [castShadow]="false"
                         [receiveShadow]="true" heightSegments="10" widthSegments="10" translateZ="-0.1">
        </atft-plane-mesh>
        <atft-axes-helper size=1000></atft-axes-helper>
        <atft-hemisphere-light name="hemi-light" skyColor="0xffffff" groundColor="0xffffff" intensity="0.3"
                               translateX="-20" translateY="-20" translateZ="100">
        </atft-hemisphere-light>
        <atft-point-light name="point-light" intensity="1" translateX="20" translateY="-50" translateZ="50"
                          [castShadow]="true"></atft-point-light>

        <atft-grid-actor iterationsX="30" iterationsY="20" (gridEnter)="onGridEnter($event)" (gridClick)="onGridClick($event)">
          <atft-server-stand-actor [label]="label" [svgName]="svgName"
                                   [translateX]="x" [translateY]="y">
          </atft-server-stand-actor>
        </atft-grid-actor>

      </atft-scene>
    </atft-renderer-canvas>
  `
})
class StorybookEditorComponent {

  svgName: string;
  label: string;
  x = 0;
  y = 0;

  onGridEnter(event) {
    // console.log('StorybookEditorComponent.onGridEnter', event);
    this.x = event.array[0];
    this.y = event.array[1];
  }

  onGridClick(event) {
    console.log('StorybookEditorComponent.onGridClick', event);
  }


}


export default {
  title: 'Editor',
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule,
        AtftDataCenterActorModule
      ]
    })
  ],
  args: {
    svgName: 'idea.svg',
    label: 'Workstation'
  },
  argTypes: {
    svgName: {
      description: 'Please choose SVG file from assets',
      control: {
        type: 'select', options: [
          'idea.svg',
          'upload.svg',
          'grid-world.svg'
        ]
      }
    },
    label: {
      description: 'Please choose title of workstation',
      control: {type: 'text'}
    }
  }
};


export const Editor = (args) => ({
  component: StorybookEditorComponent,
  props: args
});
