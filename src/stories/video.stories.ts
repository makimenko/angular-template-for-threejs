import {Component} from '@angular/core';
import {moduleMetadata} from '@storybook/angular';
import {AtftModule} from '../../projects/atft/src/lib/atft.module';
import {axesSceneWrapper} from './scene-wrapper/axes-scene-wrapper';


@Component({
  template: axesSceneWrapper(`
  <atft-plane-mesh *ngFor="let item of [].constructor(10); let i = index"
    height="24.5" width="42" materialColor="0xffffff" material="phong"
    [rotateZ]="(90 | deg2rad)" [rotateY]="(90 | deg2rad)" translateZ="10" [translateX]="(i*-20)">
    <atft-video-mesh height="22.5" width="40" translateZ="0.1"
        videoSrc="https://raw.githubusercontent.com/makimenko/files/master/angular-template-for-threejs/videos/ui/retro_futuristic_ui_720p.mp4">
    </atft-video-mesh>
  </atft-plane-mesh>
  `)
})
class StorybookVideoComponent {

}


export default {
  title: 'Video',
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule
      ]
    })
  ]
};

export const VideoTexture = (args) => ({
  component: StorybookVideoComponent,
  props: args
});
