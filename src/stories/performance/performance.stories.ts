import {moduleMetadata, storiesOf} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {withKnobs} from '@storybook/addon-knobs';
import {StorybookConnectorPerformanceComponent} from './connector';
import {StorybookMeshPerformanceComponent} from './mesh';
import {StorybookPlanePerformanceComponent} from './plane';
import {StorybookGridPerformanceComponent} from './grid';


storiesOf('Performance', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [
        AtftModule
      ]
    }),
  )
  .add('connector', () => ({
    component: StorybookConnectorPerformanceComponent
  }))
  .add('mesh', () => ({
    component: StorybookMeshPerformanceComponent
  }))
  .add('plane', () => ({
    component: StorybookPlanePerformanceComponent
  }))
  .add('grid', () => ({
    component: StorybookGridPerformanceComponent
  }))

;



