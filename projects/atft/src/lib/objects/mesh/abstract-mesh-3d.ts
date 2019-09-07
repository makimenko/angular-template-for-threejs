import { Input } from '@angular/core';
import * as THREE from 'three';
import { AbstractObject3D } from '../abstract-object-3d';

export abstract class AbstractMesh extends AbstractObject3D<THREE.Mesh> {

  @Input()
  material: string;
  @Input()
  materialColor: number;

  constructor() {
    super();
    // console.log('AbstractMesh.constructor');
  }


  public getMaterial(): THREE.MeshBasicMaterial {
    // TODO: Extract to directive (or component)
    let appliedColor = 0x5DADE2;
    if (this.materialColor !== undefined ) {
      appliedColor = this.materialColor * 1;
    }
    // console.log('AbstractMesh.getMaterial.appliedColor: ', appliedColor);

    if (this.material === 'lamb' ) {
      return new THREE.MeshLambertMaterial({color: appliedColor});
    } else {
      return new THREE.MeshBasicMaterial({color: appliedColor});
    }
  }


}
