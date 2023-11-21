import { AfterViewInit, Component, Optional, SkipSelf } from '@angular/core';
import * as THREE from 'three';
import { RendererService } from '../../renderer/renderer.service';
import { provideParent } from '../../util';
import { AbstractObject3D } from '../abstract-object-3d';

@Component({
  selector: 'atft-empty',
  providers: [provideParent(EmptyComponent)],
  template: '<ng-content></ng-content>'
})
export class EmptyComponent extends AbstractObject3D<THREE.Object3D> implements AfterViewInit {

  constructor(
    protected override rendererService: RendererService,
    @SkipSelf() @Optional() protected override parent: AbstractObject3D<any>
  ) {
    super(rendererService, parent);
  }

  protected newObject3DInstance(): THREE.Object3D {
    return new THREE.Object3D();
  }

}
