import {Injectable, OnDestroy} from '@angular/core';
import {SceneComponent} from '../object';
import {AbstractCamera} from '../camera/abstract-camera';
import * as THREE from 'three';
import {CSS3DRenderer} from 'three/examples/jsm/renderers/CSS3DRenderer';

/* TODO: Refactor to pair
interface RendererPair {
  scene: SceneComponent;
  camera: AbstractCamera<any>;
  webGlRenderer: THREE.Renderer;
  layers: Array<number>;
}
*/

@Injectable()
export class RendererService implements OnDestroy {
  private init = false;

  private scene: SceneComponent;
  private camera: AbstractCamera<any>;
  private webGlRenderer: THREE.WebGLRenderer;
  // TODO:
  private css3dRenderer: CSS3DRenderer;

  private aspect: number;


  constructor() {

  }

  ngOnDestroy() {

  }


  public setScene(scene: SceneComponent) {
    this.scene = scene;
  }

  public setCamera(camera: AbstractCamera<any>) {
    this.camera = camera;
    this.camera.updateAspectRatio(this.aspect);
  }

  public render() {
    if (this.init && this.scene && this.camera) {
      //  console.log('render');
      this.webGlRenderer.render(this.scene.getObject(), this.camera.camera);
    }
  }

  public initialize(canvas: HTMLCanvasElement) {
    // console.log('RendererComponent.initialize');

    // TODO: Multiple renderers
    this.webGlRenderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true
    });
    this.webGlRenderer.setPixelRatio(devicePixelRatio);
    this.webGlRenderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

    // TODO: props
    this.webGlRenderer.shadowMap.enabled = false;
    this.webGlRenderer.shadowMap.autoUpdate = false;
    this.webGlRenderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.webGlRenderer.setClearColor(0xffffff, 1);
    this.webGlRenderer.autoClear = true;

    this.updateChildCamerasAspectRatio(canvas);
    this.init = true;
    this.render();
  }


  public resize(canvas: HTMLCanvasElement, size: string) {
    canvas.style.width = size;
    canvas.style.height = size;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    this.webGlRenderer.setSize(width, height, true);
    this.updateChildCamerasAspectRatio(canvas);
    this.render();
  }

  private calculateAspectRatio(canvas: HTMLCanvasElement) {
    const height = canvas.clientHeight;
    if (height === 0) {
      return 0;
    }
    this.aspect = canvas.clientWidth / canvas.clientHeight;
  }

  private updateChildCamerasAspectRatio(canvas: HTMLCanvasElement) {
    this.calculateAspectRatio(canvas);
    if (this.camera) {
      this.camera.updateAspectRatio(this.aspect);
    }
  }

}
