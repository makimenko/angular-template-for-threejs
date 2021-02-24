import {Injectable} from '@angular/core';
import * as THREE from 'three';
import {AbstractCacheService} from './abstract-cache.service';
import {SVGLoader} from 'three/examples/jsm/loaders/SVGLoader';
import {appliedColor, appliedMaterial, fixCenter, scaleToFit} from '../../../util';
import {Shape} from 'three/src/extras/core/Shape';

export interface SvgDetails {
  model: string;
  color: number;
  material: string;
  depthWrite: boolean;
  maxX: number;
  maxY: number;
  centered: boolean;
}

@Injectable()
export class SvgLoaderService extends AbstractCacheService<THREE.Object3D, SvgDetails> {

  protected getValue(key: string, details: SvgDetails): Promise<THREE.Object3D> {
    console.log('SvgLoaderService.getValue');
    return new Promise<THREE.Object3D>((resolve, reject) => {
      const loader = new SVGLoader();
      loader.load(details.model, data => {
          const paths = data.paths;
          const group = new THREE.Group();

          for (let i = 0; i < paths.length; i++) {
            // NOTE: It seems that ShapePath does not includes typed color, cast to any as workaround
            const path: any = paths[i];
            const color = (details.color ? appliedColor(details.color) : path.color);
            const material = appliedMaterial(color, details.material, details.depthWrite);
            const shapes: Shape[] = path.toShapes(false, false);

            for (let j = 0; j < shapes.length; j++) {
              const shape = shapes[j];
              const geometry = new THREE.ShapeBufferGeometry(shape);
              const mesh = new THREE.Mesh(geometry, material);
              group.add(mesh);
            }
          }

          if (details.maxX || details.maxY) {
            scaleToFit(group, new THREE.Vector3(details.maxX, details.maxY, 0));
          }
          if (details.centered) {
            fixCenter(group);
          }

          resolve(group);
        },
        undefined,
        reject);
    });
  }

}
