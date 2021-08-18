import {Component} from '@angular/core';
import {moduleMetadata} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {darkWorldSceneWrapper} from '../scene-wrapper/dark-world-scene-wrapper';
import {AtftDataCenterActorModule} from '../../../projects/atft/src/lib/actor/data-center';


const modelPath = 'assets/model/Restyle';


const sampleYaml = `compositions:
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
  template: darkWorldSceneWrapper(`
<!--
      <atft-obj-loader
              model="${modelPath}/Restyle-Scene.obj"
              material="${modelPath}/Restyle-Scene.mtl"
              resourcePath="${modelPath}"
              [translateZ]="1">
          >
      </atft-obj-loader>
-->

<!--
     <atft-rounded-box-mesh materialColor="#000000" [width]="20" [height]="20" [depth]="10" translateZ="0" radius0="0.9"
        material="standard" [roughness]="0.1" [metalness]="0.5"
     ></atft-rounded-box-mesh>
     <atft-rounded-box-mesh materialColor="#000000" [width]="20" [height]="20" [depth]="10" translateZ="0" translateY="150" radius0="0.9"
     material="standard" [metalness]="1" [roughness]="0" [envMapIntensity]="1"
     ></atft-rounded-box-mesh>

     <atft-box-mesh #a layer="1" [width]="0.2" [height]="0.2" [depth]="0.2" translateX="0" translateY="0" translateZ="2"></atft-box-mesh>
     <atft-box-mesh #b layer="1" [width]="0.2" [height]="0.2" [depth]="0.2" translateX="0" translateY="150" translateZ="2"></atft-box-mesh>
     <atft-line-connector materialColor="#00FFFF" layer="1" [source]="a" [target]="b" [lineWidth]="2" [opacity]="1"></atft-line-connector>
-->

    <atft-theme [raised]="raised">
        <atft-dagre-layout [translateZ]="1">
            <atft-dagre-yaml-parser [yaml]="yaml">
            </atft-dagre-yaml-parser>
        </atft-dagre-layout>
    </atft-theme>

  `)
})
class StorybookRestyleComponent {

  yaml = sampleYaml;

  raised = false;

  constructor() {
  }


}

export default {
  title: 'Restyle',
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule,
        AtftDataCenterActorModule
      ]
    })
  ],
  args: {
    raised: false
  }
};

export const Scene = (args) => ({
  component: StorybookRestyleComponent,
  props: args
});



