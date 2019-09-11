import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PointLightComponent} from './point-light.component';
import {HemisphereLightComponent} from './hemisphere-light.component';
import {DirectionalLightComponent} from './directional-light.component';


@NgModule({
  declarations: [
    DirectionalLightComponent,
    HemisphereLightComponent,
    PointLightComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DirectionalLightComponent,
    HemisphereLightComponent,
    PointLightComponent
  ]
})
export class AtftLightModule {
}
