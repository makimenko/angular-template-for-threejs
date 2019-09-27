import {appliedMaterial} from './applied-material';
import * as THREE from 'three';

describe('utils', () => {
  describe('appliedMaterial', () => {

    it('default', () => {
      const material = appliedMaterial(0xff0000);
      expect(material.constructor).toBe(THREE.MeshPhongMaterial);
      expect(material.depthWrite).toBeTruthy();
    });

    it('basic', () => {
      const material = appliedMaterial(0xff0000, 'basic');
      expect(material.constructor).toBe(THREE.MeshBasicMaterial);
    });

    it('lambert', () => {
      const material = appliedMaterial(0xff0000, 'lamb', true);
      expect(material.constructor).toBe(THREE.MeshLambertMaterial);
      expect(material.depthWrite).toBeTruthy();
    });

    it('lambert depth', () => {
      const material = appliedMaterial(0xff0000, 'lamb', false);
      expect(material.constructor).toBe(THREE.MeshLambertMaterial);
      expect(material.depthWrite).toBeFalsy();
    });

    it('Color object', () => {
      const material = appliedMaterial(new THREE.Color(1, 0, 0));
      expect(material.constructor).toBe(THREE.MeshPhongMaterial);
    });


  });

});
