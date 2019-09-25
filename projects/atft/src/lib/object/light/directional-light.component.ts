import {Component, forwardRef, Input} from '@angular/core';
import * as THREE from 'three';
import {AbstractObject3D} from '../abstract-object-3d';
import {appliedColor} from '../../util/applied-color';
import {RendererService} from '../../renderer/renderer.service';

@Component({
  selector: 'atft-directional-light',
  providers: [{provide: AbstractObject3D, useExisting: forwardRef(() => DirectionalLightComponent)}],
  template: '<ng-content></ng-content>'
})
export class DirectionalLightComponent extends AbstractObject3D<THREE.DirectionalLight> {

  @Input() color = 0xffffff;
  @Input() intensity = 1;
  // by default, target is 0,0,0
  @Input() target = new THREE.Object3D();
  @Input() castShadow = true;

  constructor(
    protected rendererService: RendererService
  ) {
    super(rendererService);
  }

  protected newObject3DInstance() {

    const light = new THREE.DirectionalLight(
      appliedColor(this.color),
      this.intensity
    );

    light.target = this.target;

    if (this.castShadow === true) {
      light.castShadow = this.castShadow;
      // TODO: props
      light.shadow.camera.top = 100;
      light.shadow.camera.bottom = -100;
      light.shadow.camera.left = -100;
      light.shadow.camera.right = 100;
      light.shadow.camera.near = 0.1;
      light.shadow.camera.far = 500;
      light.shadow.mapSize.set(1024, 1024);
      light.shadow.bias = -0.001;

    }
    return light;

  }

}
