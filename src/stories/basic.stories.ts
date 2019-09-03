import {moduleMetadata, storiesOf} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../projects/atft/src/lib/atft.module';
import {number, withKnobs} from '@storybook/addon-knobs';
import {Component} from '@angular/core';
import {defaultSceneWrapper} from './common/default-scene-wrapper';



@Component({
  selector: 'app-storybook-basic-sample',
  template: defaultSceneWrapper('')
})
class StorybookBasicComponent {

}

storiesOf('Basic', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [
        AtftModule
      ],
      declarations: [
        StorybookBasicComponent
      ]
    }),
  )
  .add('Empty scene', () => ({
    component: StorybookBasicComponent
  }))
;
