import {moduleMetadata} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {AfterViewInit, Component, OnDestroy, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {axesSceneWrapper} from '../scene-wrapper/axes-scene-wrapper';
import {BoxMeshComponent} from '../../../projects/atft/src/lib/object/mesh/box-mesh.component';
import {AnimationService} from '../../../projects/atft/src/lib/animation/animation.service';
import * as THREE from 'three';
import {worldSceneWrapper} from '../scene-wrapper/world-scene-wrapper';
import {RaycasterEmitEvent} from '../../../projects/atft/src/lib/raycaster';
import {Subscription} from 'rxjs';


@Component({
  template: axesSceneWrapper(`
  <atft-box-mesh [height]="10" [width]="10" [depth]="10" material="phong" materialColor="0xffffff">
  </atft-box-mesh>
  `)
})
class StorybookLoopComponent implements AfterViewInit, OnDestroy {

  @ViewChild(BoxMeshComponent, {static: false}) box;

  k = 0;
  protected animation: Subscription;

  constructor(private animationService: AnimationService) {

  }

  public ngAfterViewInit() {
    this.animate = this.animate.bind(this);
    this.animation = this.animationService.animate.subscribe(this.animate);
    this.animationService.start();
  }

  public animate() {
    this.k += 0.02;
    this.box.rotateX = this.k;
    this.box.rotateY = -this.k * 2;
    this.box.rotateZ = this.k * 3.3;
    this.box.applyRotation();
  }

  ngOnDestroy(): void {
    this.animation?.unsubscribe();
  }

}


@Component({
  template: axesSceneWrapper(`
  <atft-box-mesh [height]="10" [width]="10" [depth]="10" material="phong" materialColor="0xffffff">
  </atft-box-mesh>
  `)
})
class StorybookMixerComponent implements AfterViewInit, OnDestroy {

  @ViewChild(BoxMeshComponent, {static: false}) box;

  private mixer: THREE.AnimationMixer;

  private clock = new THREE.Clock();
  private boxObject: THREE.Object3D;
  protected animation: Subscription;

  constructor(private animationService: AnimationService) {

  }

  public ngAfterViewInit() {
    this.boxObject = this.box.getObject();
    const positionKF = new THREE.VectorKeyframeTrack('.position', [0, 1, 2, 4], [0, 0, 0, 0, 50, 0, 0, 50, 5, 0, 0, 0]);
    const helloClip = new THREE.AnimationClip('Hello', 4, [positionKF]);
    this.mixer = new THREE.AnimationMixer(this.boxObject);
    const clipAction = this.mixer.clipAction(helloClip);
    clipAction.play();

    this.animate = this.animate.bind(this);
    this.animation = this.animationService.animate.subscribe(this.animate);
    this.animationService.start();
  }

  public animate() {
    if (this.mixer) {
      this.mixer.update(this.clock.getDelta());
    }
  }

  ngOnDestroy(): void {
    this.animation?.unsubscribe();
  }

}


@Component({
  template: worldSceneWrapper(`
  <div *ngFor="let item of [].constructor(10); let x = index">
    <div *ngFor="let item of [].constructor(10); let y = index">
        <atft-empty [translateX]="(x*10.3)-50" [translateY]="(y*10.3)-50" [translateZ]="5">
            <atft-box-mesh [height]="10" [width]="10" [depth]="0.2" materialColor="0xdadaff"
            atft-raycaster-group (mouseEnter)="mouseEnter($event)" (mouseExit)="mouseExit($event)"
            [name]="'obj'+x+'_'+y">
            </atft-box-mesh>
        </atft-empty>
    </div>
  </div>
  `)
})
class StorybookReactiveGridComponent implements AfterViewInit, OnDestroy {

  @ViewChildren(BoxMeshComponent) boxes: QueryList<BoxMeshComponent>;

  mixers: Map<string, THREE.AnimationMixer> = new Map();

  private clock = new THREE.Clock();

  private readonly mouseOverClip: THREE.AnimationClip;

  protected animation: Subscription;

  constructor(private animationService: AnimationService) {
    const mouseOverKeyFrame = new THREE.VectorKeyframeTrack('.position', [0, 0.2, 0.5], [
        0, 0, 0,
        0, 0, 1.5,
        0, 0, 1.4
      ],
      THREE.InterpolateSmooth
    );
    this.mouseOverClip = new THREE.AnimationClip('Mouse over', 0.5, [mouseOverKeyFrame]);
  }

  public mouseEnter(event: RaycasterEmitEvent) {
    const boxComponent = event.component;
    if (boxComponent) {
      const mixer = this.mixers.get(boxComponent.name);
      const existing = mixer.existingAction(this.mouseOverClip);
      if (existing) {
        if (!existing.isRunning()) {
          existing.reset();
        }
      } else {
        const clipAction = mixer.clipAction(this.mouseOverClip);
        clipAction.loop = THREE.LoopPingPong;
        clipAction.repetitions = 2;
        clipAction.play();
      }
    }
  }

  public mouseExit() {
    // console.log('mouseExit');
  }

  private createMixers() {
    this.boxes.forEach(i =>
      this.mixers.set(i.name, new THREE.AnimationMixer(i.getObject()))
    );
  }

  private playAppearForAll() {
    this.mixers.forEach(i => {
      const duration = Math.random();
      const appearKeyFrame = new THREE.VectorKeyframeTrack('.position', [0, duration], [
          0, 0, -5,
          0, 0, 0
        ],
        THREE.InterpolateLinear
      );
      const appearClip = new THREE.AnimationClip('Appear', duration, [appearKeyFrame]);
      const clipAction = i.clipAction(appearClip);
      clipAction.loop = THREE.LoopOnce;
      clipAction.play();
    });
  }

  public ngAfterViewInit() {
    this.createMixers();
    this.playAppearForAll();

    this.animate = this.animate.bind(this);
    this.animation = this.animationService.animate.subscribe(this.animate);
    this.animationService.start();
  }

  public animate() {
    if (this.mixers && this.mixers.size > 0) {
      const delta = this.clock.getDelta();
      this.mixers.forEach(i => {
        i.update(delta);
      });
    }
  }

  public ngOnDestroy() {
    this.animation?.unsubscribe();
  }

}


export default {
  title: 'Other/Animate',
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule
      ]
    })
  ]
};

export const Loop = (args) => ({
  component: StorybookLoopComponent,
  props: args
});

export const Mixer = (args) => ({
  component: StorybookMixerComponent,
  props: args
});

export const ReactiveGrid = (args) => ({
  component: StorybookReactiveGridComponent,
  props: args
});

