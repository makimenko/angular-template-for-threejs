import {Directive} from '@angular/core';
import {RaycasterService} from './raycaster.service';

@Directive({selector: '[atft-raycaster-enable]'})
export class RaycasterEnableDirective {

  constructor(
    private raycasterService: RaycasterService
  ) {
    console.log('Enable raycaster');
    raycasterService.enable();
  }

}
