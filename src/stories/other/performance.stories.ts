import {moduleMetadata} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {Component, OnDestroy, ViewChild} from '@angular/core';
import {performanceSceneWrapper} from '../scene-wrapper/performance-scene-wrapper';
import {AnimationService} from '../../../projects/atft/src/lib/animation/animation.service';
import {PerspectiveCameraComponent} from '../../../projects/atft/src/lib/camera';
import * as THREE from 'three';
import {Subscription} from 'rxjs';


abstract class AbstractCameraRotation implements OnDestroy {

  @ViewChild(PerspectiveCameraComponent, {static: false})
  camera;
  clock = new THREE.Clock();
  matrix = new THREE.Matrix4();
  period = 20; // rotation time in seconds
  protected animation: Subscription;


  constructor(protected animationService: AnimationService) {
    this.animate = this.animate.bind(this);
    this.animation = this.animationService.animate.subscribe(this.animate);
    animationService.start();
  }

  animate() {
    if (this.camera) {
      this.matrix.makeRotationZ(this.clock.getDelta() * 2 * Math.PI / this.period);
      this.camera.camera.position.applyMatrix4(this.matrix);
      this.camera.camera.lookAt(new THREE.Vector3());
    }
  }

  ngOnDestroy(): void {
    this.animation?.unsubscribe();
  }

}


@Component({
  selector: 'app-storybook',
  template: performanceSceneWrapper(`
<div *ngFor="let item of [].constructor(200); let i = index">
  <atft-empty #a [translateY]="50" [translateX]="(-i*2)+50" [translateZ]="5+i">
  </atft-empty>
  <atft-empty #b [translateY]="-50" [translateX]="(-i)+50" [translateZ]="5-i">
  </atft-empty>
  <atft-line-connector [source]="a" [target]="b" materialColor="#ff0000" [animated]="true" transparent="false">
  </atft-line-connector>
  </div>
  `)
})
class StorybookConnectorPerformanceComponent extends AbstractCameraRotation {

  constructor(protected animationService: AnimationService) {
    super(animationService);
  }

}


@Component({
  selector: 'app-storybook',
  template: performanceSceneWrapper(`
  <atft-grid-mesh [size]="5" [iterationsX]="50" [iterationsY]="50" [offset]="1.05"></atft-grid-mesh>
  `)
})
class StorybookGridPerformanceComponent extends AbstractCameraRotation {

  constructor(protected animationService: AnimationService) {
    super(animationService);
  }

}


@Component({
  selector: 'app-storybook',
  template: performanceSceneWrapper(`
  <div *ngFor="let item of [].constructor(iterations); let x = index">
    <div *ngFor="let item of [].constructor(iterations); let y = index">
        <atft-empty [translateX]="(x*offset)-translate" [translateY]="(y*offset)-translate">
            <atft-box-mesh [height]="size" [width]="size" [depth]="size" materialColor="#dadaff">
            </atft-box-mesh>
        </atft-empty>
    </div>
  </div>
  `)
})
class StorybookMeshPerformanceComponent extends AbstractCameraRotation {
  size = 5;
  iterations = 50;
  offset = this.size * 1.05;
  translate = (this.iterations * this.offset) / 2;


  constructor(protected animationService: AnimationService) {
    super(animationService);
  }


}


@Component({
  selector: 'app-storybook',
  template: performanceSceneWrapper(`
  <div *ngFor="let item of [].constructor(iterations); let x = index">
    <div *ngFor="let item of [].constructor(iterations); let y = index">
        <atft-empty [translateX]="(x*offset)-translate" [translateY]="(y*offset)-translate">
            <atft-plane-mesh [height]="size" [width]="size" materialColor="#dadaff">
            </atft-plane-mesh>
        </atft-empty>
    </div>
  </div>
  `)
})
class StorybookPlanePerformanceComponent extends AbstractCameraRotation {

  size = 5;
  iterations = 50;
  offset = this.size * 1.05;
  translate = (this.iterations * this.offset) / 2;

  constructor(protected animationService: AnimationService) {
    super(animationService);
  }

}

export default {
  title: 'Other/Performance',
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule
      ]
    })
  ]
};

export const Connector = (args) => ({
  component: StorybookConnectorPerformanceComponent,
  props: args
});

export const Mesh = (args) => ({
  component: StorybookMeshPerformanceComponent,
  props: args
});

export const Plane = (args) => ({
  component: StorybookPlanePerformanceComponent,
  props: args
});

export const Grid = (args) => ({
  component: StorybookGridPerformanceComponent,
  props: args
});
