import {Component, forwardRef, Input} from '@angular/core';
import * as THREE from 'three';
import {AbstractMesh} from './abstract-mesh-3d';
import {AbstractObject3D} from '../abstract-object-3d';

@Component({
  selector: 'atft-sphere-mesh',
  providers: [{ provide: AbstractObject3D, useExisting: forwardRef(() => SphereMeshComponent) }],
  template: '<ng-content></ng-content>'
})
export class SphereMeshComponent extends AbstractMesh {
  @Input()
  radius: number;
  @Input()
  widthSegments: number;
  @Input()
  hightSegments: number;

  constructor() {
    super();
    // console.log('SphereMeshComponent.constructor');
  }

  protected newObject3DInstance(): THREE.Mesh {
    // console.log('SphereMeshComponent.newObject3DInstance');
    const geometry = new THREE.SphereGeometry(this.radius, this.widthSegments, this.hightSegments);
    const material: THREE.MeshBasicMaterial = this.getMaterial();
    return new THREE.Mesh(geometry, material);
  }

}
