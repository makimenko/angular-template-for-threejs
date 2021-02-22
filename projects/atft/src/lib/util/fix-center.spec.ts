import * as THREE from 'three';
import {fixCenter} from './fix-center';

describe('utils', () => {
  describe('fixCenter', () => {

    it('simple', () => {
      const geometry = new THREE.BoxGeometry(4, 1, 2);
      const obj = new THREE.Mesh(geometry);
      fixCenter(obj);

      expect(obj.position.x).toEqual(0);
      expect(obj.position.y).toEqual(0);
      expect(obj.position.z).toEqual(0);
    });

    it('group', () => {
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const group = new THREE.Group();
      const obj = new THREE.Mesh(geometry);
      obj.position.x = 2;
      obj.position.y = -2;
      obj.position.z = 0;
      group.add(obj);
      fixCenter(group);

      expect(obj.position.x).toEqual(2);
      expect(obj.position.y).toEqual(-2);
      expect(obj.position.z).toEqual(0);
    });


  });
});
