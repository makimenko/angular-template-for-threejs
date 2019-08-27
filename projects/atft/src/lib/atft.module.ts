import { NgModule } from '@angular/core';

import { OrbitControlsComponent } from './controls/orbit-controls.component';
import { ObjLoaderComponent } from './objects/loaders/obj-loader.component';
import { Rad2DegPipe } from './pipes/rad2deg.pipe';
import { Deg2RadPipe } from './pipes/deg2rad.pipe';
import { PerspectiveCameraComponent } from './cameras/perspective-camera.component';
import { WebGLRendererComponent } from './renderer/webgl-renderer.component';
import { SceneComponent } from './objects/scene.component';
import { AxesHelperComponent } from './objects/helpers/axes-helper.component';
import { GridHelperComponent } from './objects/helpers/grid-helper.component';
import { ObjectLoaderComponent } from './objects/loaders/object-loader.component';
import { PointLightComponent } from './objects/light/point-light.component';
import { SpheremeshComponent } from './objects/primitive/spheremesh.component';
import { CylindermeshComponent } from './objects/primitive/cylindermesh.component';
import { TorusmeshComponent } from './objects/primitive/torusmesh.component';
import { EmptyComponent } from './objects/helpers/empty.component';


@NgModule({
  imports: [
  ],
  declarations: [
    OrbitControlsComponent,
    ObjLoaderComponent,
    Rad2DegPipe,
    Deg2RadPipe,
    PerspectiveCameraComponent,
    WebGLRendererComponent,
    SceneComponent,
    AxesHelperComponent,
    GridHelperComponent,
    ObjectLoaderComponent,
    PointLightComponent,
    CylindermeshComponent,
    TorusmeshComponent,
    SpheremeshComponent,
    EmptyComponent
  ],
  exports: [
    OrbitControlsComponent,
    ObjLoaderComponent,
    Rad2DegPipe,
    Deg2RadPipe,
    PerspectiveCameraComponent,
    WebGLRendererComponent,
    SceneComponent,
    AxesHelperComponent,
    GridHelperComponent,
    ObjectLoaderComponent,
    PointLightComponent,
    CylindermeshComponent,
    TorusmeshComponent,
    SpheremeshComponent,
    EmptyComponent
  ]
})
export class AtftModule { }
