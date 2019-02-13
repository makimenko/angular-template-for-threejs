import { Input } from '@angular/core';
import * as THREE from 'three';
import { AbstractObject3D } from './abstract-object-3d';

export abstract class AbstractMesh extends AbstractObject3D<THREE.Mesh> {
  @Input()
  material: string;
  @Input()
  materialcolor: number;

  constructor() { 
    super();
    console.log('AbstractMesh.constructor');
  }


  public getMaterial(): THREE.MeshMaterialType {
    let rmaterial: THREE.MeshMaterialType;
    let appliedColor: number = 0xffff00; 
    if (this.materialcolor !== undefined ) { 
      appliedColor = this.materialcolor*1;
    }
    console.log('AbstractMesh.getMaterial.appliedColor: ', appliedColor);

    if (this.material === "lamb" ) {
      rmaterial = new THREE.MeshLambertMaterial({color: appliedColor});
    } else {
      rmaterial = new THREE.MeshBasicMaterial({color: appliedColor});
    } 
    return rmaterial;
  }
}
