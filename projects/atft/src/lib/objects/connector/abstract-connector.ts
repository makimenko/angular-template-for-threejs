import {Input} from '@angular/core';
import * as THREE from 'three';
import {AbstractObject3D} from '../abstract-object-3d';

export abstract class AbstractConnector extends AbstractObject3D<THREE.Mesh> {

  @Input()
  source: AbstractObject3D<THREE.Object3D>;

  @Input()
  target: AbstractObject3D<THREE.Object3D>;

  constructor() {
    super();
    console.log('AbstractConnector.constructor');
  }

  protected newObject3DInstance(): THREE.Mesh {
    console.log('AbstractConnector.newObject3DInstance');
    const mesh = this.createConnectorMesh();
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

  /**
   * Create line mesh
   */
  abstract createConnectorMesh(): THREE.Mesh;

  /**
   * If at least one line end (source or target object)  changed, then line geoetry should be updated as well
   * // TODO: Calculate only when source/target positions were changed
   */
  abstract updateLineGeometry(): void;

}
