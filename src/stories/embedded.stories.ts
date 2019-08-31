import {moduleMetadata, storiesOf} from '@storybook/angular';
import {Component, forwardRef} from '@angular/core';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../projects/atft/src/lib/atft.module';
import {EmptyComponent} from '../../projects/atft/src/lib/objects/helpers';
import {AbstractObject3D} from '../../projects/atft/src/lib/objects/abstract-object-3d';


@Component({
  selector: 'storybook-sample',
  providers: [{provide: AbstractObject3D, useExisting: forwardRef(() => StorybookSampleComponent)}],
  template: `
      <atft-cylinder-mesh radiustop="2" radiusbottom="3" cylheight="10" radialSegments="36" hightSegments="1"
                          material="lamb" materialColor="0x00ff00" translateZ="10">
      </atft-cylinder-mesh>
  `
})
class StorybookSampleComponent extends EmptyComponent {

}

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
  selector: 'storybook-wrapper',
  template: `
      <atft-orbit-controls rotateSpeed=1 zoomSpeed=1.2 [listeningControlElement]=mainRenderer.renderPane (render)="mainRenderer.render()">
          <atft-webgl-renderer #mainRenderer>
              <atft-perspective-camera (render)="mainRenderer.render()" positionX=10 positionY=50 positionZ=50></atft-perspective-camera>
              <atft-scene>
                  <atft-axes-helper size=200></atft-axes-helper>
                  <atft-grid-helper size=100 divisions=10></atft-grid-helper>
                  <atft-point-light color="white" intensity="0.9" distance="1000" translateX=50 translateY=50
                                    translateZ=50></atft-point-light>
                  <!-- Why it's not working? -->
                  <ng-content></ng-content>
              </atft-scene>
          </atft-webgl-renderer>
      </atft-orbit-controls>
  `
})
class StorybookWrapperComponent {

}

@Component({
  selector: 'storybook-sample2',
  providers: [{provide: AbstractObject3D, useExisting: forwardRef(() => StorybookSample2Component)}],
  template: `
      <storybook-wrapper>
          <atft-cylinder-mesh radiustop="2" radiusbottom="3" cylheight="10" radialSegments="36" hightSegments="1"
                              material="lamb" materialColor="0xff0000" translateZ="10">
          </atft-cylinder-mesh>
      </storybook-wrapper>
  `
})
class StorybookSample2Component extends EmptyComponent {
  // TODO: Why @ContentChildren is not woring, with ng-content?

}


storiesOf('Embedded', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        AtftModule
      ],
      declarations: [
        StorybookContainerComponent,
        StorybookWrapperComponent,
        StorybookSampleComponent,
        StorybookSample2Component
      ]
    }),
  )
  .add('as Component', () => ({
    component: StorybookContainerComponent,
    props: {},
  }))
  .add('as NgContent', () => ({
    component: StorybookSample2Component,
    props: {},
  }))
;
