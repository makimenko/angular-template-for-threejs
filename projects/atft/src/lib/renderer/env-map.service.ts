import {EventEmitter, Injectable} from '@angular/core';
import * as THREE from 'three';
import {WebGLRenderTarget} from 'three/src/renderers/WebGLRenderTarget';
import {Texture} from 'three/src/textures/Texture';
import {RendererService} from './renderer.service';


@Injectable()
export class EnvMapService {

  protected texture = 'assets/envmap/equirectangular.png';
  protected pngCubeRenderTarget: WebGLRenderTarget;
  protected pngBackground;
  public envMapLoaded = new EventEmitter<Texture>();

  constructor(
    protected rendererService: RendererService
  ) {
  }

  public load(envMapPath: string) {
    // console.log('EnvMapService.load');
    const pmremGenerator = new THREE.PMREMGenerator(this.rendererService.getWebGlRenderer());
    pmremGenerator.compileEquirectangularShader();

    var urls = [
      envMapPath + '/pos-x.png',
      envMapPath + '/neg-x.png',
      envMapPath + '/pos-y.png',
      envMapPath + '/neg-y.png',
      envMapPath + '/pos-z.png',
      envMapPath + '/neg-z.png'
    ];

    THREE.DefaultLoadingManager.onLoad = function () {
      pmremGenerator.dispose();
    };

    new THREE.CubeTextureLoader().load(urls, (texture) => {
      // texture.format = THREE.RGBFormat;
      texture.encoding = THREE.sRGBEncoding;
      this.pngCubeRenderTarget = pmremGenerator.fromEquirectangular(texture);
      // this.pngBackground = this.pngCubeRenderTarget.texture;
      this.pngBackground = texture;
      this.envMapLoaded.emit(this.pngBackground);
      texture.dispose();
    });

  }

  public getBackground() {
    return this.pngBackground;
  }

  public getEnvMap() {
    return this.pngBackground;
  }

}
