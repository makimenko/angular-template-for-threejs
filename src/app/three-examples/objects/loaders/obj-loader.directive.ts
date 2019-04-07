import { Directive, forwardRef, Input } from '@angular/core';
import * as THREE from 'three';
import { AbstractObject3D } from '../abstract-object-3d';
import { AbstractModelLoader } from './abstract-model-loader';

import * as THREE_OBJ from 'three/examples/jsm/loaders/OBJLoader';
import * as THREE_MTL from 'three/examples/jsm/loaders/MTLLoader';


/**
 * Directive for employing THREE.OBJLoader to load [Wavefront *.obj files][1].
 *
 * [1]: https://en.wikipedia.org/wiki/Wavefront_.obj_file
 */
@Directive({
  selector: 'three-obj-loader',
  providers: [{ provide: AbstractObject3D, useExisting: forwardRef(() => ObjLoaderDirective) }]
})
export class ObjLoaderDirective extends AbstractModelLoader {
  private loader = new THREE_OBJ.OBJLoader;
  private mtlLoader = new THREE_MTL.MTLLoader();

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
        this.mtlLoader.load(this.material, materialCreator => {
          materialCreator.preload();          
          var x:any = materialCreator;// seems wrong type in js module ts. Hack (as any)
          this.loader.setMaterials(x); 
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
