import {AfterViewInit, Component, QueryList, ViewChildren} from '@angular/core';
import {worldSceneWrapper} from '../scene-wrapper/world-scene-wrapper';
import {BoxMeshComponent} from '../../../projects/atft/src/lib/object/mesh';
import * as THREE from 'three';
import {AnimationService} from '../../../projects/atft/src/lib/animation';
import {AbstractObject3D} from '../../../projects/atft/src/lib/object/abstract-object-3d';

@Component({
  template: worldSceneWrapper(`
  <div *ngFor="let item of [].constructor(10); let x = index">
    <div *ngFor="let item of [].constructor(10); let y = index">
        <atft-empty [translateX]="(x*10.3)-50" [translateY]="(y*10.3)-50" [translateZ]="5">
            <atft-box-mesh height="10" [width]="10" depth="0.2" materialColor="0xdadaff" atft-raycaster-group (mouseEnter)="mouseEnter($event)" (mouseExit)="mouseExit($event)"
            [name]="'obj'+x+'_'+y">
            </atft-box-mesh>
        </atft-empty>
    </div>
  </div>
  `)
})
export class StorybookReactiveGridComponent implements AfterViewInit {

  @ViewChildren(BoxMeshComponent) boxes: QueryList<BoxMeshComponent>;

  mixers: Map<string, THREE.AnimationMixer> = new Map();

  private clock = new THREE.Clock();

  private readonly mouseOverClip: THREE.AnimationClip;

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

  public mouseEnter(boxComponent: AbstractObject3D<any>) {
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
    this.animationService.animate.subscribe(this.animate);
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

}
