import {AfterViewInit, Directive} from '@angular/core';
import {AbstractCamera} from '../camera/abstract-camera';
import {RaycasterService} from './raycaster.service';

@Directive({selector: '[atft-raycaster-camera]'})
export class RaycasterCameraDirective implements AfterViewInit {

  constructor(
    private host: AbstractCamera<any>,
    private raycasterService: RaycasterService
  ) {

  }

  ngAfterViewInit(): void {
    this.raycasterService.setCamera(this.host);
  }

}
