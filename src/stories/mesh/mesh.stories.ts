import { Component, Input } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import { AtftModule } from '../../../projects/atft/src/lib/atft.module';
import { axesSceneWrapper } from '../scene-wrapper/axes-scene-wrapper';


@Component({
  template: axesSceneWrapper(`
  <atft-box-mesh height="10" width="10" depth="10" material="phong" [materialColor]="materialColor"></atft-box-mesh>
  `)
})
class StorybookBoxMeshComponent {

}


@Component({
  selector: 'app-storybook-cylinder-mesh',
  template: axesSceneWrapper(`
      <atft-cylinder-mesh [radiusTop]="2.0" [radiusBottom]="7.0" [height]="10" [radialSegments]="36" [heightSegments]="1"
                          material="phong" [materialColor]="materialColor">
      </atft-cylinder-mesh>
  `)
})
class StorybookCylinderMeshComponent {

}


@Component({
  template: axesSceneWrapper(`
      <atft-sphere-mesh [radius]="4" [widthSegments]="20" [hightSegments]="20" material="phong" [materialColor]="materialColor">
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
        [materialColor]="materialColor">
  </atft-torus-mesh>
  `)
})
class StorybookTorusMeshComponent {

}


@Component({
  template: axesSceneWrapper(`
  <atft-frame-mesh [thickness]="2" [sizeX]="15" [sizeY]="20" [translateZ]="0.5" material="basic" [materialColor]="materialColor">
  </atft-frame-mesh>
  `)
})
class StorybookFrameMeshComponent {

}

export default {
  title: 'Mesh',
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule
      ]
    })
  ],
  args: {
    materialColor: '0x00ff00'
  },
  argTypes: {
    materialColor: { control: { type: 'select', options: ['0xff0000', '0x00ff00', '0x0000ff'] } }
  }
};

export const Box = (args) => ({
  component: StorybookBoxMeshComponent,
  props: args
});

export const Cylinder = (args) => ({
  component: StorybookCylinderMeshComponent,
  props: args
});

export const Shpere = (args) => ({
  component: StorybookSphereMeshComponent,
  props: args
});

export const Torus = (args) => ({
  component: StorybookTorusMeshComponent,
  props: args
});

export const Frame = (args) => ({
  component: StorybookFrameMeshComponent,
  props: args
});

export const Text = (args) => ({
  component: StorybookTextMeshComponent,
  props: args
});

Text.args = {
  text: 'Hello :)'
};

Text.argTypes = {
  text: 'text'
};

