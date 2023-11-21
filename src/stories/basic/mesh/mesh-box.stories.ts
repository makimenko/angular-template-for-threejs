import {Component, Input} from '@angular/core';
import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../../projects/atft/src/lib/atft.module';
import {axesSceneWrapper} from '../../scene-wrapper/axes-scene-wrapper';


@Component({
  selector: 'app-storybook',
  template: axesSceneWrapper(`
  <atft-box-mesh [height]="height" [width]="width" [depth]="depth" [materialColor]="materialColor"></atft-box-mesh>
  `)
})
class StorybookBoxMeshComponent {
  @Input() height = 10;
  @Input() width = 10;
  @Input() depth = 10;
  @Input() materialColor!:any;

}



const meta: Meta<StorybookBoxMeshComponent> = {
  title: 'Basic/Mesh/Box',
  component: StorybookBoxMeshComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule
      ]
    })
  ],
  argTypes: {
    height: {control: {type: 'range', min: 1, max: 50, step: 1}},
    width :  {control: {type: 'range', min: 1, max: 50, step: 1}},
    depth:  {control: {type: 'range', min: 1, max: 50, step: 1}},
    materialColor: {control: {type: 'color'}}
  }
};


export default meta;
type Story = StoryObj<StorybookBoxMeshComponent>;

export const Red: Story = {
  args: {
    materialColor: '#ff0000',
    height: 10,
    width: 10,
    depth: 10
  },
};

export const Depth: Story = {
  args: {
    materialColor: '#00ff00',
    height: 10,
    width: 10,
    depth: 20
  },
};
