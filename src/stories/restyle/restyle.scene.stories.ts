import {Component} from '@angular/core';
import {moduleMetadata} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {darkWorldSceneWrapper} from '../scene-wrapper/dark-world-scene-wrapper';
import {AtftDataCenterActorModule} from '../../../projects/atft/src/lib/actor/data-center';



const modelPath = 'assets/model/Restyle';

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


     <atft-rounded-box-mesh materialColor="#000000" [width]="20" [height]="20" [depth]="10" translateZ="0" radius0="0.9"
     [roughness]="0.1" [metalness]="0.5"
     ></atft-rounded-box-mesh>
     <atft-rounded-box-mesh materialColor="#000000" [width]="20" [height]="20" [depth]="10" translateZ="0" translateY="150" radius0="0.9"></atft-rounded-box-mesh>

     <atft-box-mesh #a layer="1" [width]="0.2" [height]="0.2" [depth]="0.2" translateX="0" translateY="0" translateZ="2"></atft-box-mesh>
     <atft-box-mesh #b layer="1" [width]="0.2" [height]="0.2" [depth]="0.2" translateX="0" translateY="150" translateZ="2"></atft-box-mesh>
     <atft-line-connector materialColor="#00FFFF" layer="1" [source]="a" [target]="b" ></atft-line-connector>


     <!--<atft-box-mesh materialColor="#ff0000" [width]="20" [height]="20" [depth]="10" translateZ="30" translateX="10" ></atft-box-mesh>-->
     <!--<atft-axes-helper></atft-axes-helper>-->
  `)
})
class StorybookObjLoaderComponent {

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
  ]
};

export const Scene = (args) => ({
  component: StorybookObjLoaderComponent,
  props: args
});



