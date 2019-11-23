import {moduleMetadata, storiesOf} from '@storybook/angular';
import {Component} from '@angular/core';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {axesSceneWrapper} from '../scene-wrapper/axes-scene-wrapper';
import {withKnobs} from '@storybook/addon-knobs';

@Component({
  template: axesSceneWrapper(`
  <atft-box-mesh height="10" width="10" depth="10" material="phong" materialColor="0xffffff" translateX="20"
    translateZ="7"></atft-box-mesh>
  <atft-plane-mesh height="24.5" width="42" materialColor="0xffffff" material="phong"
    [rotateZ]="(90 | deg2rad)" [rotateY]="(90 | deg2rad)" translateZ="10">
    <atft-css3d-video-mesh height="22.5" width="40" translateZ="0.1"
        videoSrc="https://raw.githubusercontent.com/makimenko/files/master/angular-template-for-threejs/videos/ui/retro_futuristic_ui_720p.mp4">
    </atft-css3d-video-mesh>
  </atft-plane-mesh>
  `)
})
class StorybookBoxMeshComponent {

}


storiesOf('Renderer', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [
        AtftModule
      ]
    }),
  )
  .add('css3d', () => ({
    component: StorybookBoxMeshComponent
  }))
;
