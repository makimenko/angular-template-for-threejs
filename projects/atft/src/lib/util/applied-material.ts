import * as THREE from 'three';

export enum MaterialType {
  lamb = 'lamb',
  basic = 'basic',
  phong = 'phong',
  standard = 'standard',
}

/**
 * Creates material
 *
 * @param materialColor color
 * @param materialName material label as string
 * @param depthWrite enable depth write
 */
export function appliedMaterial(
  materialColor: string | number | THREE.Color,
  materialName?: string,
  depthWrite?: boolean,
  roughness?: number,
  metalness?: number,
  envMapIntensity?: number
): THREE.Material {

  const props = {
    color: (materialColor instanceof THREE.Color ? materialColor : new THREE.Color(materialColor)),
    side: THREE.DoubleSide,
    depthWrite: (depthWrite !== undefined ? depthWrite : true),
  };

  // console.log('appliedMaterial', materialName);
  if (materialName === 'lamb') {
    return new THREE.MeshLambertMaterial(props);
  } else if (materialName === 'basic') {
    return new THREE.MeshBasicMaterial(props);
  } else if (materialName === 'standard') {
    return new THREE.MeshStandardMaterial({...props, roughness, metalness, envMapIntensity});
  } else {
    return new THREE.MeshPhongMaterial(props);
  }

}


