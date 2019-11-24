import {Component} from '@angular/core';
import {worldSceneWrapper} from '../scene-wrapper/world-scene-wrapper';

@Component({
  template: worldSceneWrapper(`
    <atft-server-stand-actor atft-raycaster-group (mouseEnter)="mouseEnter()" [label]="label" [svgName]="svgName" translateX="-40">
    </atft-server-stand-actor>

    <atft-server-compact-actor atft-raycaster-group (mouseEnter)="mouseEnter()" [label]="label" [svgName]="svgName" translateX="-20">
    </atft-server-compact-actor>

    <atft-server-barrel-actor atft-raycaster-group (mouseEnter)="mouseEnter()" [label]="label" [svgName]="svgName" translateX="0">
    </atft-server-barrel-actor>

    <atft-server-icon-actor atft-raycaster-group (mouseEnter)="mouseEnter()" [label]="label" [svgName]="svgName" translateX="20">
    </atft-server-icon-actor>

    <atft-workstation-actor atft-raycaster-group (mouseEnter)="mouseEnter()" [label]="label" [svgName]="svgName" translateX="40"
      videoSrc="https://raw.githubusercontent.com/makimenko/files/master/angular-template-for-threejs/videos/ui/retro_futuristic_ui_360p.mp4">
    </atft-workstation-actor>
  `)
})
export class StorybookServerComponent {

  svgName: string;
  label: string;

  mouseEnter() {
    console.log('Mouse enter');
  }
}
