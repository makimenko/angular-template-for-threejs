import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrbitControlsComponent} from './orbit-controls.component';
import {MapControlsComponent} from './map-controls.component';


@NgModule({
  declarations: [
    OrbitControlsComponent,
    MapControlsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OrbitControlsComponent,
    MapControlsComponent
  ]
})
export class AtftControlModule {
}
