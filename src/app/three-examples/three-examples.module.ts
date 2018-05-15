import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrbitControlsDirective } from './controls/orbit-controls.directive';
import { ColladaLoaderDirective } from './objects/collada-loader.directive';
import { ObjLoaderDirective } from './objects/obj-loader.directive';

// TODO: Ideally move all to three-wrapper library. But can't move js/EnableThreeExamples.js to library :(
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OrbitControlsDirective,
    ColladaLoaderDirective,
    ObjLoaderDirective
  ],
  exports: [
    OrbitControlsDirective,
    ColladaLoaderDirective,
    ObjLoaderDirective
  ]
})
export class ThreeExamplesModule { }
