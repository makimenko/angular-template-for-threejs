import {calculateSize} from './calculate-size';
import * as THREE from 'three';

describe('utils', () => {
  describe('calculateSize', () => {

    it('scaled box', () => {
      const geometry = new THREE.BoxGeometry(2, 3, 4);
      const obj = new THREE.Mesh(geometry);
      obj.scale.x = 2;
      obj.scale.y = 3;
      obj.scale.z = 4;

      const vector = calculateSize(obj);
      expect(vector.x).toEqual(2 * 2);
      expect(vector.y).toEqual(3 * 3);
      expect(vector.z).toEqual(4 * 4);
    });


  });
});
