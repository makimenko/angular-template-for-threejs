import {moduleMetadata, storiesOf} from '@storybook/angular';
import {Component, forwardRef} from '@angular/core';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../projects/atft/src/lib/atft.module';
import {EmptyComponent} from '../../projects/atft/src/lib/objects/helpers';
import {AbstractObject3D} from '../../projects/atft/src/lib/objects/abstract-object-3d';


@Component({
  selector: 'storybook-empty-orbit',
  template: `
      <atft-orbit-controls rotateSpeed=1 zoomSpeed=1.2 [listeningControlElement]=mainRenderer.renderPane (render)="mainRenderer.render()">
          <atft-webgl-renderer #mainRenderer>
              <atft-perspective-camera (render)="mainRenderer.render()" positionX=10 positionY=50 positionZ=50></atft-perspective-camera>
              <atft-scene>
                  <atft-axes-helper size=200></atft-axes-helper>
                  <atft-grid-helper size=100 divisions=10></atft-grid-helper>
              </atft-scene>
          </atft-webgl-renderer>
      </atft-orbit-controls>
  `
})
class EmptyOrbitComponent {

}


@Component({
  selector: 'storybook-embedded',
  template: `
      <atft-orbit-controls rotateSpeed=1 zoomSpeed=1.2 [listeningControlElement]=mainRenderer.renderPane (render)="mainRenderer.render()">
          <atft-webgl-renderer #mainRenderer>
              <atft-perspective-camera (render)="mainRenderer.render()" positionX=10 positionY=50 positionZ=50></atft-perspective-camera>
              <atft-scene>
                  <atft-axes-helper size=200></atft-axes-helper>
                  <atft-grid-helper size=100 divisions=10></atft-grid-helper>
                  <atft-point-light color="white" intensity="0.9" distance="1000" translateX=50 translateY=50
                                    translateZ=50></atft-point-light>
                  <storybook-embedded-content></storybook-embedded-content>
              </atft-scene>
          </atft-webgl-renderer>
      </atft-orbit-controls>
  `
})
class EmbeddedComponent {

}


@Component({
  selector: 'storybook-embedded-content',
  providers: [{provide: AbstractObject3D, useExisting: forwardRef(() => EmbeddedContentComponent)}],
  template: `
      <atft-cylindermesh radiustop="2" radiusbottom="3" cylheight="10" radialSegments="36" hightSegments="1"
                         material="lamb" materialColor="0x00ff00" translateZ="10">
      </atft-cylindermesh>
  `
})
class EmbeddedContentComponent extends EmptyComponent {
  // TODO: Why @ContentChildren is not woring, with ng-content?

  constructor() {
    super();
    console.log('MeshComponent.constructor');
  }

  public ngAfterViewInit(): void {
    console.log('MeshComponent.ngAfterViewInit');
    super.ngAfterViewInit();
  }

}


storiesOf('Basic', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        AtftModule
      ],
      declarations: [
        EmptyOrbitComponent,
        EmbeddedContentComponent
      ]
    }),
  )
  .add('Empty scene', () => ({
    component: EmptyOrbitComponent,
    props: {},
  }))
  .add('Embedded component', () => ({
    component: EmbeddedComponent,
    props: {},
  }))
;
