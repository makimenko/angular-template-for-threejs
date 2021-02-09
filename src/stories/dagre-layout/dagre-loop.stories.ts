import {Component} from '@angular/core';
import {moduleMetadata} from '@storybook/angular';
import {AtftDataCenterActorModule} from '../../../projects/atft/src/lib/actor/data-center';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {worldSceneWrapper} from '../scene-wrapper/world-scene-wrapper';
import {AnimationService} from '../../../projects/atft/src/lib/animation';


@Component({
  template: worldSceneWrapper(`
    <atft-dagre-layout>
      <atft-dagre-node *ngFor="let x of fakeArray(numDatabases)" composition="data">
        <atft-server-barrel-actor label="db"></atft-server-barrel-actor>
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
    }
  }

}

// ======================================================================
export default {
  title: 'Dagre Layout/Loop',
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule,
        AtftDataCenterActorModule
      ]
    })
  ],
  args: {
    numDatabases: 1
  }

};


export const Loop = (args) => ({
  component: StorybookLoopComponent,
  props: args
});


