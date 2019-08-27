import {Component, forwardRef, Input} from '@angular/core';
import * as THREE from 'three';
import {AbstractMesh} from './abstract-mesh-3d';
import {AbstractObject3D} from '../abstract-object-3d';

@Component({
  selector: 'atft-torusmesh',
  providers: [{ provide: AbstractObject3D, useExisting: forwardRef(() => TorusmeshComponent) }],
  template: '<ng-content></ng-content>'
})
export class TorusmeshComponent extends AbstractMesh {
  //  - Radius of the torus, from the center of the torus to the center of the tube. Default is 1.
  @Input()
  radius: number;
  //  — Radius of the tube. Default is 0.4.
  @Input()
  tube: number;
  @Input()
  radialSegments: number; //  — Default is 8
  @Input()
  tubularSegments: number; //  — Default is 6.
  @Input()
  arc: number; // — Central angle. Default is Math.PI * 2.

  constructor() {
    super();
    console.log('TorusmeshComponent.constructor');
  }

  protected newObject3DInstance(): THREE.Mesh {
    this.radius *= 1;
    this.tube *= 1;
    this.radialSegments *= 1;
    this.tubularSegments *= 1;

    console.log('TorusmeshComponent.newObject3DInstance', this.radius, this.tube,
      this.radialSegments, this.tubularSegments, this.arc);

    const geometry = new THREE.TorusGeometry(this.radius, this.tube,
      this.radialSegments, this.tubularSegments);
    const material: THREE.MeshBasicMaterial = this.getMaterial();
    return new THREE.Mesh(geometry, material);
  }

  protected afterInit(): void {
    console.log('TorusmeshComponent.afterInit');
    // none
  }
}
