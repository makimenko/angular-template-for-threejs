import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashedDrawDirective} from './dashed-draw.directive';
import {FogComponent} from './fog.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DashedDrawDirective,
    FogComponent
  ],
  exports: [
    DashedDrawDirective,
    FogComponent
  ]
})
export class AtftEffectModule {
}
