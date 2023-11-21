import { Component, Input, Optional, SkipSelf } from '@angular/core';
import * as THREE from 'three';
import { RendererService } from '../../renderer/renderer.service';
import { provideParent } from '../../util';
import { AbstractObject3D } from '../abstract-object-3d';

@Component({
  selector: 'atft-grid-helper',
  providers: [provideParent(GridHelperComponent)],
  template: '<ng-content></ng-content>'
})
export class GridHelperComponent extends AbstractObject3D<THREE.GridHelper> {

  @Input() size!: number;
  @Input() divisions!: number;

  constructor(
    protected override rendererService: RendererService,
    @SkipSelf() @Optional() protected override parent: AbstractObject3D<any>
  ) {
    super(rendererService, parent);
  }

  protected newObject3DInstance(): THREE.GridHelper {
    // console.log('GridHelperComponent.newObject3DInstance');
    return new THREE.GridHelper(this.size, this.divisions);
  }

}
