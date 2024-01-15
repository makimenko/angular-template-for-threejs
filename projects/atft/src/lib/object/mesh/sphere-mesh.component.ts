import { Component, Input, Optional, SkipSelf } from '@angular/core';
import * as THREE from 'three';
import { RendererService } from '../../renderer/renderer.service';
import { provideParent } from '../../util';
import { AbstractObject3D } from '../abstract-object-3d';
import { AbstractMesh } from './abstract-mesh-3d';

@Component({
  selector: 'atft-sphere-mesh',
  providers: [provideParent(SphereMeshComponent)],
  template: '<ng-content></ng-content>'
})
export class SphereMeshComponent extends AbstractMesh {

  @Input() radius!: number;
  @Input() widthSegments!: number;
  @Input() heightSegments!: number;

  constructor(
    protected override rendererService: RendererService,
    @SkipSelf() @Optional() protected override parent: AbstractObject3D<any>
  ) {
    super(rendererService, parent);
  }

  protected newObject3DInstance(): THREE.Mesh {
    // console.log('SphereMeshComponent.newObject3DInstance');
    const geometry = new THREE.SphereGeometry(this.radius, this.widthSegments, this.heightSegments);
    const material = this.getMaterial();
    const mesh = new THREE.Mesh(geometry, material);
    this.applyShadowProps(mesh);
    return mesh;
  }

}
