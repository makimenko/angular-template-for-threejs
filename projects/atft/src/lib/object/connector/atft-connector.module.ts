import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MeshLineConnectorComponent} from './mesh-line-connector.component';
import {LineConnectorComponent} from './line-connector.component';


@NgModule({
  declarations: [
    LineConnectorComponent,
    MeshLineConnectorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LineConnectorComponent,
    MeshLineConnectorComponent
  ]
})
export class AtftConnectorModule {
}
