import { Component, Input, Optional, SkipSelf } from '@angular/core';
import * as THREE from 'three';
import { RendererService } from '../../renderer/renderer.service';
import { provideParent } from '../../util';
import { appliedColor } from '../../util/applied-color';
import { AbstractObject3D } from '../abstract-object-3d';

@Component({
  selector: 'atft-hemisphere-light',
  providers: [provideParent(HemisphereLightComponent)],
  template: '<ng-content></ng-content>'
})
export class HemisphereLightComponent extends AbstractObject3D<THREE.HemisphereLight> {

  @Input() skyColor = 0xffffff;
  @Input() groundColor = 0x444444;
  @Input() intensity = 1;

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>
  ) {
    super(rendererService, parent);
  }

  protected newObject3DInstance() {

    const light = new THREE.HemisphereLight(
      appliedColor(this.skyColor),
      appliedColor(this.groundColor),
      appliedColor(this.intensity)
    );

    return light;
  }

}
