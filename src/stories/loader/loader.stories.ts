import {moduleMetadata, storiesOf} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {select, withKnobs} from '@storybook/addon-knobs';
import {StorybookObjectLoaderComponent} from './object-loader';
import {StorybookObjLoaderComponent} from './obj-loader';
import {StorybookSVGLoaderComponent} from './svg-loader';


storiesOf('Loader', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [
        AtftModule
      ]
    }),
  )
  .add('object-loader', () => ({
    component: StorybookObjectLoaderComponent
  }))
  .add('obj-loader', () => ({
    component: StorybookObjLoaderComponent
  }))
  .add('svg-loader', () => ({
    component: StorybookSVGLoaderComponent,
    props: {
      model: select('model', [
          './assets/svg/idea.svg',
          './assets/svg/grid-world.svg',
          './assets/svg/upload.svg'
        ],
        './assets/svg/idea.svg'
      ),
      overrideMaterialColor: select('overrideMaterialColor', ['0xff0000', '0x00ff00', '0x0000ff'], '0x0000ff')
    }
  }))
;
