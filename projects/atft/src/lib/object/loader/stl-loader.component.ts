import {Component, Input, Optional, SkipSelf} from '@angular/core';

import * as THREE from 'three';
import {RendererService} from '../../renderer/renderer.service';
import {appliedMaterial, provideParent} from '../../util';
import {AbstractObject3D} from '../abstract-object-3d';
import {AbstractModelLoader} from './abstract-model-loader';
import {STLLoader} from 'three/examples/jsm/loaders/STLLoader';

@Component({
  selector: 'atft-stl-loader',
  providers: [provideParent(StlLoaderComponent)],
  template: '<ng-content></ng-content>'
})
export class StlLoaderComponent extends AbstractModelLoader {
  private loader = new STLLoader();

  @Input()
  material: string;

  @Input()
  materialColor: string | number = '#FFFFFF';

  @Input()
  depthWrite = true;

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>
  ) {
    super(rendererService, parent);
  }

  protected async loadLazyObject() {
    // console.log('StlLoaderComponent.loadLazyObject');
    return new Promise<THREE.Object3D>((resolve, reject) => {
      this.loader.load(this.model, geometry => {
          const material = appliedMaterial(this.materialColor, this.material, this.depthWrite);
          const mesh = new THREE.Mesh(geometry, material);
          resolve(mesh);
        },
        undefined,
        reject
      );
    });
  }

}
