import {Component} from '@angular/core';
import {moduleMetadata} from '@storybook/angular';
import {AtftDataCenterActorModule} from '../../../projects/atft/src/lib/actor/data-center';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {worldSceneWrapper} from '../scene-wrapper/world-scene-wrapper';
import {AnimationService} from '../../../projects/atft/src/lib/animation';


@Component({
  template: worldSceneWrapper(`
<atft-empty [translateZ]="0.5" [translateY]="-40">
    <atft-dagre-layout [align]="align" [rankdir]="rankdir" [ranker]="ranker"
      [nodesep]="nodesep" [edgesep]="edgesep" [ranksep]="ranksep"
      [marginx]="marginx" [marginy]="marginy">

      <atft-server-compact-actor #spa label="spa" ></atft-server-compact-actor>
      <atft-server-stand-actor #api label="api" ></atft-server-stand-actor>
      <atft-server-compact-actor #v label="Vault"></atft-server-compact-actor>
      <atft-server-barrel-actor #db1 label="PostgreSQL"></atft-server-barrel-actor>
      <atft-server-barrel-actor #db2 label="MongoDB"></atft-server-barrel-actor>

      <atft-dagre-edge [source]="spa" [target]="api"></atft-dagre-edge>
      <atft-dagre-edge [source]="api" [target]="db1"></atft-dagre-edge>
      <atft-dagre-edge [source]="api" [target]="db2"></atft-dagre-edge>
      <atft-dagre-edge [source]="api" [target]="v"></atft-dagre-edge>

    </atft-dagre-layout>
</atft-empty>
`)
})
class StorybookDagreComponent {


  constructor(private animationService: AnimationService) {
    this.animationService.start();
  }

}

export default {
  title: 'Layout/Dagre',
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule,
        AtftDataCenterActorModule
      ]
    })
  ],
  args: {
    align: 'DR',
    rankdir: 'TB',
    nodesep: 20,
    edgesep: 1,
    ranksep: 20,
    marginx: 0,
    marginy: 0,
    ranker: 'network-simplex'
  },
  argTypes: {
    align: {
      description: 'Alignment for rank nodes. Can be UL, UR, DL, or DR, where U = up, D = down, L = left, and R = right.',
      control: {
        type: 'select', options: [
          'UL',
          'UR',
          'DL',
          'DR'
        ]
      }
    },
    rankdir: {
      description: 'Direction for rank nodes. Can be TB, BT, LR, or RL, where T = top, B = bottom, L = left, and R = right.',
      control: {
        type: 'select', options: [
          'TB',
          'BT',
          'LR',
          'RL'
        ]
      }
    },
    ranker: {
      description: 'Type of algorithm to assigns a rank to each node in the input graph. Possible values: network-simplex, tight-tree or longest-path',
      control: {
        type: 'select', options: [
          'network-simplex',
          'tight-tree',
          'longest-path'
        ]
      }
    },
  }
};


export const Dagre = (args) => ({
  component: StorybookDagreComponent,
  props: args
});
