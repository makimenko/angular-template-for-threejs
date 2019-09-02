import {NgModule} from '@angular/core';
import {StorybookContainerComponent} from './storybook-container.component';
import {StorybookEmptyComponent} from './storybook-empty.component';
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';


@NgModule({
  imports: [
    AtftModule
  ],
  declarations: [
    StorybookContainerComponent,
    StorybookEmptyComponent
  ],
  exports: []
})
export class StorybookModule {
}

