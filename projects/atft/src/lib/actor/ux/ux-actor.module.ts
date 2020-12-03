import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AtftModule} from '../../atft.module';
import {TextActorComponent} from './text/text-actor.component';
import {LoaderActorComponent} from './loader';

@NgModule({
  imports: [
    CommonModule,
    AtftModule
  ],
  declarations: [
    TextActorComponent,
    LoaderActorComponent
  ],
  exports: [
    TextActorComponent,
    LoaderActorComponent
  ]
})
export class UxActorModule {
}
