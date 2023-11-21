import { Component, Input, Optional, SkipSelf } from '@angular/core';
import * as THREE from 'three';
import { RendererService } from '../../renderer/renderer.service';
import { provideParent } from '../../util';
import { AbstractObject3D } from '../abstract-object-3d';
import { AbstractMesh } from './abstract-mesh-3d';

@Component({
  selector: 'atft-box-mesh',
  providers: [provideParent(BoxMeshComponent)],
  template: '<ng-content></ng-content>'
})
export class BoxMeshComponent extends AbstractMesh {

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
   * Depth; that is, the length of the edges parallel to the Z axis. Optional; defaults to 1.
   */
  @Input()
  depth = 1.0;

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

  /**
   * Number of segmented rectangular faces along the depth of the sides. Optional; defaults to 1.
   */
  @Input()
  depthSegments = 1;

  constructor(
    protected override rendererService: RendererService,
    @SkipSelf() @Optional() protected override parent: AbstractObject3D<any>
  ) {
    super(rendererService, parent);
  }

  protected newObject3DInstance() {
    // console.log('BoxMeshComponent.newObject3DInstance');
    const geometry = new THREE.BoxGeometry(this.width, this.height, this.depth,
      this.widthSegments, this.heightSegments, this.depthSegments);
    const material = this.getMaterial();
    const mesh = new THREE.Mesh(geometry, material);
    this.applyShadowProps(mesh);
    return mesh;
  }

}
