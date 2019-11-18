import {NgModule} from '@angular/core';
import {RendererCanvasComponent} from './renderer-canvas.component';
import {CommonModule} from '@angular/common';
import {RendererService} from './renderer.service';
import {StatsService} from './stats.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RendererCanvasComponent
  ],
  providers: [
    StatsService,
    RendererService
  ],
  exports: [
    RendererCanvasComponent
  ]
})
export class AtftRendererModule {
}
