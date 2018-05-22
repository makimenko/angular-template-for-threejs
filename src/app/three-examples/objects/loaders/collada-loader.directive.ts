import { Directive, forwardRef } from '@angular/core';


import * as THREE from 'three';
import '../../js/EnableThreeExamples';
import 'three/examples/js/loaders/ColladaLoader';
import { AbstractModelLoader } from './abstract-model-loader';
import { AbstractObject3D } from '../abstract-object-3d';

@Directive({
  selector: 'three-collada-loader',
  providers: [{ provide: AbstractObject3D, useExisting: forwardRef(() => ColladaLoaderDirective) }]
})
export class ColladaLoaderDirective extends AbstractModelLoader {
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
