import {moduleMetadata, storiesOf} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {withKnobs} from '@storybook/addon-knobs';
import {Component} from '@angular/core';
import {performanceSceneWrapper} from '../scene-wrapper/performance-scene-wrapper';
import {AbstractCameraRotation} from './abstract-camera-rotation';
import {AnimationService} from '../../../projects/atft/src/lib/animation';


@Component({
  template: performanceSceneWrapper(`
<div *ngFor="let item of [].constructor(200); let i = index">
  <atft-empty #a [translateY]="50" [translateX]="(-i*2)+50" [translateZ]="5+i">
  </atft-empty>
  <atft-empty #b [translateY]="-50" [translateX]="(-i)+50" [translateZ]="5-i">
  </atft-empty>
  <atft-mesh-line-connector [source]="a" [target]="b" materialColor="0xff0000" [animated]="true" [animationIncrement]="0.003"
    transparent="false">
  </atft-mesh-line-connector>
  </div>
  `)
})
class StorybookConnectorPerformanceComponent extends AbstractCameraRotation {

  constructor(private animationService: AnimationService) {
    super(animationService);
  }

}


@Component({
  template: performanceSceneWrapper(`
  <atft-grid-mesh [size]="5" [iterationsX]="50" [iterationsY]="50" [offset]="1.05"></atft-grid-mesh>
  `)
})
class StorybookGridPerformanceComponent extends AbstractCameraRotation {

  constructor(protected animation: AnimationService) {
    super(animation);
  }

}


@Component({
  template: performanceSceneWrapper(`
  <div *ngFor="let item of [].constructor(iterations); let x = index">
    <div *ngFor="let item of [].constructor(iterations); let y = index">
        <atft-empty [translateX]="(x*offset)-translate" [translateY]="(y*offset)-translate">
            <atft-box-mesh [height]="size" [width]="size" [depth]="size" materialColor="0xdadaff">
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


  constructor(protected animation: AnimationService) {
    super(animation);
  }


}


@Component({
  template: performanceSceneWrapper(`
  <div *ngFor="let item of [].constructor(iterations); let x = index">
    <div *ngFor="let item of [].constructor(iterations); let y = index">
        <atft-empty [translateX]="(x*offset)-translate" [translateY]="(y*offset)-translate">
            <atft-plane-mesh [height]="size" [width]="size" materialColor="0xdadaff">
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

  constructor(protected animation: AnimationService) {
    super(animation);
  }

}


storiesOf('Performance', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [
        AtftModule
      ]
    }),
  )
  .add('connector', () => ({
    component: StorybookConnectorPerformanceComponent
  }))
  .add('mesh', () => ({
    component: StorybookMeshPerformanceComponent
  }))
  .add('plane', () => ({
    component: StorybookPlanePerformanceComponent
  }))
  .add('grid', () => ({
    component: StorybookGridPerformanceComponent
  }))

;



