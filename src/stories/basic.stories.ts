import {moduleMetadata, storiesOf} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../projects/atft/src/lib/atft.module';
import {StorybookContainerComponent} from './common/storybook-container.component';
import {StorybookEmptyComponent} from './common/storybook-empty.component';
import {number, withKnobs} from '@storybook/addon-knobs';


storiesOf('Basic', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [
        AtftModule
      ],
      declarations: [
        StorybookContainerComponent,
        StorybookEmptyComponent
      ]
    }),
  )
  .add('Empty scene', () => ({
    component: StorybookContainerComponent,
    props: {
      gridTranslateX: number('gridTranslateX', 0, {range: true, min: -200, max: 200, step: 1})
    }
  }))
;
