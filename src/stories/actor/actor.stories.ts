import {moduleMetadata, storiesOf} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {select, text, withKnobs} from '@storybook/addon-knobs';
import {AtftDataCenterActorModule} from '../../../projects/atft/src/lib/actor/data-center/atft-data-center-actor.module';
import {StorybookActorsComponent} from './actors';
import {StorybookServerComponent} from './server';


storiesOf('Actor', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [
        AtftModule,
        AtftDataCenterActorModule
      ],
      declarations: [
        StorybookServerComponent,
        StorybookActorsComponent
      ]
    }),
  )
  .add('actors', () => ({
    component: StorybookActorsComponent
  }))
  .add('server', () => ({
    component: StorybookServerComponent,
    props: {
      svgName: select('svgName', [
        'idea.svg',
        'upload.svg',
        'grid-world.svg'
      ], 'idea.svg'),
      label: text('label', 'Server RX10')
    }
  }))
;



