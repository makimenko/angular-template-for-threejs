import {Component, ComponentFactoryResolver, ViewChild, ViewContainerRef} from '@angular/core';
import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftDataCenterActorModule, ServerStandActorComponent} from '../../../../projects/atft/src/lib/actor/data-center';
import {AtftModule} from '../../../../projects/atft/src/lib/atft.module';




@Component({
  selector: 'app-storybook',
  template: `
    <atft-renderer-canvas>
      <atft-orthographic-camera [zAxisUp]="true" [positionX]=50 [positionY]=-50 [positionZ]=50 [zoom]="8"
                                atft-raycaster-camera atft-raycaster-enable>
      </atft-orthographic-camera>
      <atft-scene name="scene" background="0xa0a0a0">
        <atft-fog color="#a0a0a0" near="80" far="500"></atft-fog>
        <atft-plane-mesh name="ground" [height]="2000" [width]="2000" materialColor="#999999" [depthWrite]="true" [castShadow]="false"
                         [receiveShadow]="true" heightSegments="10" widthSegments="10" [translateZ]="-0.1">
        </atft-plane-mesh>
        <atft-hemisphere-light name="hemi-light" skyColor="#ffffff" groundColor="#ffffff" [intensity]="0.5"
                               [translateX]="-20" [translateY]="-20" [translateZ]="100">
        </atft-hemisphere-light>
        <atft-point-light name="point-light" [intensity]="0.2" [translateX]="-50" [translateY]="-50" [translateZ]="50"
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

  icon?: string;
  label?: string;
  x = 0;
  y = 0;

  @ViewChild('gridcontainer', {read: ViewContainerRef}) gridcontainer : any;

  constructor(private resolver: ComponentFactoryResolver) {

  }

  onGridEnter(event: any) {
    // console.log('StorybookEditorComponent.onGridEnter', event);
    this.x = event.array[0];
    this.y = event.array[1];
  }

  onGridClick(event: any) {
    console.log('StorybookEditorComponent.onGridClick', event);

    const factory = this.resolver.resolveComponentFactory(ServerStandActorComponent);
    const componentRef = this.gridcontainer.createComponent(factory);
    componentRef.instance.label = this.label;
    componentRef.instance.icon = this.icon;
    componentRef.instance.translateX = this.x; // event.array[0];
    componentRef.instance.translateY = this.y; // event.array[1];
  }

}




const meta: Meta<StorybookEditorComponent> = {
  title: 'Basic/Dynamic/Editor',
  component: StorybookEditorComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule,
        AtftDataCenterActorModule
      ]
    })
  ],
  argTypes: {
    icon: {
      description: 'Please choose SVG file from assets',
      options: [
        'a:idea',
        'a:upload',
        'a:grid-world',
        'md:alarm_on',
        'alarm_off'
      ],
      control: {
        type: 'select'
      }
    },
    label: {
      description: 'Please choose title of workstation',
      control: {type: 'text'}
    }
  }
};


export default meta;
type Story = StoryObj<StorybookEditorComponent>;

export const Editor: Story = {
  args: {
    icon: 'a:idea',
    label: 'Workstation'
  },
};

