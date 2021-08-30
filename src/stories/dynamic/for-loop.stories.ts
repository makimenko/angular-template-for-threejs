import { Component } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import { AtftModule } from '../../../projects/atft/src/lib/atft.module';
import { axesSceneWrapper } from '../scene-wrapper/axes-scene-wrapper';

@Component({
  selector: 'app-storybook',
  template: axesSceneWrapper(`
      <atft-empty name="emptyObj">
        <div>
            <atft-sphere-mesh *ngFor="let x of fakeArray(numObjects)" [radius]="4" [translateY]="x" name="dynamicObj"
                widthSegments="64" hightSegments="64">
            </atft-sphere-mesh>
        </div>
      </atft-empty>
  `)
})
class StorybookDynamicComponent {

  numObjects: number;

  fakeArray(length: number): Array<any> {
    if (length >= 0) {
      const arr = new Array(length);
      for (let i = 0; i < arr.length; i++) {
        arr[i] = i * 10;
      }
      return arr;
    }
  }

}

export default {
  title: 'Dynamic/For Loop',
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule
      ]
    })
  ],
  args: {
    numObjects: 2
  },
  argTypes: {
    numObjects: { control: { type: 'range', min: 0, max: 5, step: 1 } }
  }
};

export const ForLoop = (args) => ({
  component: StorybookDynamicComponent,
  props: args
});
