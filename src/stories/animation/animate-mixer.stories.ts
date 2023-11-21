import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {AfterViewInit, Component, OnDestroy, ViewChild} from '@angular/core';
import {axesSceneWrapper} from '../scene-wrapper/axes-scene-wrapper';
import {BoxMeshComponent} from '../../../projects/atft/src/lib/object/mesh/box-mesh.component';
import {AnimationService} from '../../../projects/atft/src/lib/animation/animation.service';
import * as THREE from 'three';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-storybook',
  template: axesSceneWrapper(`
  <atft-box-mesh [height]="10" [width]="10" [depth]="10" material="phong" materialColor="#ffffff">
  </atft-box-mesh>
  `)
})
class StorybookMixerComponent implements AfterViewInit, OnDestroy {

  @ViewChild(BoxMeshComponent, {static: false}) box : any;

  private mixer!: THREE.AnimationMixer;

  private clock = new THREE.Clock();
  private boxObject!: THREE.Object3D;
  protected animation!: Subscription;

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



const meta: Meta<StorybookMixerComponent> = {
  title: 'Animate/Mixer',
  component: StorybookMixerComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule
      ]
    })
  ],
  argTypes: {
  }
};


export default meta;
type Story = StoryObj<StorybookMixerComponent>;

export const Default: Story = {
  args: {
  },
};

