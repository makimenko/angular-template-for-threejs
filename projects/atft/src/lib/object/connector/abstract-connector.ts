import {Directive, Input, OnDestroy} from '@angular/core';
import * as THREE from 'three';
import {AbstractObject3D} from '../abstract-object-3d';
import {Subscription} from 'rxjs';

@Directive()
export abstract class AbstractConnector<T extends THREE.Object3D> extends AbstractObject3D<THREE.Object3D> implements OnDestroy {

  @Input()
  source: AbstractObject3D<THREE.Object3D>;

  @Input()
  target: AbstractObject3D<THREE.Object3D>;

  protected sourceSub: Subscription;
  protected targetSub: Subscription;

  protected newObject3DInstance(): THREE.Object3D {
    const line = this.createLineMesh();
    if (this.source && this.target) {
      this.watchObjects();
    }
    return line;
  }

  private watchObjects() {
    this.sourceSub = this.source.changed.subscribe(item => {
      this.updateLineGeometry();
    });

    this.targetSub = this.target.changed.subscribe(item => {
      this.updateLineGeometry();
    });
  }

  protected getLineGeometry(): THREE.BufferGeometry {
    if (!this.source || !this.target) {
      throw new Error('AbstractConnector: source or target inputs are missing!');
    }

    const source = this.source.getObject().position;
    const target = this.target.getObject().position;

    const points = [];
    points.push(new THREE.Vector3(source.x, source.y, source.z));
    points.push(new THREE.Vector3(target.x, target.y, target.z));

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return geometry;
  }

  public ngOnDestroy() {
    super.ngOnDestroy();

    this.sourceSub?.unsubscribe();
    this.targetSub?.unsubscribe();
  }


  /**
   * Create line mesh
   */
  abstract createLineMesh(): T;

  /**
   * If at least one line end (source or target object)  changed, then line geoetry should be updated as well
   * // TODO: Calculate only when source/target positions were changed
   */
  abstract updateLineGeometry(): void;

}
