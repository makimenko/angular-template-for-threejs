import {Component, Input, OnChanges, Optional, SimpleChanges, SkipSelf} from '@angular/core';
import * as THREE from 'three';
import {provideParent} from '../../util';
import {AbstractMesh} from './abstract-mesh-3d';

@Component({
  selector: 'atft-plane-mesh',
  providers: [provideParent(PlaneMeshComponent)],
  template: '<ng-content></ng-content>'
})
export class PlaneMeshComponent extends AbstractMesh implements OnChanges {

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


  protected newObject3DInstance(): THREE.Mesh {
    const geometry = new THREE.PlaneBufferGeometry(this.width, this.height, this.widthSegments, this.heightSegments);
    const material = this.getMaterial();
    const mesh = new THREE.Mesh(geometry, material);
    this.applyShadowProps(mesh);
    return mesh;
  }


  public ngOnChanges(changes: SimpleChanges) {
    // console.log('AbstractObject3D.ngOnChanges', this.name);
    if (!this.object) {
      return;
    }
    super.ngOnChanges(changes);

    let modified = false;

    if (['width', 'height', 'widthSegments', 'heightSegments'].some(propName => propName in changes)) {
      if (this.getObject() instanceof THREE.Mesh) {
        const mesh: THREE.Mesh = this.getObject();

        if (mesh.geometry instanceof THREE.PlaneBufferGeometry) {
          const currentGeometry: THREE.PlaneBufferGeometry = mesh.geometry;
          const newGeometry = new THREE.PlaneBufferGeometry(this.width, this.height, this.widthSegments, this.heightSegments);
          currentGeometry.attributes = newGeometry.attributes;
        }
      }
      modified = true;
    }

    if (modified) {
      this.changed.emit();
      this.rendererService.render();
    }

  }

}
