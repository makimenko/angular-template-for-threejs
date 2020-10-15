import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashedDrawDirective} from './dashed-draw.directive';
import {FogComponent} from './fog.component';
import {DofComponent} from './dof.component';
import {DotScreenComponent} from './dot-screen.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DashedDrawDirective,
    FogComponent,
    DofComponent,
    DotScreenComponent
  ],
  exports: [
    DashedDrawDirective,
    FogComponent,
    DofComponent,
    DotScreenComponent
  ]
})
export class AtftEffectModule {
}
