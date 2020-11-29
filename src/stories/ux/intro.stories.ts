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
      <atft-orthographic-camera [positionX]=0 [positionY]=0 [positionZ]="100" [zoom]="4">
      </atft-orthographic-camera>

      <!-- Background -->
      <atft-scene name="backgroundScene" background="0x000051">
        <atft-effect-composer [renderToScreen]="false" [sceneBackgroundTarget]="mainScene">
          <atft-dof [focus]="1.0" [aperture]="0.01" [maxblur]="0.02"></atft-dof>
        </atft-effect-composer>

        <atft-point-light intensity="1" distance="1000" [translateX]="-60" [translateY]="-60"
                          [translateZ]="50"></atft-point-light>

        <atft-loader-actor></atft-loader-actor>
      </atft-scene>

      <!-- Foreground -->
      <atft-scene name="scene" #mainScene>
        <atft-ambient-light color="0xFFFFFF" intensity="0.4"></atft-ambient-light>

        <atft-point-light intensity="0.5" distance="1000" translateX=90 translateY=90
                          translateZ=90></atft-point-light>
        <atft-point-light intensity="0.8" distance="1000" [translateX]="-60" [translateY]="-60"
                          [translateZ]="50"></atft-point-light>

        <atft-text-actor text="ATFT" translateX="-210" translateY="-30" translateZ="1"
                         [animate]="false" [minDelay]="10" [maxDelay]="10"
        ></atft-text-actor>

        <atft-text-actor text="Introducing Angular Template for Three.js" translateX="-200" translateY="-50" translateZ="1"
                         [animate]="true" [minDelay]="1" [maxDelay]="5"
        ></atft-text-actor>

        <atft-text-actor text="Param pam pam, param pam pam" translateX="-190" translateY="-70" translateZ="1"
                         [animate]="true" [minDelay]="10" [maxDelay]="30"
        ></atft-text-actor>


      </atft-scene>
    </atft-renderer-canvas>
  `
})
class StorybookIntroComponent implements AfterViewInit {


  @ViewChild(EmptyComponent) box;

  k = 0;

  constructor(private animationService: AnimationService) {
  }

  public ngAfterViewInit() {
    this.animate = this.animate.bind(this);
    this.animationService.animate.subscribe(this.animate);
    this.animationService.start();
  }

  public animate() {
    this.k += 0.02;

  }


}

export default {
  title: 'UX / Intro',
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

export const Intro = (args) => ({
  component: StorybookIntroComponent,
  props: args
});
