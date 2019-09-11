import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PerspectiveCameraComponent} from './perspective-camera.component';


@NgModule({
  declarations: [
    PerspectiveCameraComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PerspectiveCameraComponent
  ]
})
export class AtftCameraModule {
}
