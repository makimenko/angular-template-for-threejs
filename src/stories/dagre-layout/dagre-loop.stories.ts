import {Component} from '@angular/core';
import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {AtftDataCenterActorModule} from '../../../projects/atft/src/lib/actor/data-center';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {worldSceneWrapper} from '../scene-wrapper/world-scene-wrapper';
import {AnimationService} from '../../../projects/atft/src/lib/animation';


@Component({
  selector: 'app-storybook',
  template: worldSceneWrapper(`
    <atft-dagre-layout>
      <atft-dagre-node *ngFor="let x of fakeArray(numDatabases)" composition="data">
        <atft-model-actor model="fingerprint" label="db"></atft-model-actor>
      </atft-dagre-node>

      <atft-dagre-composition name="data" label="Data"></atft-dagre-composition>
    </atft-dagre-layout>
`)
})
class StorybookLoopComponent {

  constructor(private animationService: AnimationService) {
    this.animationService.start();
  }

  numDatabases = 1;

  fakeArray(length: number): Array<any> {
    if (length >= 0) {
      return new Array(length);
    } else {
      return []
    }
  }

}


const meta: Meta<StorybookLoopComponent> = {
  title: 'Dagre Layout/Loop',
  component: StorybookLoopComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule,
        AtftDataCenterActorModule
      ]
    })
  ]
};


export default meta;
type Story = StoryObj<StorybookLoopComponent>;

export const Loop: Story = {
  args: {
    numDatabases: 0
  }
};


