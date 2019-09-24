import {Directive} from '@angular/core';
import {AbstractCamera} from '../camera/abstract-camera';
import {RaycasterService} from './raycaster.service';

@Directive({selector: '[atft-raycaster-camera]'})
export class RaycasterCameraDirective {

  constructor(
    private host: AbstractCamera<any>,
    private raycasterService: RaycasterService
  ) {
    raycasterService.setCamera(host);
  }

}
