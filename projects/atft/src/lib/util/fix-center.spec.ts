import * as THREE from 'three';
import {fixCenter} from './fix-center';

describe('utils', () => {
  describe('fixCenter', () => {

    it('simple', () => {
      const geometry = new THREE.BoxGeometry(4, 1, 2);
      const obj = new THREE.Mesh(geometry);
      fixCenter(obj);

      expect(obj.position.x).toEqual(-2);
      expect(obj.position.y).toEqual(-0.5);
      expect(obj.position.z).toEqual(-1);
    });


  });
});
