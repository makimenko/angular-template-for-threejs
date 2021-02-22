import { Component, Input, Optional, SkipSelf } from '@angular/core';

import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
import { RendererService } from '../../renderer/renderer.service';
import { appliedColor, appliedMaterial, provideParent } from '../../util';
import { fixCenter } from '../../util/fix-center';
import { scaleToFit } from '../../util/scale-to-fit';
import { AbstractObject3D } from '../abstract-object-3d';
import { AbstractModelLoader } from './abstract-model-loader';

@Component({
  selector: 'atft-svg-loader',
  providers: [provideParent(SVGLoaderComponent)],
  template: '<ng-content></ng-content>'
})
export class SVGLoaderComponent extends AbstractModelLoader {

  @Input()
  get overrideMaterialColor(): number {
    return this._overrideMaterialColor;
  }

  set overrideMaterialColor(value: number) {
    this._overrideMaterialColor = value;
    this.startLoading();
  }

  private _overrideMaterialColor: number = undefined;


  @Input()
  material = 'basic';

  @Input()
  depthWrite = true;

  @Input()
  maxX: number;

  @Input()
  maxY: number;

  @Input()
  centered = true;

  private loader = new SVGLoader();

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>
  ) {
    super(rendererService, parent);
  }

  protected async loadLazyObject() {
    // console.log('ObjectLoaderComponent.loadLazyObject');
    return new Promise<THREE.Object3D>((resolve, reject) => {
      this.loader.load(this.model, data => {
          const paths = data.paths;
          const group = new THREE.Group();

          for (let i = 0; i < paths.length; i++) {
            // NOTE: It seems that ShapePath does not includes typed color, cast to any as workaround
            const path: any = paths[i];
            const color = (this._overrideMaterialColor ? appliedColor(this._overrideMaterialColor) : path.color);
            const material = appliedMaterial(color, this.material, this.depthWrite);
            const shapes = path.toShapes(false, false);

            for (let j = 0; j < shapes.length; j++) {
              const shape = shapes[j];
              const geometry = new THREE.ShapeBufferGeometry(shape);
              const mesh = new THREE.Mesh(geometry, material);
              group.add(mesh);
            }
          }

          if (this.maxX || this.maxY) {
            scaleToFit(group, new THREE.Vector3(this.maxX, this.maxY, 0));
          }
          if (this.centered) {
            fixCenter(group);
          }

          resolve(group);
        },
        undefined,
        reject);
    });
  }


}
