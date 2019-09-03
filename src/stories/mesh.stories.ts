import {moduleMetadata, storiesOf} from '@storybook/angular';
import {Component, forwardRef} from '@angular/core';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../projects/atft/src/lib/atft.module';
import {EmptyComponent} from '../../projects/atft/src/lib/objects/helpers';
import {AbstractObject3D} from '../../projects/atft/src/lib/objects/abstract-object-3d';
import {StorybookContainerComponent} from './common/storybook-container.component';


@Component({
  selector: 'storybook-sample',
  providers: [{provide: AbstractObject3D, useExisting: forwardRef(() => StorybookCylinderMeshComponent)}],
  template: `
      <atft-cylinder-mesh [radiusTop]="2.0" [radiusBottom]="7.0" [height]="10" [radialSegments]="36" [heightSegments]="1"
                          material="lamb" materialColor="0x00ff00">
      </atft-cylinder-mesh>
  `
})
class StorybookCylinderMeshComponent extends EmptyComponent {

}


@Component({
  selector: 'storybook-sample',
  providers: [{provide: AbstractObject3D, useExisting: forwardRef(() => StorybookSphereMeshComponent)}],
  template: `
      <atft-sphere-mesh [radius]="4" [widthSegments]="20" [hightSegments]="20" material="lamb" materialColor="0xff0000">
      </atft-sphere-mesh>
  `
})
class StorybookSphereMeshComponent extends EmptyComponent {

}

@Component({
  selector: 'storybook-sample',
  providers: [{provide: AbstractObject3D, useExisting: forwardRef(() => StorybookTorusMeshComponent)}],
  template: `
      <atft-torus-mesh [radius]="5" [tube]="2" [radialSegments]="16" [tubularSegments]="100" [arc]="6.28" material="lamb"
                       materialColor="0x0000ff">
      </atft-torus-mesh>
  `
})
class StorybookTorusMeshComponent extends EmptyComponent {

}


storiesOf('Mesh', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        AtftModule
      ],
      declarations: [
        StorybookContainerComponent
      ]
    }),
  )
  .add('cylinder', () => ({
    moduleMetadata: ({
      declarations: [StorybookCylinderMeshComponent]
    }),
    component: StorybookContainerComponent
  }))
  .add('sphere', () => ({
    moduleMetadata: ({
      declarations: [StorybookSphereMeshComponent]
    }),
    component: StorybookContainerComponent
  }))
  .add('torus', () => ({
    moduleMetadata: ({
      declarations: [StorybookTorusMeshComponent]
    }),
    component: StorybookContainerComponent
  }))
;
