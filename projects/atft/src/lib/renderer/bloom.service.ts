import {Injectable} from '@angular/core';
import * as THREE from 'three';
import {Mesh, Object3D, WebGLRenderer} from 'three';
import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass';
import {UnrealBloomPass} from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer';
import {ShaderPass} from 'three/examples/jsm/postprocessing/ShaderPass';
import {FXAAShader} from 'three/examples/jsm/shaders/FXAAShader';


export const ENTIRE_SCENE_LAYER = 0, BLOOM_SCENE_LAYER = 1;

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }`;


const fragmentShader = `
  uniform sampler2D baseTexture;
  uniform sampler2D bloomTexture;
  varying vec2 vUv;
  void main() {
    gl_FragColor = ( texture2D( baseTexture, vUv ) + vec4( 1.0 ) * texture2D( bloomTexture, vUv ) );
  }`;


@Injectable()
export class BloomService {

  protected materials: Array<THREE.Material> = [];
  protected darkMaterial = new THREE.MeshBasicMaterial({color: 'black'});
  protected bloomLayer = new THREE.Layers();
  private finalComposer!: EffectComposer;
  private bloomComposer!: EffectComposer;
  public initialized = false;
  protected scene!: THREE.Scene;

  public init(renderer: WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera) {
    if (renderer && scene && camera) {
      // console.log('BloomService.init');
      this.scene = scene;

      this.bloomLayer.set(BLOOM_SCENE_LAYER);
      const renderScene = new RenderPass(scene, camera);

      const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 2, 0.1, 0.1);
      bloomPass.clear = true;

      const fxaaPass = new ShaderPass(FXAAShader);
      const pixelRatio = renderer.getPixelRatio();
      fxaaPass.material.uniforms['resolution'].value.x = 1 / (window.innerWidth * pixelRatio);
      fxaaPass.material.uniforms['resolution'].value.y = 1 / (window.innerHeight * pixelRatio);

      this.bloomComposer = new EffectComposer(renderer);
      this.bloomComposer.renderToScreen = false; // TODO: false
      this.bloomComposer.addPass(renderScene);
      this.bloomComposer.addPass(bloomPass);
      // this.bloomComposer.addPass(fxaaPass);


      const finalPass = new ShaderPass(
        new THREE.ShaderMaterial({
          uniforms: {
            baseTexture: {value: null},
            bloomTexture: {value: this.bloomComposer.renderTarget2.texture}
          },
          vertexShader: vertexShader,
          fragmentShader: fragmentShader,
          defines: {}
        }), 'baseTexture'
      );
      finalPass.needsSwap = true;

      // const smaaPass = new SMAAPass(window.innerWidth, window.innerHeight);

      this.finalComposer = new EffectComposer(renderer);
      this.finalComposer.addPass(renderScene);
      this.finalComposer.addPass(finalPass);
      this.finalComposer.addPass(fxaaPass);
      // this.finalComposer.addPass(smaaPass);


      this.initialized = true;

    } else {
      console.warn('BloomService.init not all parameters settled');
    }
  }

  public render() {
    if (this.initialized) {
      this.scene.traverse(i => {
        this.darkenNonBloomed(i);
      });
      this.bloomComposer.render();


      this.scene.traverse(i => {
        this.restoreMaterial(i);
      });
      this.finalComposer.render();
    }
  }


  protected darkenNonBloomed(obj : any): void {
    if (this.initialized && obj.isMesh && this.bloomLayer.test(obj.layers) === false) {
      // console.log('darkenNonBloomed');
      // @ts-ignore
      this.materials[obj.uuid] = obj.material;
      obj.material = this.darkMaterial;

    }
  }

  protected restoreMaterial(obj : any): void {
    if (this.initialized && obj.isMesh && this.materials[obj.uuid]) {
      obj.material = this.materials[obj.uuid];
      delete this.materials[obj.uuid];
    }
  }

}
