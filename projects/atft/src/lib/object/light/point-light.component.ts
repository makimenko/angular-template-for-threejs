import {AfterViewInit, Component, Input, OnInit, Optional, SkipSelf} from '@angular/core';
import * as THREE from 'three';
import { RendererService } from '../../renderer/renderer.service';
import { provideParent } from '../../util';
import { AbstractObject3D } from '../abstract-object-3d';

@Component({
  selector: 'atft-point-light',
  providers: [provideParent(PointLightComponent)],
  template: '<ng-content></ng-content>'
})
export class PointLightComponent extends AbstractObject3D<THREE.PointLight> implements OnInit, AfterViewInit {

  @Input() color: string | number = '#FFFFFF';
  @Input() intensity = 1;
  @Input() distance = 500;
  @Input() castShadow = false;

  constructor(
    protected override rendererService: RendererService,
    @SkipSelf() @Optional() protected override parent: AbstractObject3D<any>
  ) {
    super(rendererService, parent);
  }

  protected newObject3DInstance() {
    const light = new THREE.PointLight(this.color, this.intensity, this.distance);

    // light.power = 1600 ;
    // console.info("PointLightComponent.newObject3DInstance", this)
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

  public override ngOnInit(): void {
    // console.info("PointLightComponent.ngOnInit", this)
    super.ngOnInit();
  }

  public override ngAfterViewInit(): void {
    // console.info("PointLightComponent.ngAfterViewInit", this)
    super.ngAfterViewInit();
  }
}
