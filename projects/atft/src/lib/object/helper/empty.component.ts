import {AfterViewInit, Component, forwardRef, Optional, SkipSelf} from '@angular/core';
import * as THREE from 'three';
import {AbstractObject3D} from '../abstract-object-3d';
import {RendererService} from '../../renderer/renderer.service';

@Component({
  selector: 'atft-empty',
  providers: [{ provide: AbstractObject3D, useExisting: forwardRef(() => EmptyComponent) }],
  template: '<ng-content></ng-content>'
})
export class EmptyComponent extends AbstractObject3D<THREE.Object3D> implements AfterViewInit {

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>
  ) {
    super(rendererService, parent);
  }

  protected newObject3DInstance(): THREE.Object3D {
    return new THREE.Object3D();
  }

}
