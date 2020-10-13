import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashedDrawDirective} from './dashed-draw.directive';
import {FogComponent} from './fog.component';
import {DofComponent} from './dof.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DashedDrawDirective,
    FogComponent,
    DofComponent
  ],
  exports: [
    DashedDrawDirective,
    FogComponent,
    DofComponent
  ]
})
export class AtftEffectModule {
}
