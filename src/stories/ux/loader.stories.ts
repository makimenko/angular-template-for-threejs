import {Component} from '@angular/core';
import {moduleMetadata} from '@storybook/angular';
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


export default {
  title: 'UX / Loader',
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule,
        UxActorModule
      ]
    })
  ],
  args: {},
  argTypes: {}
};


export const Loader1 = (args) => ({
  component: StorybookTextComponent,
  props: args
});
