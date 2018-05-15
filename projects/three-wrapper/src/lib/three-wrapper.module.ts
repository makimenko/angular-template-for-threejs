import { NgModule } from '@angular/core';
import { RadiansToDegreePipe } from './pipes/radians-to-degree.pipe';
import { DegreesToRadiansPipe } from './pipes/degrees-to-radians.pipe';
import { PointLightDirective } from './objects/point-light.directive';
import { ObjectLoaderDirective } from './objects/object-loader.directive';
import { GridHelperDirective } from './objects/grid-helper.directive';
import { RendererComponent } from './renderer/renderer.component';
import { PerspectiveCameraDirective } from './cameras/perspective-camera.directive';
import { SceneDirective } from './objects/scene.directive';
import { AxesHelperDirective } from './objects/axes-helper.directive';

@NgModule({
  imports: [
  ],
  declarations: [
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
export class ThreeWrapperModule { }
