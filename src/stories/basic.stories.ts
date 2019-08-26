import {moduleMetadata, storiesOf} from '@storybook/angular';
import {Component } from '@angular/core';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../projects/atft/src/lib/atft.module';


@Component({
  selector: 'storybook-empty-orbit',
  template: `
      <atft-orbit-controls rotateSpeed=1 zoomSpeed=1.2 [listeningControlElement]=mainRenderer.renderPane (render)="mainRenderer.render()">
          <atft-webgl-renderer #mainRenderer>
              <atft-perspective-camera (render)="mainRenderer.render()" positionX=10 positionY=50 positionZ=50></atft-perspective-camera>
              <atft-scene>
                  <atft-axes-helper size=200></atft-axes-helper>
                  <atft-grid-helper size=100 divisions=10></atft-grid-helper>
                  <ng-content></ng-content>
              </atft-scene>
          </atft-webgl-renderer>
      </atft-orbit-controls>
  `
})
class EmptyOrbitComponent {
}


@Component({
  selector: 'storybook-mesh',
  template: `
      <storybook-empty-orbit>
              <atft-spheremesh radius="4" widthSegments="20" hightSegments="20" material="lamb" materialColor="0xff0000"
                               translateX=10 translateY=5 translateZ="20" scaleX="2">
              </atft-spheremesh>
      </storybook-empty-orbit>
  `
})
class MeshComponent {
  // TODO: Why @ContentChildren is not woring, with ng-content?
}



storiesOf('Basic', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        AtftModule
      ],
      declarations: [
        EmptyOrbitComponent,
        MeshComponent
      ]
    }),
  )
  .add('Empty + Orbit', () => ({
  component: EmptyOrbitComponent,
  props: {
  },
}))
  .add('Mesh Sample', () => ({
    component: MeshComponent,
    props: {
    },
  }))

;
