import {Component, forwardRef, Input} from '@angular/core';
import * as THREE from 'three';
import {AbstractMesh} from './abstract-mesh-3d';
import {AbstractObject3D} from '../abstract-object-3d';

@Component({
  selector: 'atft-cylinder-mesh',
  providers: [{ provide: AbstractObject3D, useExisting: forwardRef(() => CylinderMeshComponent) }],
  template: '<ng-content></ng-content>'
})
export class CylinderMeshComponent extends AbstractMesh {

  @Input()
  radiustop: number;
  @Input()
  radiusbottom: number;
  @Input()
  cylheight: number;
  @Input()
  radialSegments: number;
  @Input()
  hightSegments: number;

  constructor() {
    super();
    console.log('CylinderMeshComponent.constructor');
  }

  protected newObject3DInstance(): THREE.Mesh {
    console.log('CylinderMeshComponent.newObject3DInstance');
    const geometry = new THREE.CylinderGeometry(this.radiustop, this.radiusbottom, this.cylheight, this.radialSegments, this.hightSegments);
    const material: THREE.MeshBasicMaterial = this.getMaterial();
    return new THREE.Mesh(geometry, material);
  }

  protected afterInit(): void {
    console.log('CylinderMeshComponent.afterInit');
    // none
  }
}
