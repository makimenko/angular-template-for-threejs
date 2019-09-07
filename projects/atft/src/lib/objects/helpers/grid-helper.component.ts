import {Component, forwardRef, Input} from '@angular/core';
import * as THREE from 'three';
import {AbstractObject3D} from '../abstract-object-3d';

@Component({
  selector: 'atft-grid-helper',
  providers: [{ provide: AbstractObject3D, useExisting: forwardRef(() => GridHelperComponent) }],
  template: '<ng-content></ng-content>'
})
export class GridHelperComponent extends AbstractObject3D<THREE.AxesHelper> {

  @Input() size: number;
  @Input() divisions: number;

  constructor() {
    super();
    // console.log('GridHelperComponent.constructor');
  }

  protected newObject3DInstance(): THREE.AxesHelper {
    // console.log('GridHelperComponent.newObject3DInstance');
    return new THREE.GridHelper(this.size, this.divisions);
  }

}
