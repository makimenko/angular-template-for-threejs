import {moduleMetadata, storiesOf} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {AtftDataCenterActorModule} from '../../../projects/atft/src/lib/actor/data-center/atft-data-center-actor.module';
import {Component} from '@angular/core';
import {worldSceneWrapper} from '../scene-wrapper/world-scene-wrapper';


@Component({
  template: worldSceneWrapper(`
    <atft-empty atft-raycaster-group name="root-empty" (mouseEnter)="mouseEnter()" (mouseExit)="mouseExit()" (mouseDown)="mouseDown()">
      <atft-box-mesh name="parent-box" height="10" width="10" depth="10" [materialColor]="color" translateZ="10">
        <atft-box-mesh name="child-box1" height="5" width="5" depth="5" translateX="12" [materialColor]="color">
                  <atft-box-mesh name="child-box1" height="3" width="3" depth="3" translateX="12" [materialColor]="color">
                  </atft-box-mesh>
        </atft-box-mesh>
      </atft-box-mesh>
    </atft-empty>
`)
})
class StorybookRaycasterGroupComponent {

  color = 0x00ff00;

  mouseEnter() {
    // console.log('StorybookRaycasterGroupComponent.mouseEnter');
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
    .addDecorator(
    moduleMetadata({
      imports: [
        AtftModule,
        AtftDataCenterActorModule
      ]
    }),
  )
  .add('group', () => ({
    component: StorybookRaycasterGroupComponent
  }))
;
