import * as THREE from 'three';

export function fixCenter(group: THREE.Object3D) {
  const box = new THREE.Box3().setFromObject(group);
  // console.log('box', box);
  group.translateX(-((box.max.x - box.min.x) / 2) - box.min.x);
  group.translateY(-((box.max.y - box.min.y) / 2) - box.min.y);
  group.translateZ(-((box.max.z - box.min.z) / 2) - box.min.z);
}
