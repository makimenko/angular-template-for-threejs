import { Directive, forwardRef } from '@angular/core';
import { AbstractObject3D } from '../abstract-object-3d';
import { AbstractModelLoader } from './abstract-model-loader';

import * as THREE from 'three';

@Directive({
  selector: 'atft-object-loader',
  providers: [{ provide: AbstractObject3D, useExisting: forwardRef(() => ObjectLoaderDirective) }]
})
export class ObjectLoaderDirective extends AbstractModelLoader {
  private loader = new THREE.ObjectLoader();

  protected async loadModelObject() {
    return new Promise<THREE.Object3D>((resolve, reject) => {
      this.loader.load(this.model, model => {
          resolve(model);
        },
        undefined,
        reject
      );
    });
  }
}
