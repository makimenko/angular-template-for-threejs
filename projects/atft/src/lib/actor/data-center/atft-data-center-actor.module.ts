import {NgModule} from '@angular/core';
import {LayerActorComponent} from './layer/layer-actor.component';
import {CommonModule} from '@angular/common';
import {AtftModule} from '../../atft.module';
import {ServerBarrelActorComponent} from './server/server-barrel-actor.component';
import {ServerStandActorComponent} from './server/server-stand-actor.component';
import {ServerCompactActorComponent} from './server/server-compact-actor.component';
import {ServerIconActorComponent} from './server/server-icon-actor.component';
import {WorkstationActorComponent} from './server/workstation-actor.component';
import {GridActorComponent} from './layer/grid-actor.component';
import {DagreCompositionComponent, DagreEdgeComponent, DagreLayoutComponent, DagreNodeComponent} from './layout';

@NgModule({
  imports: [
    CommonModule,
    AtftModule
  ],
  declarations: [
    LayerActorComponent,
    ServerBarrelActorComponent,
    ServerStandActorComponent,
    ServerCompactActorComponent,
    ServerIconActorComponent,
    WorkstationActorComponent,
    GridActorComponent,
    DagreLayoutComponent,
    DagreEdgeComponent,
    DagreCompositionComponent,
    DagreNodeComponent
  ],
  exports: [
    LayerActorComponent,
    ServerBarrelActorComponent,
    ServerStandActorComponent,
    ServerCompactActorComponent,
    ServerIconActorComponent,
    WorkstationActorComponent,
    GridActorComponent,
    DagreLayoutComponent,
    DagreEdgeComponent,
    DagreCompositionComponent,
    DagreNodeComponent
  ]
})
export class AtftDataCenterActorModule {
}
