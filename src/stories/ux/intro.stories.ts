import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {AfterViewInit, Component, OnDestroy, ViewChild} from '@angular/core';
import {AnimationService} from '../../../projects/atft/src/lib/animation';
import {EmptyComponent} from '../../../projects/atft/src/lib/object/helper';
import {UxActorModule} from '../../../projects/atft/src/lib/actor/ux';
import {Subscription} from 'rxjs';
import {AtftDataCenterActorModule} from "../../../projects/atft/src/lib/actor/data-center";


@Component({
  selector: 'app-storybook',
  template: `
    <atft-renderer-canvas>
      <atft-orthographic-camera [positionX]=0 [positionY]=0 [positionZ]="100" [zoom]="4">
      </atft-orthographic-camera>

      <!-- Background -->
      <atft-scene name="backgroundScene" background="0x000051">
        <atft-effect-composer [renderToScreen]="false" [sceneBackgroundTarget]="mainScene">
          <atft-blur></atft-blur>
        </atft-effect-composer>

        <atft-point-light [intensity]="0.4" [distance]="1000" [translateX]="-60" [translateY]="-60"
                          [translateZ]="50"></atft-point-light>

        <atft-loader-actor materialColor="#5DADE2"></atft-loader-actor>
      </atft-scene>

      <!-- Foreground -->
      <atft-scene name="scene" #mainScene atft-stats-auto-show>
        <atft-ambient-light color="#FFFFFF" [intensity]="0.4"></atft-ambient-light>

        <atft-point-light [intensity]="0.5" [distance]="1000" [translateX]=90 [translateY]=90
                          [translateZ]=90></atft-point-light>
        <atft-point-light [intensity]="0.8" [distance]="1000" [translateX]="-60" [translateY]="-60"
                          [translateZ]="50"></atft-point-light>

        <atft-text-actor text="Introducing Angular Template for Three.js" [translateX]="-200" [translateY]="-50" [translateZ]="1"
                         [animate]="true" [minDelay]="5" [maxDelay]="5" materialColor="#DDDDDD"
        ></atft-text-actor>

      </atft-scene>
    </atft-renderer-canvas>
  `
})
class StorybookIntroComponent implements AfterViewInit, OnDestroy {


  @ViewChild(EmptyComponent) box : any;

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
  }

  ngOnDestroy(): void {
    this.animation?.unsubscribe();
  }

}



const meta: Meta<StorybookIntroComponent> = {
  title: 'UX/Intro',
  component: StorybookIntroComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule,
        UxActorModule
      ]
    })
  ],
};


export default meta;
type Story = StoryObj<StorybookIntroComponent>;

export const Intro: Story = {
};



