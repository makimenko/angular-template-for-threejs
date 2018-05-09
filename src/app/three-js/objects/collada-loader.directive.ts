import { Directive, forwardRef } from '@angular/core';

import { AbstractObject3D } from './abstract-object-3d';
import { ModelLoaderDirective } from './model-loader.directive';

import * as THREE from 'three';
import '../js/EnableThreeExamples';
import 'three/examples/js/loaders/ColladaLoader';

@Directive({
  selector: 'three-collada-loader',
  providers: [{ provide: AbstractObject3D, useExisting: forwardRef(() => ColladaLoaderDirective) }]
})
export class ColladaLoaderDirective extends ModelLoaderDirective {
  private loader = new THREE.ColladaLoader();

  protected async loadModelObject() {
    return new Promise<THREE.Object3D>((resolve, reject) => {
      this.loader.load(this.model, model => {
          resolve(model.scene);
        },
        undefined,
        reject
      );
    });
  }
}
