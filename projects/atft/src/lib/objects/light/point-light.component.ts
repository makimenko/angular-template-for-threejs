import {Component, forwardRef, Input} from '@angular/core';
import * as THREE from 'three';
import {AbstractObject3D} from '../abstract-object-3d';

@Component({
  selector: 'atft-point-light',
  providers: [{ provide: AbstractObject3D, useExisting: forwardRef(() => PointLightComponent) }],
  template: '<ng-content></ng-content>'
})
export class PointLightComponent extends AbstractObject3D<THREE.PointLight> {

  @Input() color: THREE.Color;
  @Input() intensity: number;
  @Input() distance: number;

  constructor() {
    super();
    // console.log('PointLightComponent.constructor');
  }

  protected newObject3DInstance(): THREE.PointLight {
    // console.log('PointLightComponent.newObject3DInstance');
    return new THREE.PointLight(this.color, this.intensity, this.distance);
  }

}
