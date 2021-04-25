import {moduleMetadata} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {AfterViewInit, Component, OnDestroy, ViewChild} from '@angular/core';
import {AnimationService} from '../../../projects/atft/src/lib/animation';
import {UxActorModule} from '../../../projects/atft/src/lib/actor/ux';
import * as THREE from 'three';
import {PerspectiveCameraComponent} from 'atft';
import {Subscription} from 'rxjs';

const modelPath = 'https://raw.githubusercontent.com/makimenko/files/master/angular-template-for-threejs/model/';
// const modelPath = '/assets/model';
const longText = `Coding allow us to construct and visit believable imaginary cities,
provide us with glimpses of ancient urbanism, and let us immerse ourselves
in the wildest utopias and darkest dystopias of our possible futures.
They are an unprecedented canvas for experimenting with the urban environment,
and an utterly unique medium for experiencing cities both imagined
and real in truly immersive ways.`;

@Component({
  template: `
    <atft-renderer-canvas>
      <atft-perspective-camera #cam [zAxisUp]="true" positionX=0 [positionY]=50 [positionZ]=z>
      </atft-perspective-camera>

      <!-- Foreground -->
      <atft-scene name="scene" background="#000000">

        <atft-ambient-light color="#FFFFFF" [intensity]="0.9"></atft-ambient-light>

        <atft-point-light [intensity]="0.1" [distance]="1000" [translateX]=90 [translateY]=90
                          [translateZ]=90></atft-point-light>
        <atft-point-light [intensity]="0.1" [distance]="1000" [translateX]="-60" [translateY]="-60"
                          [translateZ]="50"></atft-point-light>

        <atft-text-actor text="Introducing Angular Template for Three.js" [translateX]="-200" [translateY]="50" [translateZ]="-50"
                         [animate]="false" [minDelay]="5" [maxDelay]="5" [materialColor]="colorA200"
                         [scaleX]="0.5" [scaleY]="0.5"
                         atft-dashed-draw [dashColor]="colorA200" [dashIncrement]="5">
        </atft-text-actor>

        <atft-text-actor text="Hello, virtual city!" [translateX]="100" [translateY]="5" [translateZ]="-100"
                         [animate]="false" [minDelay]="10" [maxDelay]="10" [materialColor]="colorA200"
                         atft-dashed-draw [dashColor]="colorA200" [dashIncrement]="5">
        </atft-text-actor>

        <atft-text-actor text="${longText}" [translateX]="-50" [translateY]="100" [translateZ]="-50"
                         [animate]="false" [minDelay]="10" [maxDelay]="10" [materialColor]="colorA200"
                         [scaleX]="0.3" [scaleY]="0.3" [dashIncrement]="50"
                         atft-dashed-draw [dashColor]="colorA200">
        </atft-text-actor>

        <atft-obj-loader
          model="${modelPath}/SampleArea/Base.obj"
          material="${modelPath}/SampleArea/Base.mtl"
          resourcePath="${modelPath}/">
        </atft-obj-loader>

        <atft-obj-loader atft-dashed-draw dashColor="#303030" [dashIncrement]="150" [initialOpacity]="0.2"
                         model="${modelPath}/SampleArea/Zone.obj"
                         material="${modelPath}/SampleArea/Zone.mtl"
                         resourcePath="${modelPath}/">
        </atft-obj-loader>

        <atft-obj-loader *ngFor="let item of [].constructor(5); let i = index"
                         atft-dashed-draw dashColor="#303030" [dashIncrement]="20+(5*i)" [initialOpacity]="0.2"
                         model="${modelPath}/SampleArea/House{{i+1}}.obj"
                         material="${modelPath}/SampleArea/House{{i+1}}.mtl"
                         resourcePath="${modelPath}/">
        </atft-obj-loader>
      </atft-scene>
    </atft-renderer-canvas>
  `
})
class StorybookFlyComponent implements AfterViewInit, OnDestroy {

  @ViewChild('cam') cameraComponent: PerspectiveCameraComponent;

  private mixer: THREE.AnimationMixer;
  private clock = new THREE.Clock();
  private camera: THREE.Camera;
  protected animation: Subscription;

  // z = 600 - 200

  colorA200 = '#9FA8DA';

  constructor(private animationService: AnimationService) {
  }

  public ngAfterViewInit() {
    this.initCameraMovementClip();

    this.animate = this.animate.bind(this);
    this.animation = this.animationService.animate.subscribe(this.animate);
    this.animationService.start();

  }

  public initCameraMovementClip() {
    // console.log('StorybookFlyComponent.initCameraMovementClip: cam', this.camera);
    const positionKF = new THREE.VectorKeyframeTrack('.position', [0, 10, 20], [0, 50, 600, -30, 10, 400, 10, 50, 200]);
    const cameraMoveClip = new THREE.AnimationClip('Hello', 20, [positionKF]);
    this.mixer = new THREE.AnimationMixer(this.cameraComponent.camera);
    const clipAction = this.mixer.clipAction(cameraMoveClip);
    clipAction.setLoop(THREE.LoopOnce, 1);
    clipAction.clampWhenFinished = true;
    clipAction.play();
  }

  public animate() {
    if (this.mixer) {
      this.mixer.update(this.clock.getDelta());
    }
  }

  public ngOnDestroy() {
    this.animation?.unsubscribe();
  }

}

export default {
  title: 'All-in-One/Virtual City',
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule,
        UxActorModule
      ]
    })
  ],
  args: {},
  argTypes: {}
};

export const VirtualCity = (args) => ({
  component: StorybookFlyComponent,
  props: args
});
