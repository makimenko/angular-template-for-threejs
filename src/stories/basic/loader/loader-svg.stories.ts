import {Component, Input} from '@angular/core';
import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../../projects/atft/src/lib/atft.module';
import {axesSceneWrapper} from '../../scene-wrapper/axes-scene-wrapper';
import {worldSceneWrapper} from "../../scene-wrapper/world-scene-wrapper";


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
class StorybookSVGLoaderComponent {

}

const meta: Meta<StorybookSVGLoaderComponent> = {
  title: 'Basic/Loader/SVG (*.svg)',
  component: StorybookSVGLoaderComponent,
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
type Story = StoryObj<StorybookSVGLoaderComponent>;

export const Sample: Story = {
  args: {
  },
};
