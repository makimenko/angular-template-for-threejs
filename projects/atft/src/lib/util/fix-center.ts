import * as THREE from 'three';
import {calculateSize} from './calculate-size';

export function fixCenter(group: THREE.Object3D) {
  const box = calculateSize(group);
  group.translateX(-box.x / 2);
  group.translateY(-box.y / 2);
  group.translateZ(-box.z / 2);
}
