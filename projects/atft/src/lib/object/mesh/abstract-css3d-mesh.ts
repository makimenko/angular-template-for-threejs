import { Input, Directive } from '@angular/core';
import * as THREE from 'three';
import {AbstractMesh} from './abstract-mesh-3d';
import {calculateSize} from '../../util';
import {CSS3DObject} from 'three/examples/jsm/renderers/CSS3DRenderer';

@Directive()
export abstract class AbstractCss3dMesh extends AbstractMesh {

  @Input() width = 1.0;
  @Input() height = 1.0;

  // 1280 / 720 = 1.777777778
  @Input() resolutionX = 1280;
  @Input() resolutionY = 720;

  private widthSegments = 1;
  private heightSegments = 1;

  protected newObject3DInstance(): THREE.Mesh {
    const geometry = new THREE.PlaneBufferGeometry(this.width, this.height, this.widthSegments, this.heightSegments);
    const material = this.getMaterial();
    const mesh = new THREE.Mesh(geometry, material);
    this.applyShadowProps(mesh);

    // Create and scale css3d object:
    const meshSize = calculateSize(mesh);
    const css3dObject = this.createCss3dObject();
    this.scaleCss3d(css3dObject, meshSize);

    // append to mesh:
    mesh.add(css3dObject);
    return mesh;
  }


  protected scaleCss3d(group: CSS3DObject, max: THREE.Vector3) {
    const box = new THREE.Vector3(this.resolutionX, this.resolutionY, 0);

    const scaleX = max.x / box.x;
    const scaleY = max.y / box.y;
    const scaleZ = max.z / box.z;

    group.scale.set(
      (scaleX < 1 ? scaleX : 1),
      (scaleY < 1 ? scaleY : 1),
      (scaleZ < 1 ? scaleZ : 1)
    );

  }

  protected getMaterial(): THREE.Material {
    // TODO: Renderer clear color
    const transparentMaterial = new THREE.MeshBasicMaterial({
      color: 0x000000,
      opacity: 0,
      side: THREE.DoubleSide
    });
    return transparentMaterial;
  }

  protected abstract createCss3dObject(): CSS3DObject;

}
