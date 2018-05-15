import { Directive, forwardRef } from '@angular/core';

import { AbstractObject3D, ModelLoaderDirective } from 'three-wrapper';

import * as THREE from 'three';
import '../js/EnableThreeExamples';
import 'three/examples/js/loaders/OBJLoader';

/**
 * Directive for employing THREE.OBJLoader to load [Wavefront *.obj files][1].
 *
 * [1]: https://en.wikipedia.org/wiki/Wavefront_.obj_file
 */
@Directive({
  selector: 'three-obj-loader',
  providers: [{ provide: AbstractObject3D, useExisting: forwardRef(() => ObjLoaderDirective) }]
})
export class ObjLoaderDirective extends ModelLoaderDirective {
  private loader = new THREE.OBJLoader();

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
