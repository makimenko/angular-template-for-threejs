import {moduleMetadata, storiesOf} from '@storybook/angular';
import {Component, forwardRef} from '@angular/core';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../projects/atft/src/lib/atft.module';
import {EmptyComponent} from '../../projects/atft/src/lib/objects/helpers';
import {AbstractObject3D} from '../../projects/atft/src/lib/objects/abstract-object-3d';


@Component({
  selector: 'storybook-container',
  template: `
      <atft-orbit-controls rotateSpeed=1 zoomSpeed=1.2 [listeningControlElement]=mainRenderer.renderPane (render)="mainRenderer.render()">
          <atft-webgl-renderer #mainRenderer>
              <atft-perspective-camera (render)="mainRenderer.render()" positionX=10 positionY=50 positionZ=50></atft-perspective-camera>
              <atft-scene>
                  <atft-axes-helper size=200></atft-axes-helper>
                  <atft-grid-helper size=100 divisions=10></atft-grid-helper>
                  <atft-point-light color="white" intensity="0.9" distance="1000" translateX=50 translateY=50
                                    translateZ=50></atft-point-light>
                  <storybook-sample></storybook-sample>
              </atft-scene>
          </atft-webgl-renderer>
      </atft-orbit-controls>
  `
})
class StorybookContainerComponent {

}

@Component({
  selector: 'storybook-sample',
  providers: [{provide: AbstractObject3D, useExisting: forwardRef(() => StorybookCylindermeshComponent)}],
  template: `
      <atft-cylindermesh radiustop="2" radiusbottom="3" cylheight="10" radialSegments="36" hightSegments="1"
                         material="lamb" materialColor="0x00ff00">
      </atft-cylindermesh>
  `
})
class StorybookCylindermeshComponent extends EmptyComponent {

}


@Component({
  selector: 'storybook-sample',
  providers: [{provide: AbstractObject3D, useExisting: forwardRef(() => StorybookSpheremeshComponent)}],
  template: `
      <atft-spheremesh radius="4" widthSegments="20" hightSegments="20" material="lamb" materialColor="0xff0000"
                       scaleX="2">
      </atft-spheremesh>
  `
})
class StorybookSpheremeshComponent extends EmptyComponent {

}


storiesOf('Mesh', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        AtftModule
      ],
      declarations: [
        StorybookContainerComponent,
        StorybookCylindermeshComponent
      ]
    }),
  )
  .add('cylindermesh', () => ({
    component: StorybookContainerComponent,
    props: {},
  }))
;

storiesOf('Mesh', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        AtftModule
      ],
      declarations: [
        StorybookContainerComponent,
        StorybookSpheremeshComponent
      ]
    }),
  )
  .add('spheremesh', () => ({
    component: StorybookContainerComponent,
    props: {},
  }))
;

