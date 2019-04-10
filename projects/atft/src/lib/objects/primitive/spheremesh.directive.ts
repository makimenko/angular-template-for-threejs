import { Directive, Input, AfterViewInit, forwardRef } from '@angular/core';
import * as THREE from 'three';
import { AbstractMesh } from '../abstract-mesh-3d';
import { AbstractObject3D } from '../abstract-object-3d';

@Directive({
  selector: 'atft-spheremesh',
  providers: [{ provide: AbstractObject3D, useExisting: forwardRef(() => SpheremeshDirective) }]
})
export class SpheremeshDirective extends AbstractMesh {
  @Input()
  radius: number;
  @Input()
  widthSegments: number;
  @Input()
  hightSegments: number;

  constructor() {
    super();
    console.log('SpheremeshDirective.constructor');
  }

  protected newObject3DInstance(): THREE.Mesh {
    console.log('SpheremeshDirective.newObject3DInstance');
    const geometry = new THREE.SphereGeometry(this.radius, this.widthSegments, this.hightSegments);
    const material: THREE.MeshBasicMaterial = this.getMaterial();
    return new THREE.Mesh(geometry, material);
  }

  protected afterInit(): void {
    console.log('SpheremeshDirective.afterInit');
    // none
  }
}
