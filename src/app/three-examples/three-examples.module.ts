import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrbitControlsDirective } from './controls/orbit-controls.directive';
import { ColladaLoaderDirective } from './objects/collada-loader.directive';
import { ObjLoaderDirective } from './objects/obj-loader.directive';
import { RadiansToDegreePipe } from './pipes/radians-to-degree.pipe';
import { DegreesToRadiansPipe } from './pipes/degrees-to-radians.pipe';
import { PerspectiveCameraDirective } from './cameras/perspective-camera.directive';
import { RendererComponent } from './renderer/renderer.component';
import { SceneDirective } from './objects/scene.directive';
import { AxesHelperDirective } from './objects/axes-helper.directive';
import { GridHelperDirective } from './objects/grid-helper.directive';
import { ObjectLoaderDirective } from './objects/object-loader.directive';
import { PointLightDirective } from './objects/point-light.directive';

// TODO: Ideally move all to three-wrapper library. But can't move js/EnableThreeExamples.js to library :(
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OrbitControlsDirective,
    ColladaLoaderDirective,
    ObjLoaderDirective,
    RadiansToDegreePipe,
    DegreesToRadiansPipe,
    PerspectiveCameraDirective,
    RendererComponent,
    SceneDirective,
    AxesHelperDirective,
    GridHelperDirective,
    ObjectLoaderDirective,
    PointLightDirective
  ],
  exports: [
    OrbitControlsDirective,
    ColladaLoaderDirective,
    ObjLoaderDirective,
    RadiansToDegreePipe,
    DegreesToRadiansPipe,
    PerspectiveCameraDirective,
    RendererComponent,
    SceneDirective,
    AxesHelperDirective,
    GridHelperDirective,
    ObjectLoaderDirective,
    PointLightDirective
  ]
})
export class ThreeExamplesModule { }
