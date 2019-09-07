import {moduleMetadata, storiesOf} from '@storybook/angular';
import {Component} from '@angular/core';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {defaultSceneWrapper} from '../common/default-scene-wrapper';
import {number, withKnobs} from '@storybook/addon-knobs';


@Component({
  selector: 'app-storybook-mesh-line',
  template: defaultSceneWrapper(`
  <atft-sphere-mesh [radius]="2" [widthSegments]="10" [hightSegments]="20" material="lamb" materialColor="0x00ff00"
    #a translateY="50" translateX="-10" [translateZ]="translateZ">
  </atft-sphere-mesh>
  <atft-sphere-mesh [radius]="2" [widthSegments]="10" [hightSegments]="20" material="lamb" materialColor="0x00ff00"
    #b translateY="-50" translateX="10" translateZ="+10">
  </atft-sphere-mesh>
  <atft-mesh-line-connector [source]="a" [target]="b" (render)="mainRenderer.render()" materialColor="0xff0000"></atft-mesh-line-connector>
  `)
})
class StorybookMeshLineComponent {

}

@Component({
  selector: 'app-storybook-line',
  template: defaultSceneWrapper(`
  <atft-sphere-mesh [radius]="2" [widthSegments]="10" [hightSegments]="20" material="lamb" materialColor="0x00ff00"
    #a translateY="50" translateX="-10" [translateZ]="translateZ">
  </atft-sphere-mesh>
  <atft-sphere-mesh [radius]="2" [widthSegments]="10" [hightSegments]="20" material="lamb" materialColor="0x00ff00"
    #b translateY="-20" translateX="-30" translateZ="+10">
  </atft-sphere-mesh>
  <atft-line-connector [source]="a" [target]="b" (render)="mainRenderer.render()" materialColor="0xff0000"></atft-line-connector>
  `)
})
class StorybookLineComponent {

}

storiesOf('Connector', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [
        AtftModule
      ],
      declarations: [
        StorybookMeshLineComponent,
        StorybookLineComponent
      ]
    }),
  )
  .add('mesh-line', () => ({
    component: StorybookMeshLineComponent,
    props: {
      translateZ: number('translateZ', -10, {range: true, min: -10, max: 100, step: 1})
    }
  }))
  .add('line', () => ({
    component: StorybookLineComponent,
    props: {
      translateZ: number('translateZ', -10, {range: true, min: -10, max: 100, step: 1})
    }
  }))
;



