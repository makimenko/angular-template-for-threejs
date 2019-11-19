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
      videoSrc="https://raw.githubusercontent.com/makimenko/files/master/angular-template-for-threejs/videos/ui/retro_futuristic_ui_360p.mp4">
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
<atft-empty [translateZ]="0.5" [translateY]="-40">

  <atft-layer-actor width="180" height="45" [translateY]="30" name="On-Premise">
  </atft-layer-actor>
  <atft-layer-actor width="180" height="45" [translateY]="90" name="Security">
  </atft-layer-actor>
  <atft-layer-actor width="180" height="45" [translateY]="140" name="Frontend">
  </atft-layer-actor>
  <atft-layer-actor width="180" height="45" [translateY]="190" name="Backend">
  </atft-layer-actor>
  <atft-layer-actor width="180" height="45" [translateY]="240" name="Storage">
  </atft-layer-actor>

  <atft-empty>
    <!-- Servers / Nodes: -->
    <atft-server-compact-actor #ad1 label="Active Directory" translateY="30" [translateX]="-60" svgName="users-solid.svg">
    </atft-server-compact-actor>
    <atft-server-compact-actor #ad2 label="Active Directory (Replica)" translateY="90" [translateX]="-60" svgName="users-solid.svg">
    </atft-server-compact-actor>
    <atft-workstation-actor #ws1 label="Client Workstation" [svgName]="svgName"
       translateY="30" translateX="0"
       videoSrc="https://raw.githubusercontent.com/makimenko/files/master/angular-template-for-threejs/videos/ui/retro_futuristic_ui_360p.mp4">
    </atft-workstation-actor>

    <atft-server-compact-actor #lb label="Load Balancer" translateY="90" [translateX]="-0" svgName="sitemap-solid.svg">
    </atft-server-compact-actor>
    <atft-server-icon-actor label="Firewall" translateY="90" [translateX]="20" svgName="expeditedssl-brands.svg">
    </atft-server-icon-actor>
    <atft-server-icon-actor label="Auto-Scaling" translateY="90" [translateX]="40" svgName="external-link-alt-solid.svg">
    </atft-server-icon-actor>

    <atft-server-stand-actor #fs1 label="Frontend Server 1" translateY="140" [translateX]="-40" svgName="grid-world.svg">
    </atft-server-stand-actor>
    <atft-server-stand-actor #fs2 label="Frontend Server 2" translateY="140" [translateX]="40" svgName="grid-world.svg">
    </atft-server-stand-actor>
    <atft-server-icon-actor label="Application Insights" translateY="140" [translateX]="0" svgName="idea.svg">
    </atft-server-icon-actor>

    <atft-server-stand-actor #bs1 label="Backend Server 1" translateY="190" [translateX]="-40" svgName="server-solid.svg">
    </atft-server-stand-actor>
    <atft-server-stand-actor #bs2 label="Backend Server 2" translateY="190" [translateX]="40" svgName="server-solid.svg">
    </atft-server-stand-actor>
    <atft-server-icon-actor label="Cloud Bursting Enabled" translateY="190" [translateX]="0" svgName="upload.svg">
    </atft-server-icon-actor>

    <atft-server-barrel-actor #db1 label="DB Cluster 1" translateY="240" [translateX]="-40" svgName="galactic-republic-brands.svg">
    </atft-server-barrel-actor>
    <atft-server-barrel-actor #db2 label="DB Cluster 2" translateY="240" [translateX]="40" svgName="galactic-republic-brands.svg">
    </atft-server-barrel-actor>
    <atft-server-icon-actor label="In-Memory Cache Enabled" translateY="240" [translateX]="0" svgName="border-none-solid.svg">
    </atft-server-icon-actor>

    <!-- Connectors / Edges: -->
    <atft-empty translateZ="0.1">
      <atft-mesh-line-connector [source]="ad1" [target]="ad2" materialColor="0xffffff" [lineWidth]="1" translateZ="1"
          [transparent]="true" opacity="0.4" [animated]="true" [animationIncrement]="animationIncrement">
      </atft-mesh-line-connector>
      <atft-mesh-line-connector [source]="ad2" [target]="lb" materialColor="0xffffff" [lineWidth]="1" translateZ="1"
          [transparent]="true" opacity="0.4" [animated]="true" [animationIncrement]="animationIncrement">
      </atft-mesh-line-connector>
      <atft-mesh-line-connector [source]="ws1" [target]="lb" materialColor="0xffffff" [lineWidth]="1" translateZ="1"
          [transparent]="true" opacity="0.4" [animated]="true" [animationIncrement]="animationIncrement">
      </atft-mesh-line-connector>

      <atft-mesh-line-connector [source]="lb" [target]="fs1" materialColor="0xffffff" [lineWidth]="1" translateZ="1"
          [transparent]="true" opacity="0.4" [animated]="true" [animationIncrement]="animationIncrement">
      </atft-mesh-line-connector>
      <atft-mesh-line-connector [source]="lb" [target]="fs2" materialColor="0xffffff" [lineWidth]="1" translateZ="1"
          [transparent]="true" opacity="0.4" [animated]="true" [animationIncrement]="animationIncrement">
      </atft-mesh-line-connector>


      <atft-mesh-line-connector [source]="fs1" [target]="bs1" materialColor="0xffffff" [lineWidth]="1" translateZ="1"
          [transparent]="true" opacity="0.4" [animated]="true" [animationIncrement]="animationIncrement">
      </atft-mesh-line-connector>
      <atft-mesh-line-connector [source]="fs2" [target]="bs2" materialColor="0xffffff" [lineWidth]="1" translateZ="1"
          [transparent]="true" opacity="0.4" [animated]="true" [animationIncrement]="animationIncrement">
      </atft-mesh-line-connector>

      <atft-mesh-line-connector [source]="bs1" [target]="db1" materialColor="0xffffff" [lineWidth]="1" translateZ="1"
          [transparent]="true" opacity="0.4" [animated]="true" [animationIncrement]="animationIncrement">
      </atft-mesh-line-connector>
      <atft-mesh-line-connector [source]="bs2" [target]="db2" materialColor="0xffffff" [lineWidth]="1" translateZ="1"
          [transparent]="true" opacity="0.4" [animated]="true" [animationIncrement]="animationIncrement">
      </atft-mesh-line-connector>

     </atft-empty>
   </atft-empty>
</atft-empty>
  `)
})
class StorybookSceneComponent {

  animationIncrement = -0.002;

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



