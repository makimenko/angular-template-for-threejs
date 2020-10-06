import { Component, Input, Optional, SkipSelf } from '@angular/core';
import * as THREE from 'three';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { RendererService } from '../../renderer/renderer.service';
import { provideParent } from '../../util';
import { AbstractObject3D } from '../abstract-object-3d';
import { AbstractModelLoader } from './abstract-model-loader';

/**
 * Component for employing THREE.OBJLoader to load [Wavefront *.obj files][1].
 *
 * [1]: https://en.wikipedia.org/wiki/Wavefront_.obj_file
 */
@Component({
  selector: 'atft-obj-loader',
  providers: [provideParent(ObjLoaderComponent)],
  template: '<ng-content></ng-content>'
})
export class ObjLoaderComponent extends AbstractModelLoader {

  private loader = new OBJLoader();
  private mtlLoader = new MTLLoader();

  @Input()
  material: string;

  /**
   * Path relative to which resources and textures within the loaded obj file are loaded.
   * @deprecated Rather use resourcePath
   */
  @Input()
  public set texturePath(newTexturePath: string) {
    this.resourcePath = newTexturePath;
  }

  /**
   * Path relative to which resources and textures within the loaded obj file are loaded.
   */
  @Input()
  resourcePath: string;

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>
  ) {
    super(rendererService, parent);
  }

  protected async loadLazyObject() {
    // Preloading step for the material
    const preloadingStep = new Promise<void>((resolve, reject) => {
      if (this.material === undefined) {
        // No preloading necessary
        resolve();
      } else {
        // TODO: If typings of mtlLoader are included in the Three.js NPM
        // package, remove this 'any' cast.
        (this.mtlLoader as any).setResourcePath(this.resourcePath);

        this.mtlLoader.load(this.material, materialCreator => {
          materialCreator.preload();
          this.loader.setMaterials(materialCreator);
          resolve();
        }, undefined, reject);
      }
    });

    // Await preloading and load final model
    return preloadingStep.then(() => {
      return new Promise<THREE.Object3D>((resolve, reject) => {
        this.loader.load(this.model, model => {
          resolve(model);
        }, undefined, reject);
      });
    });
  }
}
