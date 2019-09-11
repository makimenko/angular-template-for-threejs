import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ObjectLoaderComponent} from './object-loader.component';
import {ObjLoaderComponent} from './obj-loader.component';
import {SVGLoaderComponent} from './svg-loader.component';


@NgModule({
  declarations: [
    ObjLoaderComponent,
    ObjectLoaderComponent,
    SVGLoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ObjLoaderComponent,
    ObjectLoaderComponent,
    SVGLoaderComponent
  ]
})
export class AtftLoaderModule {
}
