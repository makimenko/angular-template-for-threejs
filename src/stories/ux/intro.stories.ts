import {moduleMetadata} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {AnimationService} from '../../../projects/atft/src/lib/animation';
import {EmptyComponent} from '../../../projects/atft/src/lib/object/helper';

@Component({
  template: `
    <atft-orbit-controls style="height:100%" rotateSpeed=1 zoomSpeed=1.2>
      <atft-renderer-canvas>
        <atft-orthographic-camera [positionX]=0 [positionY]=0 [positionZ]="1000" [zoom]="2">
        </atft-orthographic-camera>
        <atft-scene name="scene" background="0x002f6c">
          <atft-point-light intensity="0.5" distance="1000" translateX=90 translateY=90
                            translateZ=90></atft-point-light>
          <atft-point-light intensity="0.8" distance="1000" [translateX]="-60" [translateY]="-60"
                            [translateZ]="50"></atft-point-light>
          <atft-axes-helper size=200></atft-axes-helper>
          <atft-grid-helper [size]=200 [divisions]=10 [rotateX]="90 | deg2rad"></atft-grid-helper>

          <atft-empty>
            <atft-box-mesh *ngFor="let item of [].constructor(20); let i = index"
                           height="10" width="10" depth="10" material="phong" materialColor="0xffffff"
                           [translateY]="0" [translateZ]="0" [translateX]="(i*15)-150"></atft-box-mesh>
          </atft-empty>

          <atft-box-mesh *ngFor="let item of [].constructor(20); let i = index"
                         height="10" width="10" depth="10" material="phong" materialColor="0xffffff"
                         [translateY]="0" [translateZ]="0" [translateX]="(i*15)-150"></atft-box-mesh>


        </atft-scene>
      </atft-renderer-canvas>
    </atft-orbit-controls>
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
    this.box.rotateX = this.k;
    this.box.rotateY = -this.k * 0.2;
    this.box.rotateZ = this.k * 3.3;
    this.box.applyRotation();
  }


}

export default {
  title: 'UX / Intro',
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule
      ]
    })
  ],
  args: {
    enable: true,
    focus: 10.0,
    aperture: 0.0001,
    maxblur: 0.005
  },
  argTypes: {
    enable: {control: {type: 'boolean'}},
    focus: {control: {type: 'range', min: 1, max: 3000, step: 10}},
    aperture: {control: {type: 'range', min: 0, max: 0.0005, step: .00001}},
    maxblur: {control: {type: 'range', min: 0, max: 0.05, step: .001}}
  }
};

export const Intro = (args) => ({
  component: StorybookIntroComponent,
  props: args
});
