import {Directive, Input} from '@angular/core';
import {AbstractLazyObject3D} from '../abstract-lazy-object-3d';

/**
 * Helper parentScene class for model loader.
 *
 * @see ObjLoaderComponent
 */
@Directive()
export abstract class AbstractModelLoader extends AbstractLazyObject3D {

  protected _model: string;

  /**
   * The model data source (usually a URI).
   * Settings this property only hides the previous model upon successful
   * loading of the new one. This especially means that if the new data source
   * is invalid, the old model will *not* be removed from the scene.
   */
  @Input()
  public set model(newModelUrl: string) {
    this._model = newModelUrl;
    if (this.object && this._model !== newModelUrl) {
      super.startLoading();
    }
  }

  /**
   * The current model data source (usually a URI).
   */
  public get model() {
    return this._model;
  }

}
