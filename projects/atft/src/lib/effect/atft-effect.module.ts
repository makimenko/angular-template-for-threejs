import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashedDrawDirective} from './dashed-draw.directive';
import {FogComponent} from './fog.component';
import {DofComponent} from './compose/dof.component';
import {DotScreenComponent} from './compose/dot-screen.component';
import {EffectComposerComponent} from './compose/effect-composer.component';
import {BlurComponent} from './compose/blur.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DashedDrawDirective,
    FogComponent,
    DofComponent,
    DotScreenComponent,
    EffectComposerComponent,
    BlurComponent
  ],
  exports: [
    DashedDrawDirective,
    FogComponent,
    DofComponent,
    DotScreenComponent,
    EffectComposerComponent,
    BlurComponent
  ]
})
export class AtftEffectModule {
}
