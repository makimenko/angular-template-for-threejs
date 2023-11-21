import {Component, Input} from '@angular/core';
import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../../projects/atft/src/lib/atft.module';
import {
  AtftDataCenterActorModule
} from '../../../../projects/atft/src/lib/actor/data-center/atft-data-center-actor.module';
import {worldSceneWrapper} from "../../scene-wrapper/world-scene-wrapper";


@Component({
  selector: 'app-storybook',
  template: worldSceneWrapper(`

    <atft-server-stand-actor atft-raycaster-group (mouseEnter)="mouseEnter()" [label]="label"
      [icon]="icon" [translateX]="-40">
    </atft-server-stand-actor>

    <atft-server-compact-actor atft-raycaster-group (mouseEnter)="mouseEnter()" [label]="label"
      [icon]="icon" [translateX]="-20">
    </atft-server-compact-actor>

    <atft-server-barrel-actor atft-raycaster-group (mouseEnter)="mouseEnter()" [label]="label"
      [icon]="icon" [translateX]="0">
    </atft-server-barrel-actor>

    <atft-server-icon-actor atft-raycaster-group (mouseEnter)="mouseEnter()" [label]="label"
      [icon]="icon" [translateX]="20">
    </atft-server-icon-actor>

    <atft-workstation-actor atft-raycaster-group (mouseEnter)="mouseEnter()" [label]="label"
      [icon]="icon" [translateX]="40"
      videoSrc="https://raw.githubusercontent.com/makimenko/files/master/angular-template-for-threejs/videos/ui/retro_futuristic_ui_360p.mp4">
    </atft-workstation-actor>
  `)
})
class StorybookServerComponent {

  @Input() icon!: string;
  @Input() label!: string;

  mouseEnter() {
    console.log('Mouse enter');
  }
}


const meta: Meta<StorybookServerComponent> = {
  title: 'Basic/Mesh/Server',
  component: StorybookServerComponent,
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
        'md:alarm_on'
      ],
      control: {
        type: 'select',
      }
    },
    label: {
      description: 'Please choose title of workstation',
      control: {type: 'text'}
    }
  }
};


export default meta;
type Story = StoryObj<StorybookServerComponent>;

export const Idea: Story = {
  args: {
    icon: 'a:idea',
    label: 'Idea'
  },
};

export const Upload: Story = {
  args: {
    icon: 'a:upload',
    label: 'Upload File'
  },
};
