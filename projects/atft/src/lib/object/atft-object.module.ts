import {NgModule} from '@angular/core';
import {AtftConnectorModule} from './connector/atft-connector.module';
import {AtftHelperModule} from './helper/atft-helper.module';
import {AtftLightModule} from './light/atft-light.module';
import {AtftLoaderModule} from './loader/atft-loader.module';
import {AtftMeshModule} from './mesh/atft-mesh.module';
import {AtftTextModule} from './text/atft-text.module';
import {CommonModule} from '@angular/common';
import {SceneComponent} from './scene.component';
import {ContentProjectionComponent} from './content-projection.component';


@NgModule({
  imports: [
    CommonModule,
    AtftConnectorModule,
    AtftHelperModule,
    AtftLightModule,
    AtftLoaderModule,
    AtftMeshModule,
    AtftTextModule
  ],
  declarations: [
    SceneComponent,
    ContentProjectionComponent
  ],
  exports: [
    SceneComponent,
    AtftConnectorModule,
    AtftHelperModule,
    AtftLightModule,
    AtftLoaderModule,
    AtftMeshModule,
    AtftTextModule
  ]
})
export class AtftObjectModule {
}
