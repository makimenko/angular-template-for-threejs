import {Component, Input} from '@angular/core';
import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../../projects/atft/src/lib/atft.module';
import {axesSceneWrapper} from '../../scene-wrapper/axes-scene-wrapper';


@Component({
  selector: 'app-storybook',
  template: axesSceneWrapper(`
  <atft-plane-mesh *ngFor="let item of [].constructor(10); let i = index"
    [height]="24.5" [width]="42" materialColor="#ffffff" material="phong"
    [rotateZ]="(90 | deg2rad)" [rotateY]="(90 | deg2rad)" [translateZ]="10" [translateX]="(i*-20)">
    <atft-video-mesh [height]="22.5" [width]="40" [translateZ]="0.1"
        [videoSrc]="videoSrc">
    </atft-video-mesh>
  </atft-plane-mesh>
  `)
})
class StorybookVideoComponent {
  @Input() videoSrc!: string;

}


const meta: Meta<StorybookVideoComponent> = {
  title: 'Basic/Mesh/Video',
  component: StorybookVideoComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule
      ]
    })
  ],
  argTypes: {}
};


export default meta;
type Story = StoryObj<StorybookVideoComponent>;

export const FuturisticUI720p: Story = {
  args: {
    videoSrc : 'https://raw.githubusercontent.com/makimenko/files/master/angular-template-for-threejs/videos/ui/retro_futuristic_ui_720p.mp4'
  },
};

export const FuturisticUI360p: Story = {
  args: {
    videoSrc : 'https://raw.githubusercontent.com/makimenko/files/master/angular-template-for-threejs/videos/ui/retro_futuristic_ui_360p.mp4'
  },
};
