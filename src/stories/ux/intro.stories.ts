import {moduleMetadata} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {AnimationService} from '../../../projects/atft/src/lib/animation';
import {EmptyComponent} from '../../../projects/atft/src/lib/object/helper';
import {AtftDataCenterActorModule} from '../../../projects/atft/src/lib/actor/data-center';

@Component({
  template: `
    <atft-renderer-canvas>
      <atft-orthographic-camera [positionX]=0 [positionY]=0 [positionZ]="100" [zoom]="4">
      </atft-orthographic-camera>

      <!-- Background -->
      <atft-scene name="backgroundScene" background="0x000051">
        <atft-effect-composer [renderToScreen]="false" [sceneBackgroundTarget]="mainScene">
          <atft-dof [focus]="1.0" [aperture]="0.001" [maxblur]="0.01"></atft-dof>
        </atft-effect-composer>

        <atft-point-light intensity="1" distance="1000" [translateX]="-60" [translateY]="-60"
                          [translateZ]="50"></atft-point-light>

        <atft-empty [rotateZ]="k">
          <atft-box-mesh *ngFor="let item of [].constructor(20); let i = index"
                         height="10" width="10" depth="10" material="phong" materialColor="0x5c6bc0"
                         [translateY]="0" [translateZ]="0" [translateX]="(i*15)-150"></atft-box-mesh>
        </atft-empty>
      </atft-scene>

      <!-- Foreground -->
      <atft-scene name="scene" #mainScene>
        <atft-ambient-light color="0xFFFFFF" intensity="0.4"></atft-ambient-light>

        <atft-point-light intensity="0.5" distance="1000" translateX=90 translateY=90
                          translateZ=90></atft-point-light>
        <atft-point-light intensity="0.8" distance="1000" [translateX]="-60" [translateY]="-60"
                          [translateZ]="50"></atft-point-light>

        <atft-text-actor [text]="text" translateX="-200" translateY="-50" translateZ="1"
                         [animate]="true" [minDelay]="5" [maxDelay]="10"
        ></atft-text-actor>

      </atft-scene>
    </atft-renderer-canvas>
  `
})
class StorybookIntroComponent implements AfterViewInit {

  text = 'Welcome to my world! :)';

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
        AtftDataCenterActorModule
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
