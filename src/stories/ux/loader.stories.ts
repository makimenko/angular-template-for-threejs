import {Component} from '@angular/core';
import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {UxActorModule} from '../../../projects/atft/src/lib/actor/ux';
import {uxSceneWrapper} from '../scene-wrapper/ux-scene-wrapper';


@Component({
  selector: 'app-storybook',
  template: uxSceneWrapper(`
    <atft-loader-actor></atft-loader-actor>
  `)
})
class StorybookTextComponent {

}

const meta: Meta<StorybookTextComponent> = {
  title: 'UX/Loader',
  component: StorybookTextComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule,
        UxActorModule
      ]
    })
  ],
};


export default meta;
type Story = StoryObj<StorybookTextComponent>;

export const Loader: Story = {
};


