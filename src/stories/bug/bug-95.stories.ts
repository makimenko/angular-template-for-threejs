import {moduleMetadata, storiesOf} from '@storybook/angular';
import {Component} from '@angular/core';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';

import markdownNotes from './bug-95.stories.md';
import {axesSceneWrapper} from '../scene-wrapper/axes-scene-wrapper';

@Component({
  selector: 'app-storybook-obj-loader',
  template: axesSceneWrapper(`
      <atft-obj-loader
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
