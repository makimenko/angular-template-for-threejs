import {AfterViewInit, Directive} from '@angular/core';
import {AbstractObject3D} from '../object/abstract-object-3d';
import {RaycasterService} from './raycaster.service';

/**
 * Only components marked as atft-raycaster-group emit raycaster events.
 * NOTE: All childs are also considered by raycaster (very usefull, for composite components).
 */
@Directive({selector: '[atft-raycaster-group]'})
export class RaycasterGroupDirective implements AfterViewInit {

  constructor(
    private host: AbstractObject3D<any>,
    private raycasterService: RaycasterService
  ) {

  }

  ngAfterViewInit(): void {
    this.raycasterService.addGroup(this.host);
  }

}
