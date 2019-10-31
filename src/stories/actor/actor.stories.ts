import {moduleMetadata, storiesOf} from '@storybook/angular';
import {Component} from '@angular/core';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {select, text, withKnobs} from '@storybook/addon-knobs';
import {worldSceneWrapper} from '../common/world-scene-wrapper';
import {AtftDataCenterActorModule} from '../../../projects/atft/src/lib/actor/data-center/atft-data-center-actor.module';
import {AnimationService} from '../../../projects/atft/src/lib/animation/animation.service';


@Component({
  template: worldSceneWrapper(`
    <atft-server-stand-actor atft-raycaster-group (mouseEnter)="mouseEnter()" [label]="label" [svgName]="svgName" translateX="-40">
    </atft-server-stand-actor>

    <atft-server-compact-actor atft-raycaster-group (mouseEnter)="mouseEnter()" [label]="label" [svgName]="svgName" translateX="-20">
    </atft-server-compact-actor>

    <atft-server-barrel-actor atft-raycaster-group (mouseEnter)="mouseEnter()" [label]="label" [svgName]="svgName" translateX="0">
    </atft-server-barrel-actor>

    <atft-server-icon-actor atft-raycaster-group (mouseEnter)="mouseEnter()" [label]="label" [svgName]="svgName" translateX="20">
    </atft-server-icon-actor>

    <atft-workstation-actor atft-raycaster-group (mouseEnter)="mouseEnter()" [label]="label" [svgName]="svgName" translateX="40"
      videoSrc="https://raw.githubusercontent.com/makimenko/files/master/angular-template-for-threejs/videos/ui/retro_futuristic_ui_720p.mp4">
    </atft-workstation-actor>
  `)
})
class StorybookServerComponent {

  svgName: string;
  label: string;

  mouseEnter() {
    console.log('Mouse enter');
  }
}

@Component({
  template: worldSceneWrapper(`
    <atft-empty>

        <atft-layer-actor width="100" height="40" [translateZ]="0.5" [translateY]="-20" name="Servers A">
        </atft-layer-actor>
        <atft-layer-actor width="100" height="50" [translateZ]="0.5" [translateY]="30" name="Servers B">
        </atft-layer-actor>

        <atft-empty translateZ="0.5">
          <!-- Servers / Nodes: -->
          <atft-server-barrel-actor #rx10 label="RX10" translateY="-20"  svgName="idea.svg" [showFrame]="true">
          </atft-server-barrel-actor>
          <atft-server-stand-actor #z001 label="Server Z001" translateY="-20" [translateX]="-30" svgName="grid-world.svg">
          </atft-server-stand-actor>
          <atft-server-compact-actor #tx71 label="Server TX71" translateY="30" [translateX]="-30" svgName="upload.svg">
          </atft-server-compact-actor>
          <!-- Connectors / Edges: -->
          <atft-empty translateZ="0.1">
            <atft-mesh-line-connector [source]="rx10" [target]="z001" materialColor="0xffffff" [lineWidth]="1" translateZ="1"
                [transparent]="true" opacity="0.4" [animated]="true" [animationIncrement]="0.001">
            </atft-mesh-line-connector>
            <atft-mesh-line-connector [source]="z001" [target]="tx71" materialColor="0xffffff" [lineWidth]="1" translateZ="1"
                [transparent]="true" opacity="0.4" [animated]="true" [animationIncrement]="-0.001">
             </atft-mesh-line-connector>
           </atft-empty>
         </atft-empty>
    </atft-empty>
  `)
})
class StorybookSceneComponent {

  constructor(private animationService: AnimationService) {
    this.animationService.start();
  }

  rx10Selected() {
    console.log('RX10 Selected!!!');
  }

}


storiesOf('Actor', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [
        AtftModule,
        AtftDataCenterActorModule
      ],
      declarations: [
        StorybookServerComponent,
        StorybookSceneComponent
      ]
    }),
  )
  .add('actors', () => ({
    component: StorybookSceneComponent
  }))
  .add('server', () => ({
    component: StorybookServerComponent,
    props: {
      svgName: select('svgName', [
        'idea.svg',
        'upload.svg',
        'grid-world.svg'
      ], 'idea.svg'),
      label: text('label', 'Server RX10')
    }
  }))
;



