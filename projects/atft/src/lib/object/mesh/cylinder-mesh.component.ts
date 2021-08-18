import {Component, Input, Optional, SkipSelf} from '@angular/core';
import * as THREE from 'three';
import {provideParent} from '../../util';
import {AbstractMesh} from './abstract-mesh-3d';
import {AbstractObject3D} from '../abstract-object-3d';
import {RendererService} from '../../renderer/renderer.service';

@Component({
  selector: 'atft-cylinder-mesh',
  providers: [provideParent(CylinderMeshComponent)],
  template: '<ng-content></ng-content>'
})
export class CylinderMeshComponent extends AbstractMesh {

  @Input()
  radiusTop = 1.0;
  @Input()
  radiusBottom = 1.0;
  @Input()
  height = 1.0;
  @Input()
  radialSegments = 8;
  @Input()
  heightSegments = 1;
  @Input()
  openEnded = false;
  @Input()
  thetaStart = 0.0;
  @Input()
  thetaLength = 2 * Math.PI;

  protected newObject3DInstance(): THREE.Mesh {
    // console.log('CylinderMeshComponent.newObject3DInstance');
    const geometry = new THREE.CylinderGeometry(this.radiusTop, this.radiusBottom, this.height, this.radialSegments, this.heightSegments,
      this.openEnded, this.thetaStart, this.thetaLength);
    const material = this.getMaterial();
    const mesh = new THREE.Mesh(geometry, material);
    this.applyShadowProps(mesh);
    return mesh;
  }

}
