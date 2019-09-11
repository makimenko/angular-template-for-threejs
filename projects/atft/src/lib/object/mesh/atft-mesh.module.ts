import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BoxMeshComponent} from './box-mesh.component';
import {CylinderMeshComponent} from './cylinder-mesh.component';
import {FrameMeshComponent} from './frame-mesh.component';
import {PlaneMeshComponent} from './plane-mesh.component';
import {SphereMeshComponent} from './sphere-mesh.component';
import {TorusMeshComponent} from './torus-mesh.component';


@NgModule({
  declarations: [
    BoxMeshComponent,
    CylinderMeshComponent,
    FrameMeshComponent,
    PlaneMeshComponent,
    SphereMeshComponent,
    TorusMeshComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BoxMeshComponent,
    CylinderMeshComponent,
    FrameMeshComponent,
    PlaneMeshComponent,
    SphereMeshComponent,
    TorusMeshComponent
  ]
})
export class AtftMeshModule {
}
