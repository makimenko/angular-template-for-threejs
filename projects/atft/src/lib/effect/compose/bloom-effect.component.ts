import {Component, HostListener, Input, Optional, SkipSelf} from '@angular/core';
import {RendererService} from '../../renderer/renderer.service';
import {EffectComposerComponent} from './effect-composer.component';
import * as THREE from 'three';
import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer';
import {ShaderPass} from 'three/examples/jsm/postprocessing/ShaderPass';
import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass';
import {UnrealBloomPass} from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import {FXAAShader} from 'three/examples/jsm/shaders/FXAAShader';
import {SMAAPass} from 'three/examples/jsm/postprocessing/SMAAPass';

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

@Component({
  selector: 'atft-bloom-effect',
  template: ''
})
export class BloomEffectComponent {

  @Input() strength = 2.0;
  @Input() radius = 0.1;
  @Input() threshold = 0.1;
  @Input() bloomLayerId = 1;


  protected materials: Array<THREE.Material> = [];
  protected darkMaterial = new THREE.MeshBasicMaterial({color: 'black'});
  protected bloomLayer = new THREE.Layers();
  private finalComposer: EffectComposer;
  private bloomComposer: EffectComposer;
  public initialized = false;
  protected scene: THREE.Scene;
  protected fxaaPass: ShaderPass;


  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected composer: EffectComposerComponent
  ) {
    // console.log('BloomEffectComponent.constructor');
    composer.registerBloomEffect(this);
  }

  public init() {
    if (!this.initialized
      && this.rendererService.getScene()
      && this.rendererService.getScene().getObject()
      && this.rendererService.getCamera()
      && this.rendererService.getCamera().camera
    ) {

      const renderer = this.rendererService.getWebGlRenderer();
      const camera = this.rendererService.getCamera().camera;
      const scene = this.rendererService.getScene().getObject();

      if (renderer && scene && camera) {
        // console.log('BloomEffectComponent.init');
        this.scene = scene;

        this.bloomLayer.set(this.bloomLayerId);
        const renderScene = new RenderPass(scene, camera);

        const bloomPass = new UnrealBloomPass(
          new THREE.Vector2(window.innerWidth, window.innerHeight),
          this.strength,
          this.radius,
          this.threshold
        );
        bloomPass.clear = true;


        this.bloomComposer = new EffectComposer(renderer);
        this.bloomComposer.renderToScreen = false;
        this.bloomComposer.addPass(renderScene);
        this.bloomComposer.addPass(bloomPass);

        this.fxaaPass = new ShaderPass(FXAAShader);
        this.onResize();
        // this.fxaaPass.renderToScreen = true;
        this.bloomComposer.addPass(this.fxaaPass);


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



        this.finalComposer = new EffectComposer(renderer);
        this.finalComposer.addPass(renderScene);
        this.finalComposer.addPass(finalPass);
        this.finalComposer.addPass(this.fxaaPass);
        //const smaaPass = new SMAAPass(window.innerWidth, window.innerHeight);
        //this.finalComposer.addPass(smaaPass);

        this.initialized = true;

      } else {
        console.warn('BloomEffectComponent.init not all parameters settled');
      }

    }
  }

  @HostListener('window:resize', ['$event'])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public onResize(event?: Event) {
    // console.log('BloomEffectComponent.updateResolution');
    if (this.fxaaPass) {
      const pixelRatio = window.devicePixelRatio; //this.rendererService.getWebGlRenderer().getPixelRatio();
      this.fxaaPass.material.uniforms['resolution'].value.x = 1 / (window.innerWidth * pixelRatio);
      this.fxaaPass.material.uniforms['resolution'].value.y = 1 / (window.innerHeight * pixelRatio);
    }
  }

  public render() {
    if (this.initialized) {
      // console.log('BloomEffectComponent.render');
      this.scene.traverse(i => {
        this.darkenNonBloomed(i);
      });
      const memorizeBackground = this.scene.background;
      this.scene.background = new THREE.Color('black');

      this.bloomComposer.render();

      this.scene.traverse(i => {
        this.restoreMaterial(i);
      });
      this.scene.background = memorizeBackground;
      this.finalComposer.render();
    }
  }

  protected darkenNonBloomed(obj): void {
    if (this.initialized && obj.isMesh && this.bloomLayer.test(obj.layers) === false) {
      // console.log('darkenNonBloomed');
      this.materials[obj.uuid] = obj.material;
      obj.material = this.darkMaterial;
    }
  }

  protected restoreMaterial(obj): void {
    if (this.initialized && obj.isMesh && this.materials[obj.uuid]) {
      obj.material = this.materials[obj.uuid];
      delete this.materials[obj.uuid];
    }
  }

}
