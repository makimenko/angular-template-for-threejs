import { Component, Input, Optional, SkipSelf } from '@angular/core';
import * as THREE from 'three';
import { RendererService } from '../../renderer/renderer.service';
import { provideParent } from '../../util';
import { AbstractObject3D } from '../abstract-object-3d';

@Component({
  selector: 'atft-ambient-light',
  providers: [provideParent(AmbientLightComponent)],
  template: '<ng-content></ng-content>'
})
export class AmbientLightComponent extends AbstractObject3D<THREE.AmbientLight> {

  @Input() color: string | number = '#FFFFFF';
  @Input() intensity = 0.8;

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>
  ) {
    super(rendererService, parent);
  }

  protected newObject3DInstance() {
    const light = new THREE.AmbientLight(this.color);
    light.intensity = this.intensity;
    return light;
  }

}
