import {Component, forwardRef} from '@angular/core';
import {AbstractObject3D} from '../abstract-object-3d';
import {AbstractModelLoader} from './abstract-model-loader';

import * as THREE from 'three';
import {RendererService} from '../../renderer';

@Component({
  selector: 'atft-object-loader',
  providers: [{ provide: AbstractObject3D, useExisting: forwardRef(() => ObjectLoaderComponent) }],
  template: '<ng-content></ng-content>'
})
export class ObjectLoaderComponent extends AbstractModelLoader {
  private loader = new THREE.ObjectLoader();

  constructor(
    protected rendererService: RendererService
  ) {
    super(rendererService);
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
