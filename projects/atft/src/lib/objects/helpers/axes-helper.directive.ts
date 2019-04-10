import { Directive, Input, AfterViewInit, forwardRef } from '@angular/core';
import * as THREE from 'three';
import { AbstractObject3D } from '../abstract-object-3d';

@Directive({
  selector: 'atft-axes-helper',
  providers: [{ provide: AbstractObject3D, useExisting: forwardRef(() => AxesHelperDirective) }]
})
export class AxesHelperDirective extends AbstractObject3D<THREE.AxesHelper> {

  @Input() size: number;

  constructor() {
    super();
    console.log('AxesHelperDirective.constructor');
  }

  protected newObject3DInstance(): THREE.AxesHelper {
    console.log('AxesHelperDirective.newObject3DInstance');
    return new THREE.AxesHelper(this.size);
  }

  protected afterInit(): void {
    console.log('AxesHelperDirective.afterInit');
    // none
  }

}
