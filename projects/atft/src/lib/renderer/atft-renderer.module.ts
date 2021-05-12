import {NgModule} from '@angular/core';
import {RendererCanvasComponent} from './renderer-canvas.component';
import {CommonModule} from '@angular/common';
import {RendererService} from './renderer.service';
import {EnvMapService} from './env-map.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RendererCanvasComponent
  ],
  providers: [
    RendererService,
    EnvMapService
  ],
  exports: [
    RendererCanvasComponent
  ]
})
export class AtftRendererModule {
}
