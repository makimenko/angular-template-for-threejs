import {NgModule} from '@angular/core';
import {LayerActorComponent} from './layer/layer-actor.component';
import {ServerActorComponent} from './server/server-actor.component';
import {CommonModule} from '@angular/common';
import {AtftModule} from '../../atft.module';

@NgModule({
  imports: [
    CommonModule,
    AtftModule
  ],
  declarations: [
    LayerActorComponent,
    ServerActorComponent
  ],
  exports: [
    LayerActorComponent,
    ServerActorComponent
  ]
})
export class AtftDataCenterActorModule {
}
