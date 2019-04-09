import { Directive, Input, AfterViewInit, forwardRef } from '@angular/core';
import * as THREE from 'three';
import { AbstractObject3D } from '../abstract-object-3d';

@Directive({
  selector: 'atft-empty',
  providers: [{ provide: AbstractObject3D, useExisting: forwardRef(() => EmptyDirective) }]
})
export class EmptyDirective extends AbstractObject3D<THREE.Object3D> {

  @Input() size: number;

  constructor() {
    super();
    console.log('EmptyDirective.constructor');
  }

  protected newObject3DInstance(): THREE.Object3D {
    console.log('EmptyDirective.newObject3DInstance');
    return new THREE.AxesHelper(this.size);
  }

  protected afterInit(): void {
    console.log('EmptyDirective.afterInit');
    // none
  }

}
