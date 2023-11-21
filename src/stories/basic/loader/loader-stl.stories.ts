import {Component, Input} from '@angular/core';
import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../../projects/atft/src/lib/atft.module';
import {axesSceneWrapper} from '../../scene-wrapper/axes-scene-wrapper';
import {worldSceneWrapper} from "../../scene-wrapper/world-scene-wrapper";


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

const meta: Meta<StorybookStlLoaderComponent> = {
  title: 'Basic/Loader/Stl (*.stl)',
  component: StorybookStlLoaderComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule
      ]
    })
  ],
  argTypes: {}
};


export default meta;
type Story = StoryObj<StorybookStlLoaderComponent>;

export const Sample: Story = {
  args: {},
};
