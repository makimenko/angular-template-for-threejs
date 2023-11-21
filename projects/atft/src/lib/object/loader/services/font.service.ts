import {Injectable} from '@angular/core';
import {AbstractCacheService} from './abstract-cache.service';
import {Font, FontLoader} from 'three/examples/jsm/loaders/FontLoader.js';

@Injectable()
export class FontService extends AbstractCacheService<Font> {

  protected getValue(key: string): Promise<Font> {
    // console.log('FontService.getValue');
    return new Promise<Font>(resolve => {
      const loader = new FontLoader();
      loader.load(key, resolve);
    });
  }

}
