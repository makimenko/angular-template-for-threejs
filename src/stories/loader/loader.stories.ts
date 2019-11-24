import {moduleMetadata, storiesOf} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {select, withKnobs} from '@storybook/addon-knobs';
import {Component} from '@angular/core';
import {worldSceneWrapper} from '../scene-wrapper/world-scene-wrapper';
import {axesSceneWrapper} from '../scene-wrapper/axes-scene-wrapper';


const modelPath = 'https://raw.githubusercontent.com/makimenko/files/master/angular-template-for-threejs/model/SampleArchitecture';
@Component({
  template: worldSceneWrapper(`
      <atft-obj-loader
              model="${modelPath}/SampleArchitecture.obj"
              material="${modelPath}/SampleArchitecture.mtl"
              resourcePath="${modelPath}/"
              translateX="-60" translateY="-40" translateZ="0.5">
          >
      </atft-obj-loader>
  `)
})
class StorybookObjLoaderComponent {

}

@Component({
  template: axesSceneWrapper(`
      <atft-object-loader model="assets/model/Server.json">
      </atft-object-loader>
  `)
})
class StorybookObjectLoaderComponent {

}


@Component({
  template: axesSceneWrapper(`
      <atft-svg-loader model="./assets/svg/worldwide.svg" maxX="15" maxY="15">
      </atft-svg-loader>
      <atft-svg-loader [model]="model" [overrideMaterialColor]="overrideMaterialColor"
        maxX="10" maxY="10"  translateZ="2">
      </atft-svg-loader>
  `)
})
class StorybookSVGLoaderComponent {

}


storiesOf('Loader', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [
        AtftModule
      ]
    }),
  )
  .add('object-loader', () => ({
    component: StorybookObjectLoaderComponent
  }))
  .add('obj-loader', () => ({
    component: StorybookObjLoaderComponent
  }))
  .add('svg-loader', () => ({
    component: StorybookSVGLoaderComponent,
    props: {
      model: select('model', [
          './assets/svg/idea.svg',
          './assets/svg/grid-world.svg',
          './assets/svg/upload.svg'
        ],
        './assets/svg/idea.svg'
      ),
      overrideMaterialColor: select('overrideMaterialColor', ['0xff0000', '0x00ff00', '0x0000ff'], '0x0000ff')
    }
  }))
;
