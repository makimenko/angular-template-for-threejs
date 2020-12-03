import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PerspectiveCameraComponent} from './perspective-camera.component';
import {OrthographicCameraComponent} from './orthographic-camera.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PerspectiveCameraComponent,
    OrthographicCameraComponent
  ],
  exports: [
    PerspectiveCameraComponent,
    OrthographicCameraComponent
  ]
})
export class AtftCameraModule {
}
