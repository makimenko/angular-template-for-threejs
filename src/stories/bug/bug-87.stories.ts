import {moduleMetadata, storiesOf} from '@storybook/angular';
import {Component, forwardRef} from '@angular/core';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {EmptyComponent} from '../../../projects/atft/src/lib/object/helper';
import {AbstractObject3D} from '../../../projects/atft/src/lib/object/abstract-object-3d';

import markdownNotes from './bug-87.stories.md';
import {withKnobs} from '@storybook/addon-knobs';


@Component({
  selector: 'app-storybook-wrapper',
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
class StorybookWrapperComponent {

}

@Component({
  selector: 'app-storybook-embedded',
  providers: [{provide: AbstractObject3D, useExisting: forwardRef(() => StorybookEmbeddedComponent)}],
  template: `
      <app-storybook-wrapper>
          <atft-cylinder-mesh [radiusTop]="2" [radiusBottom]="3" [height]="10" [radialSegments]="36" [heightSegments]="1"
                              material="lamb" materialColor="0xff0000" [translateZ]="10">
          </atft-cylinder-mesh>
      </app-storybook-wrapper>
  `
})
class StorybookEmbeddedComponent extends EmptyComponent {
  // TODO: Why @ContentChildren is not woring, with ng-content?

}


storiesOf('Bugs', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [
        AtftModule
      ],
      declarations: [
        StorybookWrapperComponent,
        StorybookEmbeddedComponent
      ]
    }),
  )
  .add('#87', () => ({
    component: StorybookEmbeddedComponent
  }), {
    notes: { markdown: markdownNotes }
  })
;
