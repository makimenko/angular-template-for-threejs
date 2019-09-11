import {Component, forwardRef, Input} from '@angular/core';
import * as THREE from 'three';
import {AbstractMesh} from './abstract-mesh-3d';
import {AbstractObject3D} from '../abstract-object-3d';

@Component({
  selector: 'atft-frame-mesh',
  providers: [{provide: AbstractObject3D, useExisting: forwardRef(() => FrameMeshComponent)}],
  template: '<ng-content></ng-content>'
})
export class FrameMeshComponent extends AbstractMesh {

  @Input()
  thickness = 2;

  @Input()
  sizeX = 20;

  @Input()
  sizeY = 20;


  protected newObject3DInstance(): THREE.Mesh {

    const halfX = this.sizeX / 2.0;
    const halfY = this.sizeY / 2.0;
    const t = this.thickness;

    const shape = new THREE.Shape();

    shape.moveTo(-halfX, halfY);
    shape.lineTo(-halfX - t, halfY + t);
    shape.lineTo(halfX + t, halfY + t);
    shape.lineTo(halfX + t, -halfY - t);
    shape.lineTo(-halfX - t, -halfY - t);
    shape.lineTo(-halfX - t, halfY + t);

    shape.lineTo(-halfX, halfY);
    shape.lineTo(-halfX, -halfY);
    shape.lineTo(halfX, -halfY);
    shape.lineTo(halfX, halfY);
    shape.lineTo(-halfX, halfY);

    const geometry = new THREE.ShapeBufferGeometry(shape);
    const material = this.getMaterial();
    const mesh = new THREE.Mesh(geometry, material);

    this.applyShadowProps(mesh);
    return mesh;
  }

}
