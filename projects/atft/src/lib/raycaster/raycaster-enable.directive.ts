import {AfterViewInit, Directive} from '@angular/core';
import {RaycasterService} from './raycaster.service';

@Directive({selector: '[atft-raycaster-enable]'})
export class RaycasterEnableDirective implements AfterViewInit {

  constructor(
    private raycasterService: RaycasterService
  ) {

  }

  ngAfterViewInit(): void {
    this.raycasterService.enable();
  }

}
