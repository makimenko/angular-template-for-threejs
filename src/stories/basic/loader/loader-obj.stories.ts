import {Component} from '@angular/core';
import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../../projects/atft/src/lib/atft.module';
import {worldSceneWrapper} from "../../scene-wrapper/world-scene-wrapper";


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


const meta: Meta<StorybookObjLoaderComponent> = {
  title: 'Basic/Loader/Obj (*.obj)',
  component: StorybookObjLoaderComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule
      ]
    })
  ],
  argTypes: {
  }
};


export default meta;
type Story = StoryObj<StorybookObjLoaderComponent>;

export const SampleDatacenter: Story = {
  args: {
  },
};
