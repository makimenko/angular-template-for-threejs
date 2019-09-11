import {NgModule} from '@angular/core';
import {WebGLRendererComponent} from './webgl-renderer.component';
import {CommonModule} from '@angular/common';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WebGLRendererComponent
  ],
  exports: [
    WebGLRendererComponent
  ]
})
export class AtftRendererModule {
}
