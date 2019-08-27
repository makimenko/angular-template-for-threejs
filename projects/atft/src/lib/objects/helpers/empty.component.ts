import {Component, forwardRef, Input} from '@angular/core';
import * as THREE from 'three';
import {AbstractObject3D} from '../abstract-object-3d';

@Component({
  selector: 'atft-empty',
  providers: [{ provide: AbstractObject3D, useExisting: forwardRef(() => EmptyComponent) }],
  template: '<ng-content></ng-content>'
})
export class EmptyComponent extends AbstractObject3D<THREE.Object3D> {

  constructor() {
    super();
    console.log('EmptyComponent.constructor');
  }

  protected newObject3DInstance(): THREE.Object3D {
    console.log('EmptyComponent.newObject3DInstance');
    return new THREE.Object3D();
  }

  protected afterInit(): void {
    console.log('EmptyComponent.afterInit');
    // none
  }

}
