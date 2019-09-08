import {moduleMetadata, storiesOf} from '@storybook/angular';
import {Component, forwardRef} from '@angular/core';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {EmptyComponent} from '../../../projects/atft/src/lib/objects/helpers';
import {AbstractObject3D} from '../../../projects/atft/src/lib/objects/abstract-object-3d';

import markdownNotes from './bug-95.stories.md';
import {defaultSceneWrapper} from '../common/default-scene-wrapper';

@Component({
  selector: 'app-storybook-obj-loader',
  template: defaultSceneWrapper(`
      <atft-obj-loader (render)="mainRenderer.render()"
              model="assets/model/smiley/smiley.obj"
              material="assets/model/smiley/smiley.mtl"
              texturePath="assets/model/smiley/"
              translateX="-60" translateY="-40">
          >
      </atft-obj-loader>
  `)
})
class StorybookObjLoaderComponent {

}


storiesOf('Bugs', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        AtftModule
      ]
    }),
  )
  .add('#95', () => ({
    component: StorybookObjLoaderComponent
  }), {
    notes: { markdown: markdownNotes }
  })
;
