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

      <atft-dagre-node name="md1">
        <atft-server-icon-actor icon="md:alarm_on" label="Material Design"></atft-server-icon-actor>
      </atft-dagre-node>
      <atft-dagre-node name="md2">
        <atft-server-icon-actor icon="md:anchor" label="Material Design"></atft-server-icon-actor>
      </atft-dagre-node>
      <atft-dagre-node name="md3">
        <atft-server-icon-actor icon="md:camera" label="Material Design"></atft-server-icon-actor>
      </atft-dagre-node>
      <atft-dagre-edge from="md1" to="md2"></atft-dagre-edge>
      <atft-dagre-edge from="md2" to="md3"></atft-dagre-edge>

      <atft-dagre-node name="a1">
        <atft-server-icon-actor icon="a:idea" label="Site Assets"></atft-server-icon-actor>
      </atft-dagre-node>
      <atft-dagre-node name="a2">
        <atft-server-icon-actor icon="a:upload" label="Site Assets"></atft-server-icon-actor>
      </atft-dagre-node>
      <atft-dagre-node name="a3">
        <atft-server-icon-actor icon="a:users-solid" label="Site Assets"></atft-server-icon-actor>
      </atft-dagre-node>
      <atft-dagre-edge from="a1" to="a2"></atft-dagre-edge>
      <atft-dagre-edge from="a2" to="a3"></atft-dagre-edge>


      <atft-dagre-node name="az1">
        <atft-server-icon-actor icon="az:Key-Vaults" label="Azure Cloud Icons"></atft-server-icon-actor>
      </atft-dagre-node>
      <atft-dagre-node name="az2">
        <atft-server-icon-actor icon="az:App-Services" label="Azure Cloud Icons"></atft-server-icon-actor>
      </atft-dagre-node>
      <atft-dagre-node name="az3">
        <atft-server-icon-actor icon="az:Service-Bus" label="Azure Cloud Icons"></atft-server-icon-actor>
      </atft-dagre-node>
      <atft-dagre-edge from="az1" to="az2"></atft-dagre-edge>
      <atft-dagre-edge from="az2" to="az3"></atft-dagre-edge>


      <atft-dagre-node name="g1">
        <atft-server-icon-actor icon="g:AppEngine" label="Google Cloud Icons"></atft-server-icon-actor>
      </atft-dagre-node>
      <atft-dagre-node name="g2">
        <atft-server-icon-actor icon="g:cloud-load-balancing" label="Google Cloud Icons"></atft-server-icon-actor>
      </atft-dagre-node>
      <atft-dagre-node name="g3">
        <atft-server-icon-actor icon="g:persistent-disk" label="Google Cloud Icons"></atft-server-icon-actor>
      </atft-dagre-node>
      <atft-dagre-edge from="g1" to="g2"></atft-dagre-edge>
      <atft-dagre-edge from="g2" to="g3"></atft-dagre-edge>

      <atft-dagre-node name="aws1">
        <atft-server-icon-actor icon="aws:DynamoDB" label="AWS Icons"></atft-server-icon-actor>
      </atft-dagre-node>
      <atft-dagre-node name="aws2">
        <atft-server-icon-actor icon="aws:Direct-Connect-Gateway" label="AWS Icons"></atft-server-icon-actor>
      </atft-dagre-node>
      <atft-dagre-node name="aws3">
        <atft-server-icon-actor icon="aws:EC2_C5n-Instance" label="AWS Icons"></atft-server-icon-actor>
      </atft-dagre-node>
      <atft-dagre-edge from="aws1" to="aws2"></atft-dagre-edge>
      <atft-dagre-edge from="aws2" to="aws3"></atft-dagre-edge>

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

