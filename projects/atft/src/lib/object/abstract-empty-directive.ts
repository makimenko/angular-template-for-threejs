import { Directive } from '@angular/core';
import * as THREE from 'three';
import { AbstractObject3D } from './abstract-object-3d';

@Directive()
export abstract class AbstractEmptyDirective extends AbstractObject3D<THREE.Object3D> {

  protected newObject3DInstance(): THREE.Object3D {
    return new THREE.Object3D();
  }

}
