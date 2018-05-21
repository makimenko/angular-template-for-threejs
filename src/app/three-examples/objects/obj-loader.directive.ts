import { Directive, forwardRef, Input } from '@angular/core';
import * as THREE from 'three';
import { AbstractObject3D } from './abstract-object-3d';
import { ModelLoaderDirective } from './model-loader.directive';

import '../js/EnableThreeExamples';
import 'three/examples/js/loaders/OBJLoader';
import 'three/examples/js/loaders/MTLLoader';

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
  private mtlLoader = new THREE.MTLLoader();

  @Input()
  material: string;

  @Input()
  texturePath: string;

  protected async loadModelObject() {
    // TODO: make it nicer
    if (this.material === undefined) {
      return new Promise<THREE.Object3D>((resolve, reject) => {
        this.loader.load(this.model, model => {
          resolve(model);
        },
          undefined,
          reject
        );
      });
    } else {
      return new Promise<THREE.Object3D>((resolve, reject) => {
        if (this.texturePath !== undefined) {
          this.mtlLoader.setTexturePath(this.texturePath);
        }
        this.mtlLoader.load(this.material, material => {
          material.preload();
          this.loader.setMaterials(material);
          this.loader.load(this.model, model => {
            resolve(model);
          },
            undefined,
            reject
          );
        });
      });
    }
  }
}
