import { Component, Input, Optional, SkipSelf } from '@angular/core';
import * as THREE from 'three';
import { RendererService } from '../../renderer/renderer.service';
import { provideParent } from '../../util';
import { AbstractObject3D } from '../abstract-object-3d';
import { AbstractMesh } from './abstract-mesh-3d';

@Component({
  selector: 'atft-torus-mesh',
  providers: [provideParent(TorusMeshComponent)],
  template: '<ng-content></ng-content>'
})
export class TorusMeshComponent extends AbstractMesh {

  /**
   * Radius of the torus, from the center of the torus to the center of the tube
   */
  @Input() radius = 0.4;

  /**
   * Radius of the tube.
   */
  @Input()
  tube: number;

  @Input()
  radialSegments = 8;

  @Input()
  tubularSegments = 6;

  @Input()
  arc: number = Math.PI * 2;


  protected newObject3DInstance(): THREE.Mesh {
    this.radius *= 1;
    this.tube *= 1;
    this.radialSegments *= 1;
    this.tubularSegments *= 1;

    const geometry = new THREE.TorusGeometry(this.radius, this.tube,
      this.radialSegments, this.tubularSegments);
    const material = this.getMaterial();
    const mesh = new THREE.Mesh(geometry, material);
    this.applyShadowProps(mesh);
    return mesh;
  }

}
