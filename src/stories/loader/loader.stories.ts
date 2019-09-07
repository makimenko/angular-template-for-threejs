import {moduleMetadata, storiesOf} from '@storybook/angular';
import {Component} from '@angular/core';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {defaultSceneWrapper} from '../common/default-scene-wrapper';
import {minimalisticSceneWrapper} from '../common/minimalistic-scene-wrapper';
import {worldSceneWrapper} from '../common/world-scene-wrapper';


@Component({
  selector: 'app-storybook-object-loader',
  template: defaultSceneWrapper(`
      <atft-object-loader model="assets/model/Server.json" (render)="mainRenderer.render()">
      </atft-object-loader>
  `)
})
class StorybookObjectLoaderComponent {

}


const modelPath = 'https://raw.githubusercontent.com/makimenko/files/master/angular-template-for-threejs/model/SampleArchitecture';

@Component({
  selector: 'app-storybook-obj-loader',
  template: worldSceneWrapper(`
      <atft-obj-loader (render)="mainRenderer.render()"
              model="${modelPath}/SampleArchitecture.obj"
              material="${modelPath}/SampleArchitecture.mtl"
              texturePath="${modelPath}/"
              translateX="-60" translateY="-40" translateZ="0.5">
          >
      </atft-obj-loader>
  `)
})
class StorybookObjLoaderComponent {

}


storiesOf('Loader', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        AtftModule
      ],
      declarations: [
        StorybookObjectLoaderComponent,
        StorybookObjLoaderComponent
      ]
    }),
  )
  .add('JSON', () => ({
    component: StorybookObjectLoaderComponent
  }))
  .add('Wavefront obj+mtl', () => ({
    component: StorybookObjLoaderComponent
  }))
;
