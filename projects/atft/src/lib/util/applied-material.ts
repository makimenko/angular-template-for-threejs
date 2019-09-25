import * as THREE from 'three';
import {appliedColor} from './applied-color';


/**
 * Creates material
 *
 * @param materialColor color
 * @param materialName material label as string
 * @param depthWrite enable depth write
 */
export function appliedMaterial(materialColor: number | THREE.Color, materialName?: string, depthWrite?: boolean): THREE.Material {

  const props = {
    color: (materialColor instanceof THREE.Color ? materialColor : appliedColor(materialColor)),
    side: THREE.DoubleSide,
    depthWrite: (depthWrite !== undefined ? depthWrite : true)
  };

  if (materialName === 'lamb') {
    return new THREE.MeshLambertMaterial(props);
  } else if (materialName === 'basic') {
    return new THREE.MeshBasicMaterial(props);
  } else {
    return new THREE.MeshPhongMaterial(props);
  }

}


