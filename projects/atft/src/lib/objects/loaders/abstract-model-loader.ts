import {Input, OnDestroy} from '@angular/core';

import {AbstractObject3D} from '../abstract-object-3d';

import * as THREE from 'three';

/**
 * Helper parent class for model loader.
 *
 * @see ObjLoaderComponent
 */
export abstract class AbstractModelLoader extends AbstractObject3D<THREE.Object3D> implements OnDestroy {

  private _model: string;

  /**
   * Flag to signal whether the parent class instance AbstractObject3D called the
   * overwritten method {@link AbstractModelLoader#afterInit} yet.
   *
   * Unless that method was called, no methods and properties of {@link AbstractObject3D}
   * may be safely accessed, especially {@link AbstractObject3D#addChild} and
   * {@link AbstractObject3D.renderer}.
   */
  private parentInitialized = false;

  protected currentLoadedModelObject: THREE.Object3D | undefined;

  /**
   * Load the model object.
   *
   * Some loaders (e.g. ColladaLoader) also provide other model information
   * upon loading besides the "raw" model object/scene. In these cases
   * implementing child classes are indeed supposed to return the "raw" model
   * object.
   * The data source (usually a URI, although child classes are free to implement
   * other means as well) from which the model shall be loaded can be obtained by
   * {@link AbstractModelLoader.model}.
   */
  protected abstract async loadModelObject(): Promise<THREE.Object3D>;

  /**
   * The model data source (usually a URI).
   * Settings this property only hides the previous model upon successful
   * loading of the new one. This especially means that if the new data source
   * is invalid, the old model will *not* be removed from the scene.
   */
  @Input()
  public set model(newModelUrl: string) {
    this._model = newModelUrl;

    // Delay model loading until the parent has been initialized,
    // so that we can call addChild().
    if (!this.parentInitialized) {
      return;
    }

    this.loadModelObject().then(newModel => {
      if (this.currentLoadedModelObject) {
        this.removeChild(this.currentLoadedModelObject);
      }

      this.currentLoadedModelObject = newModel;
      this.addChild(newModel);

      this.render.emit();
    }).catch(err => {
      console.error(err);
    });
  }

  /**
   * The current model data source (usually a URI).
   */
  public get model() {
    return this._model;
  }

  protected afterInit() {
    super.afterInit();
    this.parentInitialized = true;

    // Trigger model acquisition now that the parent has been initialized.
    this.model = this.model;
  }

  ngOnDestroy(): void {
    if (this.currentLoadedModelObject) {
      this.removeChild(this.currentLoadedModelObject);
    }
  }

  protected newObject3DInstance(): THREE.Object3D {
    return new THREE.Object3D();
  }
}
