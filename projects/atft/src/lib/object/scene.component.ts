import {Component, forwardRef, Input} from '@angular/core';
import * as THREE from 'three';
import {AbstractObject3D} from './abstract-object-3d';
import {appliedColor} from '../util/applied-color';
import {RendererService} from '../renderer/renderer.service';

@Component({
  selector: 'atft-scene',
  providers: [{provide: AbstractObject3D, useExisting: forwardRef(() => SceneComponent)}],
  template: '<ng-content></ng-content>'
})
export class SceneComponent extends AbstractObject3D<THREE.Scene> {

  @Input() background = 0xffffff;
  @Input() fog = false;
  @Input() fogColor = 0xa0a0a0;
  @Input() fogNear = 10;
  @Input() fogFar = 500;

  constructor(
    protected rendererService: RendererService
  ) {
    super(rendererService);
  }

  protected newObject3DInstance(): THREE.Scene {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(appliedColor(this.background));
    if (this.fog === true) {
      scene.fog = new THREE.Fog(appliedColor(this.fogColor), this.fogNear, this.fogFar);
    }
    return scene;
  }

}
