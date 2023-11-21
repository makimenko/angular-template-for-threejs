import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
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
  selector: 'app-storybook',
  template: axesSceneWrapper(`
  <atft-box-mesh [height]="10" [width]="10" [depth]="10" material="phong" materialColor="#ffffff">
  </atft-box-mesh>
  `)
})
class StorybookLoopComponent implements AfterViewInit, OnDestroy {

  @ViewChild(BoxMeshComponent, {static: false}) box: any;

  k = 0;
  protected animation!: Subscription;

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


const meta: Meta<StorybookLoopComponent> = {
  title: 'Animate/Loop',
  component: StorybookLoopComponent,
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
type Story = StoryObj<StorybookLoopComponent>;

export const Default: Story = {
  args: {
  },
};

