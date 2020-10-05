import { Component, forwardRef, Input, Optional, SkipSelf } from '@angular/core';
import * as THREE from 'three';
import {AbstractMesh} from './abstract-mesh-3d';
import {AbstractObject3D} from '../abstract-object-3d';
import {RendererService} from '../../renderer/renderer.service';

@Component({
  selector: 'atft-sphere-mesh',
  providers: [{provide: AbstractObject3D, useExisting: forwardRef(() => SphereMeshComponent)}],
  template: '<ng-content></ng-content>'
})
export class SphereMeshComponent extends AbstractMesh {

  @Input() radius: number;
  @Input() widthSegments: number;
  @Input() hightSegments: number;

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent?: AbstractObject3D<any>
  ) {
    super(rendererService);
    console.log('parent', parent);
  }

  protected newObject3DInstance(): THREE.Mesh {
    // console.log('SphereMeshComponent.newObject3DInstance');
    const geometry = new THREE.SphereGeometry(this.radius, this.widthSegments, this.hightSegments);
    const material = this.getMaterial();
    const mesh = new THREE.Mesh(geometry, material);
    this.applyShadowProps(mesh);
    return mesh;
  }

}
