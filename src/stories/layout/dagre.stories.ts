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
    <atft-dagre-layout [align]="align" [rankdir]="rankdir">
      <atft-server-compact-actor #spa label="spa" translateY="30" [translateX]="0">
      </atft-server-compact-actor>

      <atft-server-compact-actor #api label="api" translateY="60" [translateX]="0">
      </atft-server-compact-actor>

      <atft-server-compact-actor #db label="db" translateY="90" [translateX]="0">
      </atft-server-compact-actor>

      <atft-dagre-edge [source]="spa" [target]="api" [animated]="true"></atft-dagre-edge>
      <atft-dagre-edge [source]="spa" [target]="db" [animated]="true"></atft-dagre-edge>

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
    rankdir: 'TB'
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
  }
};


export const Dagre = (args) => ({
  component: StorybookDagreComponent,
  props: args
});
