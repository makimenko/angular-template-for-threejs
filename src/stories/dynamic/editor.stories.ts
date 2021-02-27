import {Component, ComponentFactoryResolver, ViewChild, ViewContainerRef} from '@angular/core';
import {moduleMetadata} from '@storybook/angular';
import {AtftDataCenterActorModule, ServerStandActorComponent} from '../../../projects/atft/src/lib/actor/data-center';
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';

// NOTE: Do direct import instead of library (allows to watch component and easy to develop)


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
        <atft-hemisphere-light name="hemi-light" skyColor="0xffffff" groundColor="0xffffff" intensity="0.5"
                               translateX="-20" translateY="-20" translateZ="100">
        </atft-hemisphere-light>
        <atft-point-light name="point-light" intensity="0.2" translateX="-50" translateY="-50" translateZ="50"
                          [castShadow]="true"></atft-point-light>

        <atft-grid-actor iterationsX="30" iterationsY="20" offset="1.1" (gridEnter)="onGridEnter($event)" (gridClick)="onGridClick($event)">
          <atft-frame-mesh [thickness]="1" [sizeX]="15" [sizeY]="15" [translateZ]="0.1" material="basic"
                           [translateX]="x" [translateY]="y">
          </atft-frame-mesh>
          <template #gridcontainer>
          </template>
        </atft-grid-actor>

      </atft-scene>
    </atft-renderer-canvas>
  `
})
class StorybookEditorComponent {

  icon: string;
  label: string;
  x = 0;
  y = 0;

  @ViewChild('gridcontainer', {read: ViewContainerRef}) gridcontainer;

  constructor(private resolver: ComponentFactoryResolver) {

  }

  onGridEnter(event) {
    // console.log('StorybookEditorComponent.onGridEnter', event);
    this.x = event.array[0];
    this.y = event.array[1];
  }

  onGridClick(event) {
    console.log('StorybookEditorComponent.onGridClick', event);

    const factory = this.resolver.resolveComponentFactory(ServerStandActorComponent);
    const componentRef = this.gridcontainer.createComponent(factory);
    componentRef.instance.label = 'Server';
    componentRef.instance.icon = 'a:language';
    componentRef.instance.translateX = this.x; // event.array[0];
    componentRef.instance.translateY = this.y; // event.array[1];
  }

}


export default {
  title: 'Dynamic/Editor',
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule,
        AtftDataCenterActorModule
      ],
      entryComponents: [
        ServerStandActorComponent
      ]
    })
  ],
  args: {
    icon: 'a:idea',
    label: 'Workstation'
  },
  argTypes: {
    icon: {
      description: 'Please choose SVG file from assets',
      control: {
        type: 'select', options: [
          'a:idea',
          'a:upload',
          'a:grid-world',
          'md:alarm_on',
          'alarm_off'
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
