import {Component, forwardRef} from '@angular/core';
import * as THREE from 'three';
import {AbstractObject3D} from './abstract-object-3d';

@Component({
  selector: 'atft-scene',
  providers: [{ provide: AbstractObject3D, useExisting: forwardRef(() => SceneComponent) }],
  template: '<ng-content></ng-content>'
})
export class SceneComponent extends AbstractObject3D<THREE.Scene> {

  constructor() {
    // console.log('SceneComponent.constructor');
    super();
  }

  protected newObject3DInstance(): THREE.Scene {
    // console.log('SceneComponent.newObject3DInstance');
    return new THREE.Scene();
  }

}
