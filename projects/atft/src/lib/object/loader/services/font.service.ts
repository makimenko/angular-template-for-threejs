import {Injectable} from '@angular/core';
import * as THREE from 'three';
import {AbstractCacheService} from './abstract-cache.service';

@Injectable()
export class FontService extends AbstractCacheService<THREE.Font, any> {

  protected getValue(key: string): Promise<THREE.Font> {
    console.log('FontService.getValue');
    return new Promise<THREE.Font>(resolve => {
      const loader = new THREE.FontLoader();
      loader.load(key, resolve);
    });
  }

}
