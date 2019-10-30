import {moduleMetadata, storiesOf} from '@storybook/angular';
import {Component} from '@angular/core';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {defaultSceneWrapper} from '../common/default-scene-wrapper';
import {withKnobs} from '@storybook/addon-knobs';

@Component({
  template: defaultSceneWrapper(`
  <atft-box-mesh height="10" width="10" depth="10" material="phong" materialColor="0xffffff" translateX="20"
    translateZ="7"></atft-box-mesh>
  <atft-plane-mesh height="22" width="42" materialColor="0xffffff" material="phong"
    [rotateZ]="(90 | deg2rad)" [rotateY]="(90 | deg2rad)" translateZ="10">
    <atft-css3d-plane-mesh height="20" width="40" translateZ="0.1"></atft-css3d-plane-mesh>
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
