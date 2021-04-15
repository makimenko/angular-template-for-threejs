import { Component, Input, Optional, SkipSelf } from '@angular/core';
import * as THREE from 'three';
import { RendererService } from '../../renderer/renderer.service';
import { appliedColor, provideParent } from '../../util';
import { AbstractObject3D } from '../abstract-object-3d';

@Component({
  selector: 'atft-point-light',
  providers: [provideParent(PointLightComponent)],
  template: '<ng-content></ng-content>'
})
export class PointLightComponent extends AbstractObject3D<THREE.PointLight> {

  @Input() color = '0xFFFFFF';
  @Input() intensity = 1;
  @Input() distance = 500;
  @Input() castShadow = false;

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>
  ) {
    super(rendererService, parent);
  }

  protected newObject3DInstance() {
    const light = new THREE.PointLight(appliedColor(this.color), this.intensity, this.distance);

    if (this.castShadow === true) {
      light.castShadow = this.castShadow;
      // TODO: props
      light.shadow.mapSize.width = 1024;
      light.shadow.mapSize.height = 1024;
      light.shadow.camera.near = 0.5;
      light.shadow.camera.far = 500;
      light.shadow.bias = -0.001;
      light.shadow.radius = 1;
    }

    return light;
  }

}
