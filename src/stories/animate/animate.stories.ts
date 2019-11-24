import {moduleMetadata, storiesOf} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {withKnobs} from '@storybook/addon-knobs';
import {StorybookLoopComponent} from './loop';
import {StorybookMixerComponent} from './mixer';
import {StorybookReactiveGridComponent} from './reactive-grid';


storiesOf('Animate', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [
        AtftModule
      ]
    }),
  )
  .add('loop', () => ({
    component: StorybookLoopComponent
  }))
  .add('mixer', () => ({
    component: StorybookMixerComponent
  }))
  .add('reactive-grid', () => ({
    component: StorybookReactiveGridComponent
  }))
;



