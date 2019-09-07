import {Component, forwardRef, Input} from '@angular/core';
import * as THREE from 'three';
import {AbstractObject3D} from '../abstract-object-3d';
import {appliedColor} from '../../utils';

@Component({
  selector: 'atft-point-light',
  providers: [{provide: AbstractObject3D, useExisting: forwardRef(() => PointLightComponent)}],
  template: '<ng-content></ng-content>'
})
export class PointLightComponent extends AbstractObject3D<THREE.PointLight> {

  @Input() color = 0xffffff;
  @Input() intensity = 1;
  @Input() distance = 500;
  @Input() castShadow = true;

  protected newObject3DInstance() {
    const light = new THREE.PointLight(appliedColor(this.color), this.intensity, this.distance);

    /* TODO: Glitch with shadow casting
    light.castShadow = this.castShadow;
    light.shadow.mapSize.width = 500;
    light.shadow.mapSize.height = 500;
    light.shadow.camera.near = 1;
    light.shadow.camera.far = 5000;
    light.intensity = 2;
    // light.shadow.radius = 20;
    */

    return light;
  }

}
