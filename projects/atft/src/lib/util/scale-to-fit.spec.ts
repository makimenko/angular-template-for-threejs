import * as THREE from 'three';
import {fixCenter} from './fix-center';
import {scaleToFit} from './scale-to-fit';

describe('utils', () => {
  describe('scaleToFit', () => {

    it('simple', () => {
      const geometry = new THREE.BoxGeometry(10, 20, 30);
      const obj = new THREE.Mesh(geometry);

      const max = new THREE.Vector3(20, 10, 30);
      scaleToFit(obj, max);

      expect(obj.scale.x).toEqual(1);
      expect(obj.scale.y).toEqual(0.5);
      expect(obj.scale.z).toEqual(1);
    });

  });
});
