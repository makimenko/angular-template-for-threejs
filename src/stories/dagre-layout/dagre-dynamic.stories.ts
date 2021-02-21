import {Component} from '@angular/core';
import {moduleMetadata} from '@storybook/angular';
import {AtftDataCenterActorModule} from '../../../projects/atft/src/lib/actor/data-center';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {worldSceneWrapper} from '../scene-wrapper/world-scene-wrapper';
import {AnimationService} from '../../../projects/atft/src/lib/animation';


const yaml = `compositions:
  - name: data
    label: Data Layer
    composition: backend
  - name: backend
    label: Backend
    border: frame
nodes:
  - name: spa
    type: compact
    icon: web_asset/outline.svg
  - name: api
    composition: backend
    icon: video_settings/baseline.svg
  - name: db1
    label: PostgreSQL
    composition: data
    type: barrel
  - name: db2
    label: MongoDB
    composition: data
edges:
  - from: spa
    to: api
  - from: api
    to: db2
  - from: api
    to: db1
`;

@Component({
  template: worldSceneWrapper(`
    <atft-dagre-layout>
      <atft-dagre-yaml-parser [yaml]="yaml" svgLocation="https://raw.githubusercontent.com/material-icons/material-icons/master/svg/">
      </atft-dagre-yaml-parser>
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


