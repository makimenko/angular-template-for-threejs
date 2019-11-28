import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashedDrawDirective} from './dashed-draw.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DashedDrawDirective

  ],
  exports: [
    DashedDrawDirective
  ]
})
export class AtftEffectModule {
}
