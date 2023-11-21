import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {Component} from "@angular/core";
import {AtftModule} from '../../../../projects/atft/src/lib/atft.module';
import {worldSceneWrapper} from "../../scene-wrapper/world-scene-wrapper";

@Component({
  selector: 'app-storybook',
  template: worldSceneWrapper(`
    <atft-empty atft-raycaster-group name="root-empty" (mouseEnter)="mouseEnter()" (mouseExit)="mouseExit()" (click)="click()">
      <atft-box-mesh name="parent-box" [height]="10" [width]="10" [depth]="10" [materialColor]="color" [translateZ]="10">
        <atft-box-mesh name="child-box1" [height]="5" [width]="5" [depth]="5" [translateX]="12" [materialColor]="color">
                  <atft-box-mesh name="child-box1" [height]="3" [width]="3" [depth]="3" [translateX]="12" [materialColor]="color">
                  </atft-box-mesh>
        </atft-box-mesh>
      </atft-box-mesh>
    </atft-empty>
`)
})
class StorybookRaycasterGroupComponent {

  color: string | number = '#00ff00';

  mouseEnter() {
    console.log('mouseEnter');
    this.color = '#0000ff';
  }

  mouseExit() {
    console.log('mouseExit');
    this.color = '#00ff00';
  }

  click() {
    console.log('click');
    this.color = '#FF0000';
  }

}

const meta: Meta<StorybookRaycasterGroupComponent> = {
  title: 'Basic/Object/Raycaster',
  component: StorybookRaycasterGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule
      ]
    })
  ],

};


export default meta;
type Story = StoryObj<StorybookRaycasterGroupComponent>;

export const MouseEvents: Story = {
};
