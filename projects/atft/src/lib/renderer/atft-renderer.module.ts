import {NgModule} from '@angular/core';
import {WebGLRendererComponent} from './webgl-renderer.component';
import {CommonModule} from '@angular/common';
import {RendererService} from './renderer.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WebGLRendererComponent
  ],
  providers: [
    RendererService
  ],
  exports: [
    WebGLRendererComponent
  ]
})
export class AtftRendererModule {
}
