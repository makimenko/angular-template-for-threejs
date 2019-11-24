import {moduleMetadata, storiesOf} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {withKnobs} from '@storybook/addon-knobs';
import {AtftDataCenterActorModule} from '../../../projects/atft/src/lib/actor/data-center/atft-data-center-actor.module';
import {StorybookRaycasterGroupComponent} from './group';


storiesOf('Raycaster', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [
        AtftModule,
        AtftDataCenterActorModule
      ]
    }),
  )
  .add('group', () => ({
    component: StorybookRaycasterGroupComponent
  }))
;
