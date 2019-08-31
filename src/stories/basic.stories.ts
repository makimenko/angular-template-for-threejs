import {moduleMetadata, storiesOf} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../projects/atft/src/lib/atft.module';
import {StorybookContainerComponent} from './common/storybook-container.component';
import {StorybookEmptyComponent} from './common/storybook-empty.component';


storiesOf('Basic', module)
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
    component: StorybookContainerComponent
  }))
;
