import {moduleMetadata, storiesOf} from '@storybook/angular';
import {Component} from '@angular/core';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {withKnobs} from '@storybook/addon-knobs';
import {worldSceneWrapper} from '../common/world-scene-wrapper';
import {DataCenterActorModule} from '../../../projects/atft/src/lib/actor/data-center/data-center-actor.module';

@Component({
  selector: 'app-storybook-box-mesh',
  template: worldSceneWrapper(`
      <atft-empty atft-raycaster-group name="empty-box" (mouseEnter)="mouseEnter()" (mouseExit)="mouseExit()" (mouseDown)="mouseDown()">
      <atft-box-mesh name="parent-box" atft-raycaster-enable height="10" width="10" depth="10" [materialColor]="color"
      translateZ="10" (render)="mainRenderer.render()">
        <atft-box-mesh name="child-box" atft-raycaster-enable height="5" width="5" depth="5" translateX="50" [materialColor]="color"
        (render)="mainRenderer.render()">
        </atft-box-mesh>
      </atft-box-mesh>
      </atft-empty>
`)
})
class StorybookRaycasterGroupComponent {

  color = 0x00ff00;

  mouseEnter() {
    this.color = 0x0000ff;
  }

  mouseExit() {
    this.color = 0x00ff00;
  }

  mouseDown() {
    this.color = 0xFF0000;
  }

}


storiesOf('Raycaster', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [
        AtftModule,
        DataCenterActorModule
      ]
    }),
  )
  .add('group', () => ({
    component: StorybookRaycasterGroupComponent
  }))
;



