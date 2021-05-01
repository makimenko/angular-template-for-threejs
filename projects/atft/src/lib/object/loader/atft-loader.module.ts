import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ObjectLoaderComponent} from './object-loader.component';
import {ObjLoaderComponent} from './obj-loader.component';
import {SVGLoaderComponent} from './svg-loader.component';
import {StlLoaderComponent} from './stl-loader.component';


@NgModule({
  declarations: [
    ObjLoaderComponent,
    ObjectLoaderComponent,
    SVGLoaderComponent,
    StlLoaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ObjLoaderComponent,
    ObjectLoaderComponent,
    SVGLoaderComponent,
    StlLoaderComponent,
  ]
})
export class AtftLoaderModule {
}
