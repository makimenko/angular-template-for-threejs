import {Component, Input, OnChanges, Optional, SimpleChanges, SkipSelf} from '@angular/core';
import * as THREE from 'three';
import {RendererService} from '../../renderer/renderer.service';
import {provideParent} from '../../util';
import {AbstractObject3D} from '../abstract-object-3d';
import {AbstractMesh} from './abstract-mesh-3d';

@Component({
  selector: 'atft-frame-mesh',
  providers: [provideParent(FrameMeshComponent)],
  template: '<ng-content></ng-content>'
})
export class FrameMeshComponent extends AbstractMesh implements OnChanges {

  @Input()
  thickness = 2;

  @Input()
  sizeX = 20;

  @Input()
  sizeY = 20;

  protected getGeometry(): THREE.ShapeBufferGeometry {
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
    return geometry;
  }

  protected newObject3DInstance(): THREE.Mesh {

    const material = this.getMaterial();
    const mesh = new THREE.Mesh(this.getGeometry(), material);

    this.applyShadowProps(mesh);
    return mesh;
  }


  public ngOnChanges(changes: SimpleChanges) {
    // console.log('FrameMeshComponent.ngOnChanges', this.name);
    if (!this.object) {
      return;
    }
    super.ngOnChanges(changes);

    let modified = false;

    if (['sizeX', 'sizeY', 'thickness'].some(propName => propName in changes)) {
      if (this.getObject() instanceof THREE.Mesh) {
        const mesh: THREE.Mesh = this.getObject();

        if (mesh.geometry instanceof THREE.ShapeBufferGeometry) {
          const currentGeometry: THREE.ShapeBufferGeometry = mesh.geometry;
          const newGeometry = this.getGeometry();
          currentGeometry.attributes = newGeometry.attributes;
        }
        modified = true;
      }

    }

    if (modified) {
      this.changed.emit();
      this.rendererService.render();
    }

  }

}
