import { Component, Optional, SkipSelf } from '@angular/core';

import * as THREE from 'three';
import { RendererService } from '../../renderer/renderer.service';
import { provideParent } from '../../util';
import { AbstractObject3D } from '../abstract-object-3d';
import { AbstractModelLoader } from './abstract-model-loader';

@Component({
  selector: 'atft-object-loader',
  providers: [provideParent(ObjectLoaderComponent)],
  template: '<ng-content></ng-content>'
})
export class ObjectLoaderComponent extends AbstractModelLoader {
  private loader = new THREE.ObjectLoader();

  constructor(
    protected override rendererService: RendererService,
    @SkipSelf() @Optional() protected override parent: AbstractObject3D<any>
  ) {
    super(rendererService, parent);
  }

  protected async loadLazyObject() {
    // console.log('ObjectLoaderComponent.loadLazyObject');
    return new Promise<THREE.Object3D>((resolve, reject) => {
      this.loader.load(this.model, model => {
          // BUG #95: it seems that some textures loaded after last render (and model has black texture instead)
          resolve(model);
        },
        undefined,
        reject
      );
    });
  }

}
