import {Component, forwardRef, Input} from '@angular/core';
import * as THREE from 'three';
import {AbstractObject3D} from '../abstract-object-3d';
import {appliedColor} from '../../util/applied-color';

@Component({
  selector: 'atft-hemisphere-light',
  providers: [{ provide: AbstractObject3D, useExisting: forwardRef(() => HemisphereLightComponent) }],
  template: '<ng-content></ng-content>'
})
export class HemisphereLightComponent extends AbstractObject3D<THREE.HemisphereLight> {

  @Input() skyColor = 0xffffff;
  @Input() groundColor = 0x444444;
  @Input() intensity = 1;

  protected newObject3DInstance() {

    const light = new THREE.HemisphereLight(
      appliedColor(this.skyColor),
      appliedColor(this.groundColor),
      appliedColor(this.intensity)
    );

    return light;
  }

}
