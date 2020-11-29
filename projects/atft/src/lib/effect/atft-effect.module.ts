import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashedDrawDirective} from './dashed-draw.directive';
import {FogComponent} from './fog.component';
import {DofComponent} from './dof.component';
import {DotScreenComponent} from './dot-screen.component';
import {EffectComposerComponent} from './effect-composer.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DashedDrawDirective,
    FogComponent,
    DofComponent,
    DotScreenComponent,
    EffectComposerComponent
  ],
  exports: [
    DashedDrawDirective,
    FogComponent,
    DofComponent,
    DotScreenComponent,
    EffectComposerComponent
  ]
})
export class AtftEffectModule {
}
