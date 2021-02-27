import {Component} from '@angular/core';
import {moduleMetadata} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {axesSceneWrapper} from '../scene-wrapper/axes-scene-wrapper';
import {worldSceneWrapper} from '../scene-wrapper/world-scene-wrapper';


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
      <atft-object-loader  model="assets/model/Server.json">
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

@Component({
  template: axesSceneWrapper(`
    <atft-svg-loader model="https://raw.githubusercontent.com/material-icons/material-icons/master/svg/web_asset/outline.svg"
    overrideMaterialColor="0xff0000">
    </atft-svg-loader>
  `)
})
class StorybookExternalSVGLoaderComponent {

}

@Component({
  template: axesSceneWrapper(`
<atft-empty>
    <atft-svg-loader model="https://raw.githubusercontent.com/material-icons/material-icons/master/svg/web_asset/outline.svg">
    </atft-svg-loader>

    <atft-svg-loader model="assets/Azure_Public_Service_Icons/Icons/App Services/10035-icon-service-App-Services.svg"
    [translateY]="20">
    </atft-svg-loader>
</atft-empty>
  `)
})
class StorybookDifferentSVGLoaderComponent {

}

export default {
  title: 'Other/Loader',
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule
      ]
    })
  ]
};

export const ObjectLoader = (args) => ({
  component: StorybookObjectLoaderComponent,
  props: args
});

export const ObjLoader = (args) => ({
  component: StorybookObjLoaderComponent,
  props: args
});

export const SvgLoader = (args) => ({
  component: StorybookSVGLoaderComponent,
  props: args
});

export const ExternalSvgLoader = (args) => ({
  component: StorybookExternalSVGLoaderComponent,
  props: args
});

export const DifferentSvgLoader = (args) => ({
  component: StorybookDifferentSVGLoaderComponent,
  props: args
});

SvgLoader.args = {
  model: './assets/svg/idea.svg',
  overrideMaterialColor: '0xff0000'
};

SvgLoader.argTypes = {
  model: {
    control: {
      type: 'select',
      options: [
        './assets/svg/idea.svg',
        './assets/svg/grid-world.svg',
        './assets/svg/upload.svg',
        'https://raw.githubusercontent.com/material-icons/material-icons/master/svg/video_settings/baseline.svg',
        'https://raw.githubusercontent.com/material-icons/material-icons/master/svg/desktop_access_disabled/baseline.svg',
        'https://raw.githubusercontent.com/material-icons/material-icons/master/svg/settings_input_antenna/baseline.svg',
        'https://raw.githubusercontent.com/material-icons/material-icons/master/svg/web_asset/baseline.svg'
      ]
    }
  },
  overrideMaterialColor: {
    control: {
      type: 'select',
      options: [
        '0xff0000',
        '0x00ff00',
        '0x0000ff'
      ]
    }
  }
};

