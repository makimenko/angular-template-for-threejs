import { Directive, forwardRef, Input } from '@angular/core';
import * as THREE from 'three';
import { AbstractObject3D } from '../abstract-object-3d';
import { AbstractModelLoader } from './abstract-model-loader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

/**
 * Directive for employing THREE.OBJLoader to load [Wavefront *.obj files][1].
 *
 * [1]: https://en.wikipedia.org/wiki/Wavefront_.obj_file
 */
@Directive({
  selector: 'atft-obj-loader',
  providers: [{ provide: AbstractObject3D, useExisting: forwardRef(() => ObjLoaderDirective) }]
})
export class ObjLoaderDirective extends AbstractModelLoader {
  private loader = new OBJLoader();
  private mtlLoader = new MTLLoader();

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
          this.loader.setMaterials(materialCreator as any);
          this.loader.load(this.model, resolve);
        });
      });
    }
  }
}
