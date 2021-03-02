import {Injectable} from '@angular/core';
import {ShapePath} from 'three';
import {AbstractCacheService} from './abstract-cache.service';
import {SVGLoader} from '../../../threejs-fork/SVGLoader';


@Injectable()
export class SvgLoaderService extends AbstractCacheService<ShapePath[]> {

  protected getValue(key: string): Promise<ShapePath[]> {
    // console.log('SvgLoaderService.getValue');
    return new Promise((resolve, reject) => {
      const loader = new SVGLoader();
      loader.load(key, data => {
          resolve(data.paths);
        },
        undefined,
        reject
      );
    });
  }

}
