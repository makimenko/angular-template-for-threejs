import { Directive, forwardRef } from '@angular/core';

import { AbstractObject3D } from './abstract-object-3d';
import { ModelLoaderDirective } from './model-loader.directive';

import * as THREE from 'three';

@Directive({
  selector: 'three-object-loader',
  providers: [{ provide: AbstractObject3D, useExisting: forwardRef(() => ObjectLoaderDirective) }]
})
export class ObjectLoaderDirective extends ModelLoaderDirective {
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
