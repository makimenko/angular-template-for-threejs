import {Component, Input, OnChanges, Optional, SkipSelf} from '@angular/core';
import * as THREE from 'three';
import {fixCenter, provideParent} from '../../util';
import {AbstractMesh} from './abstract-mesh-3d';

function offset(arr: number[], x: number, y: number): number[] {
  const result = [...arr];
  result[0] += x;
  result[1] += y;
  return result;
}

function offset2(arr: number[], offset: number[]): number[] {
  const result = [...arr];
  result[0] += offset[0];
  result[1] += offset[1];
  return result;
}

interface Hex {
  q: number;
  r: number;
}

@Component({
  selector: 'atft-hexagon-mesh',
  providers: [provideParent(HaxagonMeshComponent)],
  template: '<ng-content></ng-content>'
})
export class HaxagonMeshComponent extends AbstractMesh implements OnChanges {

  @Input() cellSize = 10;
  @Input() gap = 1.04;
  @Input() len = 7;

  protected cellWidth = this.cellSize * 2 + 5;
  protected cellLength = (Math.sqrt(3) * 0.5) * this.cellWidth + 5;


  protected newObject3DInstance(): THREE.Mesh {
    const parent = new THREE.Mesh();

    const geometry = this.getGeometry();
    const material = this.getMaterial();
    const mesh = new THREE.Mesh(geometry, material);
    this.applyShadowProps(mesh);
    fixCenter(mesh);

    parent.add(mesh);

    return parent;
  }


  protected getGeometry(): THREE.BufferGeometry {
    const geometry = new THREE.BufferGeometry();

    const faces = [];
    const vertices = [];

    for (let i = 0; i < 6; i++) {
      // Geometry of single hexagon shape
      vertices.push(this.createVertex(i));
    }

    // Excellent explanation:
    // https://www.redblobgames.com/grids/hexagons/#map-storage
    const mid = Math.floor(this.len / 2);
    let q = 0, r = 0;
    for (q = 0; q < this.len; q++) {
      for (r = 0; r <= this.len; r++) {
        // r=3:
        const skip = (q + r < mid) || (q + r > mid * 3 + 1);
        if (!skip) {
          const offset = this.cellToPixel({q, r});
          faces.push(...offset2(vertices[0], offset), ...offset2(vertices[1], offset), ...offset2(vertices[2], offset));
          faces.push(...offset2(vertices[0], offset), ...offset2(vertices[2], offset), ...offset2(vertices[3], offset));
          faces.push(...offset2(vertices[0], offset), ...offset2(vertices[3], offset), ...offset2(vertices[4], offset));
          faces.push(...offset2(vertices[0], offset), ...offset2(vertices[4], offset), ...offset2(vertices[5], offset));
        }
      }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(faces), 3));
    geometry.computeBoundingBox();
    geometry.computeVertexNormals();

    return geometry;
  }

  protected createVertex(i) {
    const TAU = Math.PI * 2;
    const angle = (TAU / 6) * i;
    return [this.cellSize * Math.sin(angle), this.cellSize * Math.cos(angle), 0];
  }

  protected cellToPixel(cell: Hex): number[] {
    const vert = [];

    var x = this.cellSize * (Math.sqrt(3) * cell.q + Math.sqrt(3) / 2 * cell.r) * this.gap;
    var y = this.cellSize * (3. / 2 * cell.r) * this.gap;
    vert.push(x);
    vert.push(y);
    vert.push(0);

    return vert;
  }


}
