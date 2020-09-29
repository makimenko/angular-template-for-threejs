import { Component, Input } from '@angular/core';
import { moduleMetadata, storiesOf } from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import { AtftModule } from '../../../projects/atft/src/lib/atft.module';
import { axesSceneWrapper } from '../scene-wrapper/axes-scene-wrapper';


@Component({
  template: axesSceneWrapper(`
  <atft-box-mesh height="10" width="10" depth="10" material="phong" materialColor="0xffffff"></atft-box-mesh>
  `)
})
class StorybookBoxMeshComponent {

}


@Component({
  selector: 'app-storybook-cylinder-mesh',
  template: axesSceneWrapper(`
      <atft-cylinder-mesh [radiusTop]="2.0" [radiusBottom]="7.0" [height]="10" [radialSegments]="36" [heightSegments]="1"
                          material="phong" materialColor="0x00ff00">
      </atft-cylinder-mesh>
  `)
})
class StorybookCylinderMeshComponent {

}


@Component({
  template: axesSceneWrapper(`
      <atft-sphere-mesh [radius]="4" [widthSegments]="20" [hightSegments]="20" material="phong" materialColor="0xff0000">
      </atft-sphere-mesh>
  `)
})
class StorybookSphereMeshComponent {

  @Input() translateX = 0;
}


@Component({
  template: axesSceneWrapper(`
  <atft-text-mesh [text]="text" [rotateZ]="(90 | deg2rad)" material="phong" [materialColor]="materialColor"
      [bevelEnabled]="true" curveSegments="20" [centered]="true">
  </atft-text-mesh>`)
})
class StorybookTextMeshComponent {

}


@Component({
  template: axesSceneWrapper(`
  <atft-torus-mesh [radius]="5" [tube]="2" [radialSegments]="16" [tubularSegments]="100" [arc]="6.28" material="phong"
        materialColor="0x0000ff">
  </atft-torus-mesh>
  `)
})
class StorybookTorusMeshComponent {

}


@Component({
  template: axesSceneWrapper(`
  <atft-frame-mesh [thickness]="2" [sizeX]="15" [sizeY]="20" [translateZ]="0.5" material="basic" materialColor="0xff0000">
  </atft-frame-mesh>
  `)
})
class StorybookFrameMeshComponent {

}


storiesOf('Mesh', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        AtftModule
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
  .add('text', (args) => ({
    component: StorybookTextMeshComponent,
    props: args
  }), {
    args: {
      text: 'Hello :)',
      materialColor: '0xff0000'
    },
    materialColor: '0xff0000',
    argTypes: {
      materialColor: { control: { type: 'select', options: ['0xff0000', '0x00ff00', '0x0000ff'] } }
    }
  })
  .add('frame', () => ({
    component: StorybookFrameMeshComponent
  }))
;
