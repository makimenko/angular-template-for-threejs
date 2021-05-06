import * as THREE from 'three';
import {calculateSize} from './calculate-size';

export function scaleToFit(group: THREE.Object3D, max: THREE.Vector3): void {
  const box = calculateSize(group);

  const scaleX = max.x / box.x;
  const scaleY = max.y / box.y;
  const scaleZ = max.z / box.z;

  group.scale.set(
    (scaleX < 1 ? scaleX : 1),
    (scaleY < 1 ? scaleY : 1),
    (scaleZ < 1 ? scaleZ : 1)
  );

}
