import {Component, ComponentFactoryResolver, forwardRef, Input, ViewContainerRef} from '@angular/core';
import * as THREE from 'three';
import {AbstractMesh} from './abstract-mesh-3d';
import {AbstractObject3D} from '../abstract-object-3d';
import {RendererService} from '../../renderer/renderer.service';
import {calculateSize} from '../../util';
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
  compRef: any;

  constructor(
    protected rendererService: RendererService,
    private resolver: ComponentFactoryResolver,
    private vcRef: ViewContainerRef
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
    div.id = 'myWrapper';


    const video = document.createElement('video');
    video.src = 'https://raw.githubusercontent.com/makimenko/files/master/angular-template-for-threejs/videos/ui/retro_futuristic_ui_720p.mp4';
    video.style.height = '100%';
    video.style.width = '100%';
    video.autoplay = true;
    video.loop = true;
    video.play();

    div.appendChild(video);

    const object = new CSS3DObject(div);
    object.scale.x = this.resolution.x;
    object.scale.y = this.resolution.y;
    object.scale.z = 1;
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
