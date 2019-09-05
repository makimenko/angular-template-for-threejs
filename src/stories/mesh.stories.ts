import {moduleMetadata, storiesOf} from '@storybook/angular';
import {Component, Input} from '@angular/core';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../projects/atft/src/lib/atft.module';
import {defaultSceneWrapper} from './common/default-scene-wrapper';
import {withKnobs, number} from '@storybook/addon-knobs';

@Component({
  selector: 'app-storybook-cylinder-mesh',
  template: defaultSceneWrapper(`
      <atft-cylinder-mesh [radiusTop]="2.0" [radiusBottom]="7.0" [height]="10" [radialSegments]="36" [heightSegments]="1"
                          material="lamb" materialColor="0x00ff00">
      </atft-cylinder-mesh>
  `)
})
class StorybookCylinderMeshComponent {

}

@Component({
  selector: 'app-storybook-sphere-mesh',
  template: defaultSceneWrapper(`
      <atft-sphere-mesh [radius]="4" [widthSegments]="20" [hightSegments]="20" material="lamb" materialColor="0xff0000">
      </atft-sphere-mesh>
  `)
})
class StorybookSphereMeshComponent {

  @Input() translateX = 0;
}

@Component({
  selector: 'app-storybook-torus-mesh',
  template: defaultSceneWrapper(`
  <atft-torus-mesh [radius]="5" [tube]="2" [radialSegments]="16" [tubularSegments]="100" [arc]="6.28" material="lamb"
        materialColor="0x0000ff">
  </atft-torus-mesh>
  `)
})
class StorybookTorusMeshComponent {

}

@Component({
  selector: 'app-storybook-box-mesh',
  template: defaultSceneWrapper(`
  <atft-box-mesh height="10" width="10" depth="10" material="lamb" materialColor="0xffffff"></atft-box-mesh>
  `)
})
class StorybookBoxMeshComponent {

}

@Component({
  selector: 'app-storybook-text-mesh',
  template: defaultSceneWrapper(`
  <atft-text-mesh text="Hello World! :)"
    material="lamb" materialColor="0xffffff"
    [translateX]="-50"
  ></atft-text-mesh>
  `)
})
class StorybookTextMeshComponent {

}

@Component({
  selector: 'app-storybook-connector-mesh',
  template: defaultSceneWrapper(`
  <atft-sphere-mesh [radius]="2" [widthSegments]="10" [hightSegments]="20" material="lamb" materialColor="0x00ff00"
    #a translateY="50" translateX="-10" [translateZ]="translateZ">
  </atft-sphere-mesh>
  <atft-sphere-mesh [radius]="2" [widthSegments]="10" [hightSegments]="20" material="lamb" materialColor="0x00ff00"
    #b translateY="-50" translateX="10" translateZ="+10">
  </atft-sphere-mesh>
  <atft-connector-mesh [source]="a" [target]="b" (render)="mainRenderer.render()"></atft-connector-mesh>
  `)
})
class StorybookConnectorMeshComponent {

}

storiesOf('Mesh', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [
        AtftModule
      ],
      declarations: [
        StorybookCylinderMeshComponent,
        StorybookSphereMeshComponent,
        StorybookTorusMeshComponent,
        StorybookConnectorMeshComponent
      ]
    }),
  )
  .add('box', () => ({
    component: StorybookBoxMeshComponent
  }))
  .add('cylinder', () => ({
    component: StorybookCylinderMeshComponent
  }))
  .add('sphere', () => ({
    component: StorybookSphereMeshComponent
  }))
  .add('torus', () => ({
    component: StorybookTorusMeshComponent
  }))
  .add('text', () => ({
    component: StorybookTextMeshComponent
  }))
  .add('connector', () => ({
    component: StorybookConnectorMeshComponent,
    props: {
      translateZ: number('translateZ', -10, {range: true, min: -10, max: 100, step: 1})
    }
  }))
;



