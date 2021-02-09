import {Component} from '@angular/core';
import {moduleMetadata} from '@storybook/angular';
import {AtftDataCenterActorModule, DagreNodeComponent, ServerStandActorComponent} from '../../../projects/atft/src/lib/actor/data-center';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {worldSceneWrapper} from '../scene-wrapper/world-scene-wrapper';
import {AnimationService} from '../../../projects/atft/src/lib/animation';

const yaml = `
nodes:
  - name: db1
    label: PostgreSQL
  - name: db2
    label: MongoDB
`;

@Component({
  template: worldSceneWrapper(`
    <atft-dagre-layout>
      <atft-dagre-yaml-parser [yaml]="yaml"></atft-dagre-yaml-parser>
    </atft-dagre-layout>
`)
})
class StorybookLoopComponent {

  constructor(private animationService: AnimationService) {
    this.animationService.start();
  }


}

// ======================================================================
export default {
  title: 'Dagre Layout/Dynamic',
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule,
        AtftDataCenterActorModule
      ],
      entryComponents: [
        ServerStandActorComponent,
        DagreNodeComponent
      ]
    })
  ],
  args: {
    yaml: yaml
  }

};


export const Dynamic = (args) => ({
  component: StorybookLoopComponent,
  props: args
});


