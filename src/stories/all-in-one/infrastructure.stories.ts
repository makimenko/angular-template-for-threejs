import {Component, Input} from '@angular/core';
import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {AnimationService} from '../../../projects/atft/src/lib/animation/animation.service';
import {worldSceneWrapper} from "../scene-wrapper/world-scene-wrapper";
import {AtftDataCenterActorModule} from '../../../projects/atft/src/lib/actor/data-center/atft-data-center-actor.module';

@Component({
  selector: 'app-storybook',
  template: worldSceneWrapper(`
<atft-empty [translateZ]="0.5" [translateY]="-40">

  <atft-layer-actor [width]="180" [height]="45" [translateY]="30" label="On-Premise">
  </atft-layer-actor>
  <atft-layer-actor [width]="180" [height]="45" [translateY]="90" label="Security">
  </atft-layer-actor>
  <atft-layer-actor [width]="180" [height]="45" [translateY]="140" label="Frontend">
  </atft-layer-actor>
  <atft-layer-actor [width]="180" [height]="45" [translateY]="190" label="Backend">
  </atft-layer-actor>
  <atft-layer-actor [width]="180" [height]="45" [translateY]="240" label="Storage">
  </atft-layer-actor>

  <atft-empty>
    <!-- Servers / Nodes: -->
    <atft-server-compact-actor #ad1 label="Active Directory" [translateY]="30" [translateX]="-60" [icon]="icon">
    </atft-server-compact-actor>
    <atft-server-compact-actor #ad2 label="Active Directory (Replica)" [translateY]="90" [translateX]="-60" icon="video_settings">
    </atft-server-compact-actor>
    <atft-workstation-actor #ws1 [label]="label" [translateY]="30" [translateX]="0"
       videoSrc="https://raw.githubusercontent.com/makimenko/files/master/angular-template-for-threejs/videos/ui/retro_futuristic_ui_360p.mp4">
    </atft-workstation-actor>

    <atft-server-compact-actor #lb label="Load Balancer" [translateY]="90" [translateX]="-0" icon="a:sitemap-solid">
    </atft-server-compact-actor>
    <atft-server-icon-actor label="Firewall" [translateY]="90" [translateX]="20" icon="lock">
    </atft-server-icon-actor>
    <atft-server-icon-actor label="Auto-Scaling" [translateY]="90" [translateX]="40" icon="a:external-link-alt-solid">
    </atft-server-icon-actor>

    <atft-server-stand-actor #fs1 label="Frontend Server 1" [translateY]="140" [translateX]="-40" icon="a:grid-world">
    </atft-server-stand-actor>
    <atft-server-stand-actor #fs2 label="Frontend Server 2" [translateY]="140" [translateX]="40" icon="connected_tv">
    </atft-server-stand-actor>
    <atft-server-icon-actor label="Application Insights" [translateY]="140" [translateX]="0" [icon]="icon">
    </atft-server-icon-actor>

    <atft-server-stand-actor #bs1 label="Backend Server 1" [translateY]="190" [translateX]="-40" icon="account_tree">
    </atft-server-stand-actor>
    <atft-server-stand-actor #bs2 label="Backend Server 2" [translateY]="190" [translateX]="40" icon="account_tree">
    </atft-server-stand-actor>
    <atft-server-icon-actor label="Cloud Bursting Enabled" [translateY]="190" [translateX]="0" icon="a:upload">
    </atft-server-icon-actor>

    <atft-server-barrel-actor #db1 label="DB Cluster 1" [translateY]="240" [translateX]="-40" icon="settings_backup_restore">
    </atft-server-barrel-actor>
    <atft-server-barrel-actor #db2 label="DB Cluster 2" [translateY]="240" [translateX]="40" icon="settings_backup_restore">
    </atft-server-barrel-actor>
    <atft-server-icon-actor label="In-Memory Cache Enabled" [translateY]="240" [translateX]="0" icon="a:border-none-solid">
    </atft-server-icon-actor>

    <!-- Connectors / Edges: -->
    <atft-empty [translateZ]="0.1">
      <atft-line-connector [source]="ad1" [target]="ad2" materialColor="#ffffff" [translateZ]="1" [animated]="true">
      </atft-line-connector>
      <atft-line-connector [source]="ad2" [target]="lb" materialColor="#ffffff" [translateZ]="1" [animated]="true">
      </atft-line-connector>
      <atft-line-connector [source]="ws1" [target]="lb" materialColor="#ffffff" [translateZ]="1" [animated]="true">
      </atft-line-connector>

      <atft-line-connector [source]="lb" [target]="fs1" materialColor="#ffffff" [translateZ]="1" [animated]="true">
      </atft-line-connector>
      <atft-line-connector [source]="lb" [target]="fs2" materialColor="#ff1111" [translateZ]="1" [animated]="true">
      </atft-line-connector>


      <atft-line-connector [source]="fs1" [target]="bs1" materialColor="#ffffff" [translateZ]="1" [animated]="true">
          [transparent]="true" [animated]="true">
      </atft-line-connector>
      <atft-line-connector [source]="fs2" [target]="bs2" materialColor="#ffffff" [translateZ]="1" [animated]="true">
      </atft-line-connector>

      <atft-line-connector [source]="bs1" [target]="db1" materialColor="#ffffff" [translateZ]="1" [animated]="true">
      </atft-line-connector>
      <atft-line-connector [source]="bs2" [target]="db2" materialColor="#ffffff" [translateZ]="1" [animated]="true">
      </atft-line-connector>

     </atft-empty>
   </atft-empty>
</atft-empty>
  `)
})
class StorybookInfrastructureComponent {

  @Input() icon!: string;
  @Input() label!: string;

  animationIncrement = -0.002;

  constructor(private animationService: AnimationService) {
    this.animationService.start();
  }

}


const meta: Meta<StorybookInfrastructureComponent> = {
  title: 'All In One/Infrastructure',
  component: StorybookInfrastructureComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule,
        AtftDataCenterActorModule
      ]
    })
  ],
  argTypes: {
    icon: {
      description: 'Please choose SVG file from assets',
      options: [
        'a:idea',
        'a:upload',
        'a:grid-world',
        'md:alarm_on',
        'alarm_off'
      ],
      control: {
        type: 'select'
      }
    },
    label: {
      description: 'Please choose title of workstation',
      control: {type: 'text'}
    }
  }
};


export default meta;
type Story = StoryObj<StorybookInfrastructureComponent>;

export const Sample: Story = {
  args: {
    icon: 'a:idea',
    label: 'Workstation'
  },
};
