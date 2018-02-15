import { Directive, Input, AfterViewInit, forwardRef } from '@angular/core';
import * as THREE from 'three';
import { AbstractObject3D } from './abstract-object-3d';

@Directive({
  selector: 'three-grid-helper',
  providers: [{ provide: AbstractObject3D, useExisting: forwardRef(() => GridHelperDirective) }]
})
export class GridHelperDirective extends AbstractObject3D<THREE.AxesHelper> {

  @Input() size: number;
  @Input() divisions: number;

  constructor() {
    super();
    console.log("GridHelperDirective.constructor");
  }

  protected newObject3DInstance(): THREE.AxesHelper {
    console.log("GridHelperDirective.newObject3DInstance");
    return new THREE.GridHelper(this.size, this.divisions)
  }

  protected afterInit(): void {
    console.log("GridHelperDirective.afterInit");
    // none
  }

}
