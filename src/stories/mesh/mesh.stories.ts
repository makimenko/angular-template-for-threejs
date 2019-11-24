import {moduleMetadata, storiesOf} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {select, text, withKnobs} from '@storybook/addon-knobs';
import {StorybookCylinderMeshComponent} from './cylinder';
import {StorybookTorusMeshComponent} from './torus';
import {StorybookBoxMeshComponent} from './box';
import {StorybookTextMeshComponent} from './text';
import {StorybookSphereMeshComponent} from './sphere';
import {StorybookFrameMeshComponent} from './frame';


storiesOf('Mesh', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [
        AtftModule
      ]
    }),
  )
  .add('box', () => ({
    component: StorybookBoxMeshComponent
  }))
  .add('cylinder', () => ({
    component: StorybookCylinderMeshComponent
  }))
  .add('sphere', () => ({
    component: StorybookSphereMeshComponent
  }))
  .add('torus', () => ({
    component: StorybookTorusMeshComponent
  }))
  .add('text', () => ({
    component: StorybookTextMeshComponent,
    props: {
      text: text('text', 'Hello :)'),
      materialColor: select('materialColor', ['0xff0000', '0x00ff00', '0x0000ff'], '0x0000ff')
    }
  }))
  .add('frame', () => ({
    component: StorybookFrameMeshComponent
  }))
;



