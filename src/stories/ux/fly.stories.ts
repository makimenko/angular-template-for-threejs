import {moduleMetadata} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {AnimationService} from '../../../projects/atft/src/lib/animation';
import {EmptyComponent} from '../../../projects/atft/src/lib/object/helper';
import {UxActorModule} from '../../../projects/atft/src/lib/actor/ux';


@Component({
  template: `
    <atft-renderer-canvas>
      <atft-perspective-camera [zAxisUp]="true" positionX=0 positionY=50 [positionZ]=z>
      </atft-perspective-camera>

      <!-- Foreground -->
      <atft-scene name="scene" background="0x000000" atft-stats-auto-show>

        <atft-ambient-light color="0xFFFFFF" intensity="0.4"></atft-ambient-light>

        <atft-point-light intensity="0.5" distance="1000" translateX=90 translateY=90
                          translateZ=90></atft-point-light>
        <atft-point-light intensity="0.8" distance="1000" [translateX]="-60" [translateY]="-60"
                          [translateZ]="50"></atft-point-light>

        <atft-text-actor text="Introducing Angular Template for Three.js" translateX="-200" translateY="50" translateZ="-50"
                         [animate]="false" [minDelay]="5" [maxDelay]="5" materialColor="0x303030"
                         [scaleX]="0.5" [scaleY]="0.5"
                         atft-dashed-draw dashColor="0x303030" [dashIncrement]="30"
        >
        </atft-text-actor>

        <atft-text-actor text="Hello, World!" translateX="100" translateY="5" [translateZ]="(-100-(i*30))"
                         [animate]="false" [minDelay]="10" [maxDelay]="10" materialColor="0x303030"
                         atft-dashed-draw dashColor="0x303030"
        ></atft-text-actor>

        <atft-grid-mesh [rotateX]="(90 | deg2rad)" materialColor="0x202020"
                        [iterationsX]="30" [iterationsY]="60" [size]="20">
        </atft-grid-mesh>

        <atft-loader-actor [rotateX]="(90 | deg2rad)" [translateY]="10" materialColor="0x202020">
        </atft-loader-actor>
      </atft-scene>
    </atft-renderer-canvas>
  `
})
class StorybookFlyComponent implements AfterViewInit {

  @ViewChild(EmptyComponent) box;

  k = 0;
  z = 600;

  constructor(private animationService: AnimationService) {
  }

  public ngAfterViewInit() {
    this.animate = this.animate.bind(this);
    this.animationService.animate.subscribe(this.animate);
    this.animationService.start();
  }

  public animate() {
    this.k += 0.05;

    if (this.z > 200) {
      this.z -= this.k;
    }
  }


}

export default {
  title: 'UX / Fly',
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

export const Fly = (args) => ({
  component: StorybookFlyComponent,
  props: args
});
