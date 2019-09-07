import { Input } from '@angular/core';
import * as THREE from 'three';
import { AbstractObject3D } from '../abstract-object-3d';
import {appliedColor} from '../../utils/applied-color';

export abstract class AbstractMesh extends AbstractObject3D<THREE.Mesh> {

  @Input()
  material: string;
  @Input()
  materialColor = 0x5DADE2;

  constructor() {
    super();
    // console.log('AbstractMesh.constructor');
  }


  public getMaterial(): THREE.MeshBasicMaterial {
    // TODO: Extract to directive (or component)
    // console.log('AbstractMesh.getMaterial.appliedColor: ', appliedColor);

    if (this.material === 'lamb' ) {
      return new THREE.MeshLambertMaterial({color: appliedColor(this.materialColor)});
    } else {
      return new THREE.MeshBasicMaterial({color: appliedColor(this.materialColor)});
    }
  }


}
