import {Component} from '@angular/core';
import {moduleMetadata} from '@storybook/angular';
import {AtftDataCenterActorModule} from '../../../projects/atft/src/lib/actor/data-center';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {worldSceneWrapper} from '../scene-wrapper/world-scene-wrapper';

@Component({
  selector: 'app-storybook',
  template: worldSceneWrapper(`

    <atft-server-stand-actor atft-raycaster-group (mouseEnter)="mouseEnter()" label="AA"
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

  icon: string;
  label: string;

  mouseEnter() {
    console.log('Mouse enter');
  }
}


export default {
  title: 'Other/Server',
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule,
        AtftDataCenterActorModule
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
          'md:alarm_on'
        ]
      }
    },
    label: {
      description: 'Please choose title of workstation',
      control: {type: 'text'}
    }
  }
};


export const Server = (args) => ({
  component: StorybookServerComponent,
  props: args
});
