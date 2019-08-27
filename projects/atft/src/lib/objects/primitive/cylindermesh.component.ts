import {Component, forwardRef, Input} from '@angular/core';
import * as THREE from 'three';
import {AbstractMesh} from './abstract-mesh-3d';
import {AbstractObject3D} from '../abstract-object-3d';

@Component({
  selector: 'atft-cylindermesh',
  providers: [{ provide: AbstractObject3D, useExisting: forwardRef(() => CylindermeshComponent) }],
  template: '<ng-content></ng-content>'
})
export class CylindermeshComponent extends AbstractMesh {

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
    console.log('CylindermeshComponent.constructor');
  }

  protected newObject3DInstance(): THREE.Mesh {
    console.log('CylindermeshComponent.newObject3DInstance');
    const geometry = new THREE.CylinderGeometry(this.radiustop, this.radiusbottom, this.cylheight, this.radialSegments, this.hightSegments);
    const material: THREE.MeshBasicMaterial = this.getMaterial();
    return new THREE.Mesh(geometry, material);
  }

  protected afterInit(): void {
    console.log('CylindermeshComponent.afterInit');
    // none
  }
}
