import {Input} from '@angular/core';
import * as THREE from 'three';
import {AbstractObject3D} from '../abstract-object-3d';

export abstract class AbstractConnector<T extends THREE.Object3D> extends AbstractObject3D<T> {

  @Input()
  source: AbstractObject3D<THREE.Object3D>;

  @Input()
  target: AbstractObject3D<THREE.Object3D>;

  constructor() {
    super();
    console.log('AbstractConnector.constructor');
  }

  protected newObject3DInstance(): T {
    console.log('AbstractConnector.newObject3DInstance');
    const mesh = this.createConnectorObject();
    this.watchObjects();
    return mesh;
  }

  private watchObjects() {
    this.source.render.subscribe(item => {
      this.updateLineGeometry();
    });

    this.target.render.subscribe(item => {
      this.updateLineGeometry();
    });
  }

  protected getLineGeometry(): THREE.Geometry {
    const geo = new THREE.Geometry();
    if (!this.source || !this.target) {
      throw new Error('AbstractConnector: source or target inputs are missing!');
    }
    geo.vertices.push(this.source.getObject().position);
    geo.vertices.push(this.target.getObject().position);
    return geo;
  }


  /**
   * Create line mesh
   */
  abstract createConnectorObject(): T;

  /**
   * If at least one line end (source or target object)  changed, then line geoetry should be updated as well
   * // TODO: Calculate only when source/target positions were changed
   */
  abstract updateLineGeometry(): void;

}
