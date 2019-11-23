import {moduleMetadata, storiesOf} from '@storybook/angular';
import {Component} from '@angular/core';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {withKnobs} from '@storybook/addon-knobs';
import {AnimationService} from '../../../projects/atft/src/lib/animation';
import {performanceSceneWrapper} from '../scene-wrapper/performance-scene-wrapper';


@Component({
  template: performanceSceneWrapper(`
<div *ngFor="let item of [].constructor(200); let i = index">
  <atft-empty #a [translateY]="50" [translateX]="-i*2" [translateZ]="5+i">
  </atft-empty>
  <atft-empty #b [translateY]="-50" [translateX]="-i" [translateZ]="5-i">
  </atft-empty>
  <atft-mesh-line-connector [source]="a" [target]="b" materialColor="0xff0000" [animated]="true" [animationIncrement]="0.003"
    transparent="false">
  </atft-mesh-line-connector>
  </div>
  `)
})
class StorybookConnectorPerformanceComponent {

  constructor(private animationService: AnimationService) {
    this.animationService.start();
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
class StorybookMeshPerformanceComponent {
  size = 10;
  iterations = 20;
  offset = this.size * 1.05;
  translate = (this.iterations * this.offset) / 2;
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
class StorybookPlanePerformanceComponent {
  size = 10;
  iterations = 20;
  offset = this.size * 1.05;
  translate = (this.iterations * this.offset) / 2;
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
;



