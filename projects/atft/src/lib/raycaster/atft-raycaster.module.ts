import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RaycasterGroupDirective} from './raycaster-group.directive';
import {RaycasterService} from './raycaster.service';
import {RaycasterCameraDirective} from './raycaster-camera.directive';
import {RaycasterEnableDirective} from './raycaster-enable.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RaycasterGroupDirective,
    RaycasterCameraDirective,
    RaycasterEnableDirective
  ],
  providers: [
    RaycasterService
  ],
  exports: [
    RaycasterGroupDirective,
    RaycasterCameraDirective,
    RaycasterEnableDirective
  ]
})
export class AtftRaycasterModule {
}
