import { Component, Input, Optional, SkipSelf } from '@angular/core';
import * as THREE from 'three';
import { RendererService } from '../../renderer/renderer.service';
import { provideParent } from '../../util';
import { AbstractObject3D } from '../abstract-object-3d';

@Component({
  selector: 'atft-axes-helper',
  providers: [provideParent(AxesHelperComponent)],
  template: '<ng-content></ng-content>'
})
export class AxesHelperComponent extends AbstractObject3D<THREE.AxesHelper> {

  @Input() size = 50;

  constructor(
    protected override rendererService: RendererService,
    @SkipSelf() @Optional() protected override parent: AbstractObject3D<any>
  ) {
    super(rendererService, parent);
  }

  protected newObject3DInstance(): THREE.AxesHelper {
    // console.log('AxesHelperComponent.newObject3DInstance');
    return new THREE.AxesHelper(this.size);
  }


}
