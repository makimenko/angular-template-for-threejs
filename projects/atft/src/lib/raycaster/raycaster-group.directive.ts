import {Directive} from '@angular/core';
import {AbstractObject3D} from '../object/abstract-object-3d';
import {RaycasterService} from './raycaster.service';

@Directive({selector: '[atft-raycaster-group]'})
export class RaycasterGroupDirective {

  constructor(
    private host: AbstractObject3D<any>,
    private raycasterService: RaycasterService
  ) {
    console.log('add object group to raycaster:', host);
    raycasterService.addGroup(host);
  }

}
