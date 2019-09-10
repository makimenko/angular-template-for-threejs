import {Component, forwardRef, Input} from '@angular/core';
import {AbstractObject3D} from '../abstract-object-3d';
import {AbstractModelLoader} from './abstract-model-loader';
import {SVGLoader} from 'three/examples/jsm/loaders/SVGLoader';

import * as THREE from 'three';
import {appliedColor, appliedMaterial} from '../../utils';

interface Boundaries {
  sizeX: number;
  sizeY: number;
}

@Component({
  selector: 'atft-svg-loader',
  providers: [{provide: AbstractObject3D, useExisting: forwardRef(() => SVGLoaderComponent)}],
  template: '<ng-content></ng-content>'
})
export class SVGLoaderComponent extends AbstractModelLoader {
  @Input()
  overrideMaterialColor: number = undefined;

  @Input()
  material = 'basic';

  @Input()
  depthWrite = false;

  @Input()
  maxX: number;

  @Input()
  maxY: number;

  @Input()
  centered = true;

  private loader = new SVGLoader();

  protected async loadLazyObject() {
    // console.log('ObjectLoaderComponent.loadLazyObject');
    return new Promise<THREE.Object3D>((resolve, reject) => {
      this.loader.load(this.model, data => {
          const paths = data.paths;
          const group = new THREE.Group();

          for (let i = 0; i < paths.length; i++) {
            // NOTE: It seems that ShapePath does not includes typed color, cast to any as workaround
            const path: any = paths[i];
            const color = (this.overrideMaterialColor ? appliedColor(this.overrideMaterialColor) : path.color);
            const material = appliedMaterial(color, this.material, this.depthWrite);
            const shapes = path.toShapes(true, {});

            for (let j = 0; j < shapes.length; j++) {
              const shape = shapes[j];
              const geometry = new THREE.ShapeBufferGeometry(shape);
              const mesh = new THREE.Mesh(geometry, material);
              group.add(mesh);
            }
          }

          if (this.maxX || this.maxY) {
            this.resize(group);
          }
          if (this.centered) {
            this.fixCenter(group);
          }

          resolve(group);
        },
        undefined,
        reject);
    });
  }

  private getBoundaries(group: THREE.Object3D): Boundaries {
    const box = new THREE.Box3().setFromObject(group);
    return {
      sizeX: box.max.x - box.min.x,
      sizeY: box.max.y - box.min.y
    };
  }

  private resize(group: THREE.Object3D) {
    const box = this.getBoundaries(group);
    const scaleX = this.maxX / box.sizeX;
    const scaleY = this.maxY / box.sizeY;
    group.scale.set((scaleX < 1 ? scaleX : 1), (scaleY < 1 ? scaleY : 1), 1);
  }

  private fixCenter(group: THREE.Object3D) {
    const box = this.getBoundaries(group);
    group.translateX(-box.sizeX / 2);
    group.translateY(-box.sizeY / 2);
  }


}
