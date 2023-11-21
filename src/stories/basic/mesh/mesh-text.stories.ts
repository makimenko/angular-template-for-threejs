import {Component, Input} from '@angular/core';
import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../../projects/atft/src/lib/atft.module';
import {axesSceneWrapper} from '../../scene-wrapper/axes-scene-wrapper';


@Component({
  selector: 'app-storybook',
  template: axesSceneWrapper(`
  <atft-text-mesh [text]="text" [rotateZ]="(90 | deg2rad)" [materialColor]="materialColor"
      [bevelEnabled]="true" curveSegments="20" [centered]="true">
  </atft-text-mesh>`)
})
class StorybookTextMeshComponent {
  @Input() text!: string;
  @Input() materialColor!: any;
}



const meta: Meta<StorybookTextMeshComponent> = {
  title: 'Basic/Mesh/Text',
  component: StorybookTextMeshComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule
      ]
    })
  ],
  argTypes: {
    materialColor: {control: {type: 'color'}}
  }
};


export default meta;
type Story = StoryObj<StorybookTextMeshComponent>;

export const Hello: Story = {
  args: {
    materialColor: '#ff0000',
    text: 'Hello World! :)'
  },
};
