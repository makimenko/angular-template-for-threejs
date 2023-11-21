import { Component, Input, Optional, SkipSelf } from '@angular/core';
import * as THREE from 'three';
import { RendererService } from '../../renderer/renderer.service';
import { provideParent } from '../../util';
import { AbstractObject3D } from '../abstract-object-3d';

@Component({
  selector: 'atft-directional-light',
  providers: [provideParent(DirectionalLightComponent)],
  template: '<ng-content></ng-content>'
})
export class DirectionalLightComponent extends AbstractObject3D<THREE.DirectionalLight> {

  @Input() color: string | number = '#FFFFFF';
  @Input() intensity = 1;
  // by default, target is 0,0,0
  @Input() target = new THREE.Object3D();
  @Input() castShadow = true;

  constructor(
    protected override rendererService: RendererService,
    @SkipSelf() @Optional() protected override parent: AbstractObject3D<any>
  ) {
    super(rendererService, parent);
  }

  protected newObject3DInstance() {

    const light = new THREE.DirectionalLight(
      this.color,
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
