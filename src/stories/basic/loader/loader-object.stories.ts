import {Component, Input} from '@angular/core';
import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../../projects/atft/src/lib/atft.module';
import {axesSceneWrapper} from '../../scene-wrapper/axes-scene-wrapper';
import {worldSceneWrapper} from "../../scene-wrapper/world-scene-wrapper";


@Component({
  selector: 'app-storybook',
  template: axesSceneWrapper(`
      <atft-object-loader  model="assets/model/Server.json">
      </atft-object-loader>
  `)
})
class StorybookObjectLoaderComponent {

}


const meta: Meta<StorybookObjectLoaderComponent> = {
  title: 'Basic/Loader/Object (*.json)',
  component: StorybookObjectLoaderComponent,
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
type Story = StoryObj<StorybookObjectLoaderComponent>;

export const SampleJSON: Story = {
  args: {
  },
};
