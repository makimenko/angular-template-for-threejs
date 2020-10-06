import { Component, Optional, SkipSelf } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import { AtftModule } from '../../projects/atft/src/lib/atft.module';
import { AbstractObject3D } from '../../projects/atft/src/lib/object/abstract-object-3d';
import { EmptyComponent } from '../../projects/atft/src/lib/object/helper';
import { RendererService } from '../../projects/atft/src/lib/renderer';
import { provideParent } from '../../projects/atft/src/lib/util';


@Component({
  selector: 'app-storybook-wrapper',
  providers: [provideParent(StorybookWrapperComponent)],
  template: `
    <atft-orbit-controls rotateSpeed=1 zoomSpeed=1.2>
      <atft-renderer-canvas>
        <atft-perspective-camera positionX=10 positionY=50 positionZ=50></atft-perspective-camera>
        <atft-scene>
          <atft-axes-helper size=200></atft-axes-helper>
          <atft-grid-helper size=100 divisions=10></atft-grid-helper>
          <atft-point-light intensity="0.9" distance="1000" translateX=50 translateY=50
                            translateZ=50></atft-point-light>
          <!-- Why it's not working? -->
          <ng-content></ng-content>
        </atft-scene>
      </atft-renderer-canvas>
    </atft-orbit-controls>
  `
})
class StorybookWrapperComponent extends EmptyComponent {

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>
  ) {
    super(rendererService, parent);
    console.log('StorybookWrapperComponent.constructor', parent);
  }

}

@Component({
  selector: 'app-storybook-embedded',
  providers: [provideParent(StorybookEmbeddedComponent)],
  template: `
    <app-storybook-wrapper>
      <atft-cylinder-mesh [radiusTop]="2" [radiusBottom]="3" [height]="10" [radialSegments]="36" [heightSegments]="1"
                          material="lamb" materialColor="0xff0000" [translateZ]="10">
      </atft-cylinder-mesh>
    </app-storybook-wrapper>
  `
})
class StorybookEmbeddedComponent extends EmptyComponent {

  // TODO: Why not working, with ng-content?
  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>
  ) {
    super(rendererService, parent);
    console.log('StorybookEmbeddedComponent.constructor', parent);
  }

}

export default {
  title: 'Bugs',
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule
      ],
      declarations: [
        StorybookEmbeddedComponent,
        StorybookWrapperComponent
      ]
    })
  ]
};

export const Bug87 = (args) => ({
  component: StorybookEmbeddedComponent,
  props: args
});
