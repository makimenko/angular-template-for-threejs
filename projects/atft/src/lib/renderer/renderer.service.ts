import {Injectable, OnDestroy} from '@angular/core';
import {SceneComponent} from '../object/scene.component';
import {AbstractCamera} from '../camera/abstract-camera';
import * as THREE from 'three';
import {CSS3DRenderer} from 'three/examples/jsm/renderers/CSS3DRenderer';
import {StatsService} from './stats.service';

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
  private enableWebGl: boolean;
  private enableCss3d: boolean;
  private webGlRenderer: THREE.WebGLRenderer;
  // TODO:
  private css3dRenderer: CSS3DRenderer;

  private aspect: number;


  constructor(
    private statsService: StatsService
  ) {

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
      if (this.enableWebGl) {
        this.webGlRenderer.render(this.scene.getObject(), this.camera.camera);
      }
      if (this.enableCss3d) {
        this.css3dRenderer.render(this.scene.getObject(), this.camera.camera);
      }
      this.statsService.update();
    }
  }

  public initialize(canvas: HTMLCanvasElement, enableWebGl: boolean, enableCss3d: boolean) {
    // console.log('RendererComponent.initialize');

    this.enableWebGl = enableWebGl;
    this.enableCss3d = enableCss3d;

    if (enableWebGl) {
      // TODO: Multiple renderers
      this.webGlRenderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true
      });
      this.webGlRenderer.setPixelRatio(window.devicePixelRatio);
      this.webGlRenderer.setSize(canvas.clientWidth, canvas.clientHeight, true);

      // TODO: props
      this.webGlRenderer.shadowMap.enabled = false;
      this.webGlRenderer.shadowMap.autoUpdate = false;
      this.webGlRenderer.shadowMap.type = THREE.PCFSoftShadowMap;
      this.webGlRenderer.setClearColor(0x000000, 0);
      this.webGlRenderer.autoClear = true;
      canvas.style.zIndex = '2';
    }

    if (enableCss3d) {
      this.css3dRenderer = new CSS3DRenderer();
      this.css3dRenderer.setSize(window.innerWidth, window.innerHeight);
      this.css3dRenderer.domElement.style.position = 'absolute';
      this.css3dRenderer.domElement.style.top = '0';
      this.css3dRenderer.domElement.style.zIndex = '1';
      canvas.parentElement.appendChild(this.css3dRenderer.domElement);
    }
    // ------------------------------ END

    this.updateChildCamerasAspectRatio(canvas);
    this.init = true;
    this.render();
  }


  public resize(canvas: HTMLCanvasElement, size: string) {
    canvas.style.width = size;
    canvas.style.height = size;
    canvas.style.border = 'none';
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    this.webGlRenderer.setSize(width, height, true);
    this.css3dRenderer.setSize(width, height);
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
