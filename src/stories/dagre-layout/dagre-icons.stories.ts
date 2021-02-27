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

      <atft-dagre-node name="a">
        <atft-server-compact-actor icon="alarm_on"></atft-server-compact-actor>
      </atft-dagre-node>

      <atft-dagre-node name="b">
        <atft-server-compact-actor icon="md:alarm_on"></atft-server-compact-actor>
      </atft-dagre-node>

      <atft-dagre-node name="c">
        <atft-server-compact-actor icon="a:idea"></atft-server-compact-actor>
      </atft-dagre-node>

      <atft-dagre-node name="d1">
        <atft-server-compact-actor icon="az:App-Services"></atft-server-compact-actor>
      </atft-dagre-node>

      <atft-dagre-node name="d2">
        <atft-server-icon-actor icon="az:App-Services"></atft-server-icon-actor>
      </atft-dagre-node>

      <atft-dagre-node name="e1">
        <atft-server-icon-actor icon="az:Key-Vaults"></atft-server-icon-actor>
      </atft-dagre-node>

      <atft-dagre-node name="f1">
        <atft-server-icon-actor icon="az:SQL-Server"></atft-server-icon-actor>
      </atft-dagre-node>

      <atft-dagre-edge from="d2" to="f1"></atft-dagre-edge>

    </atft-dagre-layout>
`)
})
class StorybookIconsComponent {

  constructor(private animationService: AnimationService) {
    this.animationService.start();
  }

}

export default {
  title: 'Dagre Layout/Icons',
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule,
        AtftDataCenterActorModule
      ]
    })
  ]
};


export const Icons = (args) => ({
  component: StorybookIconsComponent,
  props: args
});

