import {Component} from '@angular/core';
import {moduleMetadata} from '@storybook/angular';
import {AtftDataCenterActorModule} from '../../../projects/atft/src/lib/actor/data-center';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {worldSceneWrapper} from '../scene-wrapper/world-scene-wrapper';
import {AnimationService} from '../../../projects/atft/src/lib/animation';


@Component({
  template: worldSceneWrapper(`
    <atft-dagre-layout [align]="align" [rankdir]="rankdir" [ranker]="ranker"
      [nodesep]="nodesep" [edgesep]="edgesep" [ranksep]="ranksep"
      [marginx]="marginx" [marginy]="marginy">

      <atft-dagre-node name="spa" >
        <atft-server-compact-actor label="SPA"></atft-server-compact-actor>
      </atft-dagre-node>
      <atft-dagre-node name="api" >
        <atft-server-stand-actor label="API"></atft-server-stand-actor>
      </atft-dagre-node>
      <atft-dagre-node name="kv">
        <atft-server-compact-actor label="Key Vault"></atft-server-compact-actor>
      </atft-dagre-node>
      <atft-dagre-node name="db1">
        <atft-server-barrel-actor  label="PostgreSQL"></atft-server-barrel-actor>
      </atft-dagre-node>
      <atft-dagre-node name="db2">
        <atft-server-barrel-actor  label="MongoDB"></atft-server-barrel-actor>
      </atft-dagre-node>

      <atft-dagre-edge from="spa" to="api"></atft-dagre-edge>
      <atft-dagre-edge from="api" to="db1"></atft-dagre-edge>
      <atft-dagre-edge from="api" to="db2"></atft-dagre-edge>
      <atft-dagre-edge from="api" to="kv"></atft-dagre-edge>

    </atft-dagre-layout>
`)
})
class StorybookDagreComponent {

  constructor(private animationService: AnimationService) {
    this.animationService.start();
  }

}

@Component({
  template: worldSceneWrapper(`
    <atft-dagre-layout [align]="align" [rankdir]="rankdir" [ranker]="ranker"
      [nodesep]="nodesep" [edgesep]="edgesep" [ranksep]="ranksep"
      [marginx]="marginx" [marginy]="marginy">

      <atft-dagre-composition name="presentation" label="Presentation tier"></atft-dagre-composition>
      <atft-dagre-composition name="application" label="Application tier"></atft-dagre-composition>
      <atft-dagre-composition name="data" label="Data tier" border="frame"></atft-dagre-composition>

      <atft-dagre-node name="spa" composition="presentation">
        <atft-server-compact-actor label="spa"></atft-server-compact-actor>
      </atft-dagre-node>

      <atft-dagre-node name="api" composition="application">
        <atft-server-stand-actor label="api" svgName="video_settings"
        ></atft-server-stand-actor>
      </atft-dagre-node>

      <atft-dagre-node name="db1" composition="data">
        <atft-server-barrel-actor label="PostgreSQL"></atft-server-barrel-actor>
      </atft-dagre-node>

      <atft-dagre-node name="db2" composition="data">
        <atft-server-barrel-actor label="MongoDB"></atft-server-barrel-actor>
      </atft-dagre-node>

      <atft-dagre-edge from="spa" to="api"></atft-dagre-edge>
      <atft-dagre-edge from="api" to="db1"></atft-dagre-edge>
      <atft-dagre-edge from="api" to="db2"></atft-dagre-edge>

    </atft-dagre-layout>

`)
})
class StorybookDagreCompositionComponent {

  constructor(private animationService: AnimationService) {
    this.animationService.start();
  }

}


export default {
  title: 'Dagre Layout/Sample',
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


export const Simple = (args) => ({
  component: StorybookDagreComponent,
  props: args
});


export const Composition = (args) => ({
  component: StorybookDagreCompositionComponent,
  props: args
});

