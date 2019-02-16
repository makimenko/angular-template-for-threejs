import { Directive, Input, AfterViewInit, forwardRef } from '@angular/core';
import * as THREE from 'three';
import { AbstractMesh } from '../abstract-mesh-3d';
import { AbstractObject3D } from '../abstract-object-3d';

@Directive({
  selector: 'three-torusmesh',
  providers: [{ provide: AbstractObject3D, useExisting: forwardRef(() => TorusmeshDirective) }]
})
export class TorusmeshDirective extends AbstractMesh {
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
    console.log('TorusmeshDirective.constructor');
  }

  protected newObject3DInstance(): THREE.Mesh {
    this.radius*=1;
    this.tube*=1;
    this.radialSegments*=1;
    this.tubularSegments*=1;

    console.log('TorusmeshDirective.newObject3DInstance', this.radius, this.tube, 
    	this.radialSegments, this.tubularSegments, this.arc );

    var geometry = new THREE.TorusGeometry(this.radius, this.tube, 
      this.radialSegments, this.tubularSegments);  //, this.arc
    let material: THREE.MeshMaterialType = this.getMaterial();
    return new THREE.Mesh(geometry, material);
  }

  protected afterInit(): void {
    console.log('TorusmeshDirective.afterInit');
    // none
  }
}
