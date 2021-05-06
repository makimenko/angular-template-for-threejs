import {Injectable} from '@angular/core';
import {AbstractCacheService} from './abstract-cache.service';
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader';
import * as THREE from 'three';
import {MTLLoader} from 'three/examples/jsm/loaders/MTLLoader';


@Injectable()
export class ObjLoaderService extends AbstractCacheService<THREE.Object3D> {

  private loader = new OBJLoader();

  protected getValue(key: string): Promise<THREE.Object3D> {
    // console.log('ObjLoaderService.getValue');
    return new Promise<THREE.Object3D>((resolve, reject) => {
      this.loader.load(key, model => {
        resolve(model);
      }, undefined, reject);
    });
  }

  public setMaterials(materialCreator: MTLLoader.MaterialCreator): void {
    this.loader.setMaterials(materialCreator);
  }

}
