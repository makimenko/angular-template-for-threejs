import {NgModule} from '@angular/core';
import {RendererCanvasComponent} from './renderer-canvas.component';
import {CommonModule} from '@angular/common';
import {RendererService} from './renderer.service';
import {BloomService} from './bloom.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RendererCanvasComponent
  ],
  providers: [
    RendererService,
    BloomService
  ],
  exports: [
    RendererCanvasComponent
  ]
})
export class AtftRendererModule {
}
