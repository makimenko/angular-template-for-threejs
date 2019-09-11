import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AxesHelperComponent} from './axes-helper.component';
import {EmptyComponent} from './empty.component';
import {GridHelperComponent} from './grid-helper.component';


@NgModule({
  declarations: [
    AxesHelperComponent,
    EmptyComponent,
    GridHelperComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AxesHelperComponent,
    EmptyComponent,
    GridHelperComponent
  ]
})
export class AtftHelperModule {
}
