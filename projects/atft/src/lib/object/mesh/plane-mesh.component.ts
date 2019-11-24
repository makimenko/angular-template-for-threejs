import {Component, forwardRef, Input} from '@angular/core';
import * as THREE from 'three';
import {AbstractMesh} from './abstract-mesh-3d';
import {AbstractObject3D} from '../abstract-object-3d';
import {RendererService} from '../../renderer/renderer.service';

@Component({
  selector: 'atft-plane-mesh',
  providers: [{provide: AbstractObject3D, useExisting: forwardRef(() => PlaneMeshComponent)}],
  template: '<ng-content></ng-content>'
})
export class PlaneMeshComponent extends AbstractMesh {

  /**
   * Width; that is, the length of the edges parallel to the X axis. Optional; defaults to 1.
   */
  @Input()
  width = 1.0;

  /**
   * Height; that is, the length of the edges parallel to the Y axis. Optional; defaults to 1.
   */
  @Input()
  height = 1.0;

  /**
   * Number of segmented rectangular faces along the width of the sides. Optional; defaults to 1.
   */
  @Input()
  widthSegments = 1;

  /**
   * Number of segmented rectangular faces along the height of the sides. Optional; defaults to 1.
   */
  @Input()
  heightSegments = 1;

  constructor(
    protected rendererService: RendererService
  ) {
    super(rendererService);
  }

  protected newObject3DInstance(): THREE.Mesh {
    const geometry = new THREE.PlaneBufferGeometry(this.width, this.height, this.widthSegments, this.heightSegments);
    const material = this.getMaterial();
    const mesh = new THREE.Mesh(geometry, material);
    this.applyShadowProps(mesh);
    return mesh;
  }

}
