import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PerspectiveCameraComponent} from './perspective-camera.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PerspectiveCameraComponent
  ],
  exports: [
    PerspectiveCameraComponent
  ]
})
export class AtftCameraModule {
}
