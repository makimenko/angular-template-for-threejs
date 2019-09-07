import {Input} from '@angular/core';
import * as THREE from 'three';
import {AbstractObject3D} from '../abstract-object-3d';
import {appliedMaterial} from '../../utils';

export abstract class AbstractMesh extends AbstractObject3D<THREE.Mesh> {

  @Input()
  material: string;

  @Input()
  materialColor = 0x5DADE2;

  @Input()
  castShadow = true;

  @Input()
  receiveShadow = true;

  @Input()
  depthWrite = true;

  protected getMaterial(): THREE.Material {
    return appliedMaterial(this.materialColor, this.material, this.depthWrite);
  }

  protected applyShadowProps(mesh: THREE.Mesh) {
    mesh.castShadow = this.castShadow;
    mesh.receiveShadow = this.receiveShadow;
  }

}
