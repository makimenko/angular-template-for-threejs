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
      <atft-server-stand-actor #api label="api" ></atft-server-stand-actor>

      <atft-dagre-node *ngFor="let x of fakeArray(numDatabases)" [composition]="data">
        <atft-server-barrel-actor label="db"></atft-server-barrel-actor>
      </atft-dagre-node>

      <atft-dagre-composition #data></atft-dagre-composition>
    </atft-dagre-layout>
`)
})
class StorybookDagreComponent {

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


export default {
  title: 'Layout/Dagre Dynamic',
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


export const DynamicNodes = (args) => ({
  component: StorybookDagreComponent,
  props: args
});


