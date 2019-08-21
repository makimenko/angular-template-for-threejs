import { Directive, Input, AfterViewInit, forwardRef } from '@angular/core';
import * as THREE from 'three';
import { AbstractMesh } from './abstract-mesh-3d';
import { AbstractObject3D } from '../abstract-object-3d';

@Directive({
  selector: 'atft-cylindermesh',
  providers: [{ provide: AbstractObject3D, useExisting: forwardRef(() => CylindermeshDirective) }]
})
export class CylindermeshDirective extends AbstractMesh {
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
    console.log('CylindermeshDirective.constructor');
  }

  protected newObject3DInstance(): THREE.Mesh {
    console.log('CylindermeshDirective.newObject3DInstance');
    const geometry = new THREE.CylinderGeometry(this.radiustop, this.radiusbottom, this.cylheight, this.radialSegments, this.hightSegments);
    const material: THREE.MeshBasicMaterial = this.getMaterial();
    return new THREE.Mesh(geometry, material);
  }

  protected afterInit(): void {
    console.log('CylindermeshDirective.afterInit');
    // none
  }
}
