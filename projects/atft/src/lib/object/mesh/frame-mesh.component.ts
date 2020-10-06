import { Component, Input, Optional, SkipSelf } from '@angular/core';
import * as THREE from 'three';
import { RendererService } from '../../renderer/renderer.service';
import { provideParent } from '../../util';
import { AbstractObject3D } from '../abstract-object-3d';
import { AbstractMesh } from './abstract-mesh-3d';

@Component({
  selector: 'atft-frame-mesh',
  providers: [provideParent(FrameMeshComponent)],
  template: '<ng-content></ng-content>'
})
export class FrameMeshComponent extends AbstractMesh {

  @Input()
  thickness = 2;

  @Input()
  sizeX = 20;

  @Input()
  sizeY = 20;

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>
  ) {
    super(rendererService, parent);
  }

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
