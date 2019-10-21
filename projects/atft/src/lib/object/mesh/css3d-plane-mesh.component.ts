import {Component, forwardRef, Input} from '@angular/core';
import * as THREE from 'three';
import {AbstractMesh} from './abstract-mesh-3d';
import {AbstractObject3D} from '../abstract-object-3d';
import {RendererService} from '../../renderer/renderer.service';
import {appliedMaterial, calculateSize} from '../../util';
import {CSS3DObject} from 'three/examples/jsm/renderers/CSS3DRenderer';


@Component({
  selector: 'atft-css3d-plane-mesh',
  providers: [{provide: AbstractObject3D, useExisting: forwardRef(() => Css3dPlaneMeshComponent)}],
  template: '<ng-content></ng-content>'
})
export class Css3dPlaneMeshComponent extends AbstractMesh {

  /**
   * Width; that is, the length of the edges parallel to the X axis. Optional; defaults to 1.
   */
  @Input()
  width = 1.0;

  /**
   * Height; that is, the length of the edges parallel to the Y axis. Optional; defaults to 1.
   */
  @Input()
  height = 1.0;

  /**
   * Number of segmented rectangular faces along the width of the sides. Optional; defaults to 1.
   */
  @Input()
  widthSegments = 1;

  /**
   * Number of segmented rectangular faces along the height of the sides. Optional; defaults to 1.
   */
  @Input()
  heightSegments = 1;

  resolution = new THREE.Vector3(800, 600, 0);

  constructor(
    protected rendererService: RendererService
  ) {
    super(rendererService);
  }

  protected newObject3DInstance(): THREE.Mesh {
    const geometry = new THREE.PlaneBufferGeometry(this.width, this.height, this.widthSegments, this.heightSegments);
    const material = this.getMaterial();
    const mesh = new THREE.Mesh(geometry, material);
    this.applyShadowProps(mesh);

    const video = this.sampleCss3d();
    const meshSize = calculateSize(mesh);
    const videoSize = calculateSize(video);

    console.log('meshSize', meshSize);
    console.log('videoSize', videoSize);

    this.scaleCss3d(video, meshSize);

    console.log('video.scale', video.scale);

    mesh.add(video);
    return mesh;
  }


  private scaleCss3d(group: CSS3DObject, max: THREE.Vector3) {
    const box = this.resolution;

    const scaleX = max.x / box.x;
    const scaleY = max.y / box.y;
    const scaleZ = max.z / box.z;

    group.scale.set(
      (scaleX < 1 ? scaleX : 1),
      (scaleY < 1 ? scaleY : 1),
      (scaleZ < 1 ? scaleZ : 1)
    );

  }


  private sampleCss3d(): CSS3DObject {
    const div = document.createElement('div');
    div.style.width = this.resolution.x + 'px';
    div.style.height = this.resolution.y + 'px';
    div.style.backgroundColor = '#000';
    const iframe = document.createElement('iframe');
    iframe.style.width = this.resolution.x + 'px';
    iframe.style.height = this.resolution.y + 'px';
    iframe.style.border = '0px';
    iframe.src = 'https://www.youtube.com/embed/HSqxlbf3Z7M';
    div.appendChild(iframe);
    const object = new CSS3DObject(div);
    return object;
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
}
