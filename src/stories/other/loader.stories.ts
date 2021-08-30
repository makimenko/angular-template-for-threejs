import {Component} from '@angular/core';
import {moduleMetadata} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {axesSceneWrapper} from '../scene-wrapper/axes-scene-wrapper';
import {worldSceneWrapper} from '../scene-wrapper/world-scene-wrapper';


const modelPath = 'https://raw.githubusercontent.com/makimenko/files/master/angular-template-for-threejs/model/SampleArchitecture';

@Component({
  selector: 'app-storybook',
  template: worldSceneWrapper(`
      <atft-obj-loader
              model="${modelPath}/SampleArchitecture.obj"
              material="${modelPath}/SampleArchitecture.mtl"
              resourcePath="${modelPath}/"
              [translateX]="-60" [translateY]="-40" [translateZ]="0.5">
          >
      </atft-obj-loader>
  `)
})
class StorybookObjLoaderComponent {

}

@Component({
  selector: 'app-storybook',
  template: axesSceneWrapper(`
      <atft-object-loader  model="assets/model/Server.json">
      </atft-object-loader>
  `)
})
class StorybookObjectLoaderComponent {

}


@Component({
  selector: 'app-storybook',
  template: axesSceneWrapper(`
      <atft-svg-loader model="./assets/svg/worldwide.svg" [maxX]="15" [maxY]="15">
      </atft-svg-loader>
      <atft-svg-loader [model]="model" [overrideMaterialColor]="overrideMaterialColor"
        [maxX]="10" [maxY]="10"  [translateZ]="2">
      </atft-svg-loader>
  `)
})
class StorybookSVGLoaderComponent {

}

@Component({
  selector: 'app-storybook',
  template: axesSceneWrapper(`
    <atft-svg-loader model="https://raw.githubusercontent.com/material-icons/material-icons/master/svg/web_asset/outline.svg"
    overrideMaterialColor="#ff0000">
    </atft-svg-loader>
  `)
})
class StorybookExternalSVGLoaderComponent {

}

@Component({
  selector: 'app-storybook',
  template: axesSceneWrapper(`
<atft-empty>
    <atft-svg-loader model="https://raw.githubusercontent.com/material-icons/material-icons/master/svg/web_asset/outline.svg">
    </atft-svg-loader>

    <atft-svg-loader model="https://raw.githubusercontent.com/makimenko/files/master/azure-icons/App-Services.svg" [translateY]="20">
    </atft-svg-loader>

    <atft-svg-loader model="https://raw.githubusercontent.com/makimenko/files/master/google-cloud-icons/Stackdriver.svg" [translateY]="40"
    [scaleX]="0.04" [scaleY]="0.04">
    </atft-svg-loader>

    <atft-svg-loader model="https://raw.githubusercontent.com/makimenko/files/master/google-cloud-icons/Stackdriver.svg" [translateY]="40"
    [scaleX]="0.04" [scaleY]="0.04">
    </atft-svg-loader>

    <atft-svg-loader model="https://raw.githubusercontent.com/makimenko/files/master/aws-icons/Device-Farm.svg" [translateY]="60"
    [scaleX]="0.25" [scaleY]="0.25">
    </atft-svg-loader>


</atft-empty>
  `)
})
class StorybookDifferentSVGLoaderComponent {

}

@Component({
  selector: 'app-storybook',
  template: axesSceneWrapper(`
    <atft-stl-loader
        model="https://raw.githubusercontent.com/makimenko/files/master/angular-template-for-threejs/model/Stl/Menger_sponge_sample.stl"
        materialColor="#AAFFAA"
    >
    </atft-stl-loader>
  `)
})
class StorybookStlLoaderComponent {
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

export const StlLoader = (args) => ({
  component: StorybookStlLoaderComponent,
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

