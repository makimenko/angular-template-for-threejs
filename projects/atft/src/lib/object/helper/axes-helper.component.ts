import {Component, forwardRef, Input} from '@angular/core';
import * as THREE from 'three';
import {AbstractObject3D} from '../abstract-object-3d';
import {RendererService} from '../../renderer';

@Component({
  selector: 'atft-axes-helper',
  providers: [{ provide: AbstractObject3D, useExisting: forwardRef(() => AxesHelperComponent) }],
  template: '<ng-content></ng-content>'
})
export class AxesHelperComponent extends AbstractObject3D<THREE.AxesHelper> {

  @Input() size: number;

  constructor(
    protected rendererService: RendererService
  ) {
    super(rendererService);
  }

  protected newObject3DInstance(): THREE.AxesHelper {
    // console.log('AxesHelperComponent.newObject3DInstance');
    return new THREE.AxesHelper(this.size);
  }


}
