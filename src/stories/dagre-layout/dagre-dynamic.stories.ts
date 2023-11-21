import {Component, Input} from '@angular/core';
import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
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
  - name: user
    model: user
  - name: workstation
    type: workstation
  - name: spa
    type: compact
    icon: connected_tv
  - name: api
    composition: backend
    icon: video_settings
  - name: db1
    label: PostgreSQL
    composition: data
    type: barrel
  - name: db2
    label: MongoDB
    composition: data
edges:
  - from: user
    to: workstation
  - from: workstation
    to: spa
  - from: spa
    to: api
    type: sequence
  - from: api
    to: db2
    type: association
  - from: api
    to: db1
    type: message
    color: 0xff0000
`;

@Component({
  selector: 'app-storybook',
  template: worldSceneWrapper(`
    <atft-dagre-layout>
      <atft-dagre-yaml-parser [yaml]="yaml" svgLocation="https://raw.githubusercontent.com/material-icons/material-icons/master/svg/">
      </atft-dagre-yaml-parser>
    </atft-dagre-layout>
`)
})
class StorybookLoopComponent {

  @Input() yaml!: string;

  constructor(private animationService: AnimationService) {
    this.animationService.start();
  }


}


const meta: Meta<StorybookLoopComponent> = {
  title: 'Dagre Layout/Dynamic YAML',
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

export const DynamicYAML: Story = {
  args: {
    yaml: yaml
  }
};




