import {moduleMetadata, storiesOf} from '@storybook/angular';
import {Component, forwardRef, Input} from '@angular/core';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../projects/atft/src/lib/atft.module';
import {defaultSceneWrapper} from './common/default-scene-wrapper';
import {withKnobs} from '@storybook/addon-knobs';
import {EmptyComponent} from '../../projects/atft/src/lib/objects/helpers';
import {AbstractObject3D} from '../../projects/atft/src/lib/objects/abstract-object-3d';


@Component({
  selector: 'app-storybook-server-actor',
  providers: [{provide: AbstractObject3D, useExisting: forwardRef(() => ServerActorComponent)}],
  template: `
      <atft-empty>
          <atft-box-mesh height="10" width="10" depth="14" material="lamb" materialColor="0xffffff" [translateZ]="7">
          </atft-box-mesh>
          <atft-text-mesh [text]="name" [size]="2" [bevelEnabled]="false"
                          material="lamb" materialColor="0xffffff"
                          [translateX]="-7" [translateY]="-10"
          ></atft-text-mesh>
      </atft-empty>
  `
})
class ServerActorComponent extends EmptyComponent {

  @Input()
  name: string;
}


@Component({
  selector: 'app-storybook-box-mesh',
  template: defaultSceneWrapper(`
    <app-storybook-server-actor name="Server RX10"></app-storybook-server-actor>
  `)
})
class StorybookServerComponent {


}

@Component({
  selector: 'app-storybook-box-mesh',
  template: defaultSceneWrapper(`
    <app-storybook-server-actor name="Server RX10"></app-storybook-server-actor>
    <app-storybook-server-actor name="Server Z001" translateY="30"></app-storybook-server-actor>
  `)
})
class StorybookSceneComponent {


}


storiesOf('Actor', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [
        AtftModule
      ],
      declarations: [
        ServerActorComponent,
        StorybookServerComponent,
        StorybookSceneComponent
      ]
    }),
  )
  .add('server', () => ({
    component: StorybookServerComponent
  }))
  .add('scene', () => ({
    component: StorybookSceneComponent
  }))

;



