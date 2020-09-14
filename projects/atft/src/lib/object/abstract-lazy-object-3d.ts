import { OnDestroy, Directive } from '@angular/core';

import {AbstractObject3D} from './abstract-object-3d';

import * as THREE from 'three';

@Directive()
// tslint:disable-next-line:directive-class-suffix
export abstract class AbstractLazyObject3D extends AbstractObject3D<THREE.Object3D> implements OnDestroy {

  /**
   * Flag to signal whether the parent class instance AbstractObject3D called the
   * overwritten method {@link AbstractModelLoader#afterInit} yet.
   *
   * Unless that method was called, no methods and properties of {@link AbstractObject3D}
   * may be safely accessed, especially {@link AbstractObject3D#addChild} and
   * {@link AbstractObject3D.renderer}.
   */
  private parentInitialized = false;

  /**
   * This is reference to lazy loaded Object3D (async after init)
   */
  protected lazyObject: THREE.Object3D | undefined;

  /**
   * Abstract method for lazy loading
   *
   */
  protected abstract async loadLazyObject(): Promise<THREE.Object3D>;

  protected afterInit() {
    super.afterInit();
    this.parentInitialized = true;
    this.startLoading();
  }

  protected startLoading() {
    // console.log('AbstractLazyObject3D.startLoading');
    // Trigger model acquisition now that the parent has been initialized.
    this.loadLazyObject().then(obj => {
      // console.log('AbstractLazyObject3D loaded');
      // remove old if exists
      if (this.lazyObject) {
        super.removeChild(this.lazyObject);
      }

      // add lazy object to scene
      this.lazyObject = obj;
      super.addChild(obj);

      this.rendererService.render();
    }).catch(err => {
      console.error(err);
    });
  }

  ngOnDestroy(): void {
    if (this.lazyObject) {
      super.removeChild(this.lazyObject);
    }
  }

  protected newObject3DInstance(): THREE.Object3D {
    // Just empty object (holder of lazy object)
    return new THREE.Object3D();
  }

}
