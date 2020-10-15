import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PointLightComponent} from './point-light.component';
import {HemisphereLightComponent} from './hemisphere-light.component';
import {DirectionalLightComponent} from './directional-light.component';
import {AmbientLightComponent} from './ambient-light.component';


@NgModule({
  declarations: [
    DirectionalLightComponent,
    HemisphereLightComponent,
    PointLightComponent,
    AmbientLightComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DirectionalLightComponent,
    HemisphereLightComponent,
    PointLightComponent,
    AmbientLightComponent
  ]
})
export class AtftLightModule {
}
