import { Component, Input, Optional, SkipSelf } from '@angular/core';
import * as THREE from 'three';
import { RendererService } from '../../renderer/renderer.service';
import { provideParent } from '../../util';
import { AbstractObject3D } from '../abstract-object-3d';
import { AbstractMesh } from './abstract-mesh-3d';

@Component({
  selector: 'atft-grid-mesh',
  providers: [provideParent(GridMeshComponent)],
  template: '<ng-content></ng-content>'
})
export class GridMeshComponent extends AbstractMesh {

  @Input()
  size = 5;

  @Input()
  iterationsX = 30;

  @Input()
  iterationsY = 30;

  @Input()
  offset = 1.05;

  // private translate = (this.iterations * this.offset) / 2;


  protected newObject3DInstance(): THREE.Mesh {
    const geometry = new THREE.BufferGeometry();

    const vertices = [];
    const d = this.size;

    // Calculate general offset: (0,0) coordinates in the middle of grid
    const x0 = -(this.iterationsX * (d * this.offset)) / 2;
    const y0 = -(this.iterationsY * (d * this.offset)) / 2;

    let x = x0, y = y0;

    for (let i = 0; i < this.iterationsX; i++) {
      for (let j = 0; j < this.iterationsY; j++) {
        // Triangle 1:
        vertices.push(x, y, 0);
        vertices.push(x + d, y + d, 0);
        vertices.push(x, y + d, 0);

        // Triangle 2:
        vertices.push(x + d, y + d, 0);
        vertices.push(x, y, 0);
        vertices.push(x + d, y, 0);

        y = y + (this.size * this.offset);
      }
      y = y0;
      x = x + (this.size * this.offset);
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vertices), 3));
    const material = this.getMaterial();
    const mesh = new THREE.Mesh(geometry, material);

    geometry.computeBoundingBox();
    geometry.computeVertexNormals();

    this.applyShadowProps(mesh);
    return mesh;
  }

}
