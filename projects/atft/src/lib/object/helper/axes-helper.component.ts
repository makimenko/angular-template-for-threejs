import {Component, forwardRef, Input, Optional, SkipSelf} from '@angular/core';
import * as THREE from 'three';
import {AbstractObject3D} from '../abstract-object-3d';
import {RendererService} from '../../renderer/renderer.service';

@Component({
  selector: 'atft-axes-helper',
  providers: [{ provide: AbstractObject3D, useExisting: forwardRef(() => AxesHelperComponent) }],
  template: '<ng-content></ng-content>'
})
export class AxesHelperComponent extends AbstractObject3D<THREE.AxesHelper> {

  @Input() size: number;

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>
  ) {
    super(rendererService, parent);
  }

  protected newObject3DInstance(): THREE.AxesHelper {
    // console.log('AxesHelperComponent.newObject3DInstance');
    return new THREE.AxesHelper(this.size);
  }


}
