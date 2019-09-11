import {NgModule} from '@angular/core';
import {Deg2RadPipe} from './deg2rad.pipe';
import {Rad2DegPipe} from './rad2deg.pipe';
import {CommonModule} from '@angular/common';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Deg2RadPipe,
    Rad2DegPipe
  ],
  exports: [
    Deg2RadPipe,
    Rad2DegPipe
  ]
})
export class AtftPipeModule {
}
