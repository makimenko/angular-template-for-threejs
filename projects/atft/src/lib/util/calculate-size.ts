import * as THREE from 'three';

export function calculateSize(group: THREE.Object3D): THREE.Vector3 {
  const box = new THREE.Box3().setFromObject(group);
  return new THREE.Vector3(
    box.max.x - box.min.x,
    box.max.y - box.min.y,
    box.max.z - box.min.z
  );
}
