import {moduleMetadata, storiesOf} from '@storybook/angular';
import {Component, forwardRef} from '@angular/core';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../projects/atft/src/lib/atft.module';
import {EmptyComponent} from '../../projects/atft/src/lib/objects/helpers';
import {AbstractObject3D} from '../../projects/atft/src/lib/objects/abstract-object-3d';
import {StorybookContainerComponent} from './common/storybook-container.component';


@Component({
  selector: 'storybook-sample',
  providers: [{provide: AbstractObject3D, useExisting: forwardRef(() => StorybookObjectLoaderComponent)}],
  template: `
      <atft-object-loader model="assets/model/Server.json" (render)="render.emit()">
      </atft-object-loader>
  `
})
class StorybookObjectLoaderComponent extends EmptyComponent {

}


@Component({
  selector: 'storybook-sample',
  providers: [{provide: AbstractObject3D, useExisting: forwardRef(() => StorybookObjLoaderComponent)}],
  template: `
      <atft-obj-loader (render)="render.emit()"
              model="assets/model/smiley/smiley.obj"
              material="assets/model/smiley/smiley.mtl"
              texturePath="assets/model/smiley/"
              rotateX={{-90|deg2rad}}
              translateX=-50
              translateZ=40
              translateY=3>
          >
      </atft-obj-loader>
  `
})
class StorybookObjLoaderComponent extends EmptyComponent {

}


storiesOf('Loader', module)
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
  .add('object (json)', () => ({
    moduleMetadata: ({
      declarations: [StorybookObjectLoaderComponent]
    }),
    component: StorybookContainerComponent
  }))
  .add('obj (+mtl)', () => ({
    moduleMetadata: ({
      declarations: [StorybookObjLoaderComponent]
    }),
    component: StorybookContainerComponent
  }))
;
