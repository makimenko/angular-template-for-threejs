import {Injectable} from '@angular/core';
import {SceneComponent} from '../object/scene.component';
import {AbstractCamera} from '../camera/abstract-camera';
import * as THREE from 'three';
import {StatsService} from '../stats/stats.service';
import {EffectComposerComponent} from '../effect';


@Injectable()
export class RendererService {

  private init = false;
  private scene!: SceneComponent;
  private camera!: AbstractCamera<any>;
  private webGlRenderer!: THREE.WebGLRenderer;
  private aspect!: number;

  private composer?: EffectComposerComponent;

  constructor(
    private statsService: StatsService,
    // TODO: private bloom: BloomService
  ) {

  }

  public setScene(scene: SceneComponent) {
    this.scene = scene;
  }

  public setCamera(camera: AbstractCamera<any>) {
    this.camera = camera;
    this.camera.updateAspectRatio(this.aspect);
  }

  public render() {
    // TODO: this.bloomInit();
    if (this.init && this.scene && this.scene.getObject() && this.camera && this.camera.camera) {
      // TODO: this.bloom.render();
      // console.log('render');
      if (this.composer) {
        this.composer.render();
        if (!this.composer.renderToScreen) {
          this.webGlRenderer.render(this.scene.getObject(), this.camera.camera);
        }
      } else {
        this.webGlRenderer.render(this.scene.getObject(), this.camera.camera);
      }
      this.statsService.update();
    }
  }

  public initialize(canvas: HTMLCanvasElement, preserveDrawingBuffer : boolean) {
    // console.log('RendererComponent.initialize');
    this.webGlRenderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: preserveDrawingBuffer
    });
    this.webGlRenderer.setPixelRatio(window.devicePixelRatio);
    this.webGlRenderer.setSize(canvas.clientWidth, canvas.clientHeight, true);

    // this.scene.background = this.renderTarget.texture;

    // TODO: props
    this.webGlRenderer.shadowMap.enabled = false;
    this.webGlRenderer.shadowMap.autoUpdate = false;
    this.webGlRenderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.webGlRenderer.setClearColor(0x000000, 0);
    this.webGlRenderer.autoClear = true;
    canvas.style.zIndex = '2';

    // ------------------------------ END

    this.updateChildCamerasAspectRatio(canvas);
    this.init = true;
    this.render();
  }

  /*
  protected bloomInit() {
    if (!this.bloom.initialized && this.scene && this.scene.getObject() && this.camera && this.camera.camera) {
      this.bloom.init(this.webGlRenderer, this.scene.getObject(), this.camera.camera);
    }
  }
  */

  public resize(canvas: HTMLCanvasElement, size: string) {
    canvas.style.width = size;
    canvas.style.height = size;
    canvas.style.border = 'none';
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    this.webGlRenderer.setSize(width, height, true);

    this.updateChildCamerasAspectRatio(canvas);
    this.render();
  }

  private updateAspectRatio(canvas: HTMLCanvasElement): void  {
    const height = canvas.clientHeight;
    if (height === 0) {
      return;
    }
    this.aspect = canvas.clientWidth / canvas.clientHeight;
  }

  private updateChildCamerasAspectRatio(canvas: HTMLCanvasElement) {
    this.updateAspectRatio(canvas);
    if (this.camera) {
      this.camera.updateAspectRatio(this.aspect);
    }
  }

  public getScene() {
    return this.scene;
  }

  public getCamera() {
    return this.camera;
  }

  public getWebGlRenderer() {
    return this.webGlRenderer;
  }

  public setComposer(composer: EffectComposerComponent | undefined) {
    this.composer = composer;
  }


}
