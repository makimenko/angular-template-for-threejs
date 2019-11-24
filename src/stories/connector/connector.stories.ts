import {moduleMetadata, storiesOf} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {number, withKnobs} from '@storybook/addon-knobs';
import {StorybookMeshLineComponent} from './mesh-line';
import {StorybookLineComponent} from './line';
import {StorybookMeshLineAnimationComponent} from './mesh-line-animation';


storiesOf('Connector', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [
        AtftModule
      ]
    }),
  )
  .add('mesh-line', () => ({
    component: StorybookMeshLineComponent,
    props: {
      translateZ: number('translateZ', -10, {range: true, min: -10, max: 100, step: 1})
    }
  }))
  .add('line', () => ({
    component: StorybookLineComponent,
    props: {
      translateZ: number('translateZ', -10, {range: true, min: -10, max: 100, step: 1})
    }
  }))
  .add('mesh-line-animation', () => ({
    component: StorybookMeshLineAnimationComponent,
    props: {
      translateZ: number('translateZ', -10, {range: true, min: -10, max: 100, step: 1})
    }
  }))
;



