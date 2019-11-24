import {moduleMetadata, storiesOf} from '@storybook/angular';
import {Component} from '@angular/core';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {axesSceneWrapper} from '../scene-wrapper/axes-scene-wrapper';
import {number, withKnobs} from '@storybook/addon-knobs';

import markdownNotes from './object.stories.md';

@Component({
  template: axesSceneWrapper(`
    <atft-empty
        [translateX]="translateX"
        [translateY]="translateY"
        [translateZ]="translateZ"
        [rotateX]="rotateX"
        [rotateY]="rotateY"
        [rotateZ]="rotateZ"
    >
      <atft-cylinder-mesh [radiusTop]="2.0" [radiusBottom]="7.0" [height]="10" [radialSegments]="36" [heightSegments]="1"
                          material="phong" materialColor="0x00ff00">
      </atft-cylinder-mesh>
      <atft-torus-mesh [radius]="10" [tube]="1" [radialSegments]="16" [tubularSegments]="100" material="phong"
            materialColor="0x0000ff">
      </atft-torus-mesh>
            <atft-torus-mesh [radius]="10" [tube]="1" [radialSegments]="16" [tubularSegments]="100" material="phong"
            materialColor="0xff0000" [rotateX]="90 | deg2rad">
      </atft-torus-mesh>
    </atft-empty>
  `)
})
class StorybookObjectComponent {

}


storiesOf('Object', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [
        AtftModule
      ]
    }),
  )
  .add('abstract props  ', () => ({
    component: StorybookObjectComponent,
    props: {
      translateX: number('translateX', 0, {range: true, min: -50, max: 50, step: 1}),
      translateY: number('translateY', 0, {range: true, min: -50, max: 50, step: 1}),
      translateZ: number('translateZ', 0, {range: true, min: -50, max: 50, step: 1}),
      rotateX: number('rotateX rad', 0, {range: true, min: 0, max: 6.28, step: 0.1}),
      rotateY: number('rotateY rad', 0, {range: true, min: 0, max: 6.28, step: 0.1}),
      rotateZ: number('rotateZ rad', 0, {range: true, min: 0, max: 6.28, step: 0.1})
    }
  }), {
    notes: { markdown: markdownNotes }
    }
  )
;



