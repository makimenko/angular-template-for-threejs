import {Component, forwardRef, Input} from '@angular/core';
import * as THREE from 'three';
import {AbstractObject3D} from '../abstract-object-3d';
import {AbstractModelLoader} from './abstract-model-loader';
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader';
import {MTLLoader} from 'three/examples/jsm/loaders/MTLLoader';
import {RendererService} from '../../renderer';

/**
 * Component for employing THREE.OBJLoader to load [Wavefront *.obj files][1].
 *
 * [1]: https://en.wikipedia.org/wiki/Wavefront_.obj_file
 */
@Component({
  selector: 'atft-obj-loader',
  providers: [{ provide: AbstractObject3D, useExisting: forwardRef(() => ObjLoaderComponent) }],
  template: '<ng-content></ng-content>'
})
export class ObjLoaderComponent extends AbstractModelLoader {

  private loader = new OBJLoader();
  private mtlLoader = new MTLLoader();

  @Input()
  material: string;

  @Input()
  texturePath: string;

  constructor(
    protected rendererService: RendererService
  ) {
    super(rendererService);
  }

  protected async loadLazyObject() {
    // console.log('ObjLoaderComponent.loadLazyObject');
    // TODO: make it nicer
    if (this.material === undefined) {
      // console.log('ObjLoaderComponent.loadLazyObject without materials');
      return new Promise<THREE.Object3D>((resolve, reject) => {
        this.loader.load(this.model, model => {
          resolve(model);
        },
          undefined,
          reject
        );
      });
    } else {
      // console.log('ObjLoaderComponent.loadLazyObject with materials');
      return new Promise<THREE.Object3D>((resolve, reject) => {
        if (this.texturePath !== undefined) {
          this.mtlLoader.setTexturePath(this.texturePath);
        }
        this.mtlLoader.load(this.material, materialCreator => {
          materialCreator.preload();
          this.loader.setMaterials(materialCreator);
          this.loader.load(this.model, resolve);
        });
      });
    }
  }
}
