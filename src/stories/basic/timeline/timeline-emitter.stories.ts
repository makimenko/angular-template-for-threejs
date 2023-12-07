import {Component, Input} from '@angular/core';
import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../../projects/atft/src/lib/atft.module';
import {axesSceneWrapper} from "../../scene-wrapper/axes-scene-wrapper";


@Component({
  selector: 'app-storybook',
  template: axesSceneWrapper(`
      <atft-timeline-emitter>
        <atft-emit-step ms="1000" (action)="visibleOne=true"/>
        <atft-emit-step ms="3000" (action)="visibleTwo=true"/>
      </atft-timeline-emitter>
      <atft-box-mesh [width]="50" [height]="50" [depth]="1"  [materialColor]="'#fafafa'"></atft-box-mesh>
      <atft-box-mesh *ngIf="visibleOne" [width]="10" [height]="10" [depth]="10" [translateY]="10" [translateZ]="5" [materialColor]="'#00ff00'"></atft-box-mesh>
      <atft-box-mesh *ngIf="visibleTwo" [width]="10" [height]="10" [depth]="10" [translateY]="-10" [translateZ]="5" [materialColor]="'#ff0000'"></atft-box-mesh>
  `)
})
class TimelineEmitterStoryComponent {
  @Input() visibleOne = false;
  @Input() visibleTwo = false;
}


const meta: Meta<TimelineEmitterStoryComponent> = {
  title: 'Basic/Timeline/Emitter',
  component: TimelineEmitterStoryComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule
      ]
    })
  ],
  argTypes: {}
};


export default meta;
type Story = StoryObj<TimelineEmitterStoryComponent>;

export const Emitter: Story = {
  args: {},
};

