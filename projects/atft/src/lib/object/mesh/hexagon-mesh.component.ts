import {Component, OnChanges, Optional, SkipSelf} from '@angular/core';
import * as THREE from 'three';
import {RendererService} from '../../renderer/renderer.service';
import {provideParent} from '../../util';
import {AbstractObject3D} from '../abstract-object-3d';
import {AbstractMesh} from './abstract-mesh-3d';

@Component({
  selector: 'atft-hexagon-mesh',
  providers: [provideParent(HaxagonMeshComponent)],
  template: '<ng-content></ng-content>'
})
export class HaxagonMeshComponent extends AbstractMesh implements OnChanges {


  cellSize = 10;
  cellShape;
  cellGeo;
  cellShapeGeo;

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>
  ) {
    super(rendererService, parent);
  }

  protected newObject3DInstance(): THREE.Mesh {
    const geometry = this.createHex();
    const material = this.getMaterial();
    const mesh = new THREE.Mesh(geometry, material);
    this.applyShadowProps(mesh);
    return mesh;
  }


  protected createHex(): THREE.ShapeGeometry {
// create base shape used for building geometry
    var i, verts = [];
    // create the skeleton of the hex
    for (i = 0; i < 6; i++) {
      verts.push(this.createVertex(i));
    }
    // copy the verts into a shape for the geometry to use
    this.cellShape = new THREE.Shape();
    this.cellShape.moveTo(verts[0].x, verts[0].y);
    for (i = 1; i < 6; i++) {
      this.cellShape.lineTo(verts[i].x, verts[i].y);
    }
    this.cellShape.lineTo(verts[0].x, verts[0].y);
    this.cellShape.autoClose = true;

    this.cellGeo = new THREE.BufferGeometry();
    this.cellGeo.vertices = verts;
    this.cellGeo.verticesNeedUpdate = true;

    this.cellShapeGeo = new THREE.ShapeGeometry(this.cellShape);
    return this.cellShapeGeo;
  }

  protected createVertex(i) {
    const TAU = Math.PI * 2;
    const angle = (TAU / 6) * i;
    return new THREE.Vector3((this.cellSize * Math.cos(angle)), (this.cellSize * Math.sin(angle)), 0);
  }


}
