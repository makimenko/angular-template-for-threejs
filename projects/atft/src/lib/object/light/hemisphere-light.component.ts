import { Component, Input, Optional, SkipSelf } from '@angular/core';
import * as THREE from 'three';
import { RendererService } from '../../renderer/renderer.service';
import { provideParent } from '../../util';
import { AbstractObject3D } from '../abstract-object-3d';

@Component({
  selector: 'atft-hemisphere-light',
  providers: [provideParent(HemisphereLightComponent)],
  template: '<ng-content></ng-content>'
})
export class HemisphereLightComponent extends AbstractObject3D<THREE.HemisphereLight> {

  @Input() skyColor: string | number = '#ffffff';
  @Input() groundColor: string | number = '#444444';
  @Input() intensity = 1;

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>
  ) {
    super(rendererService, parent);
  }

  protected newObject3DInstance() {

    const light = new THREE.HemisphereLight(
      this.skyColor,
      this.groundColor,
      this.intensity
    );

    return light;
  }

}
