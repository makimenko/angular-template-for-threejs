import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import * as THREE from 'three';
import {RendererService} from '../renderer/renderer.service';
import {provideParent} from '../util';
import {AbstractCamera} from './abstract-camera';

@Component({
  selector: 'atft-orthographic-camera',
  providers: [provideParent(OrthographicCameraComponent, AbstractCamera)],
  template: '<ng-content></ng-content>'
})
export class OrthographicCameraComponent extends AbstractCamera<THREE.OrthographicCamera> implements OnChanges {

  @Input() zoom = 1;

  constructor(
    protected rendererService: RendererService
  ) {
    super(rendererService);
  }

  protected createCamera(): void {
    // console.log('OrthographicCameraComponent.createCamera');

    this.camera = new THREE.OrthographicCamera(
      window.innerWidth / -2,
      window.innerWidth / 2,
      window.innerHeight / -2,
      window.innerHeight / 2,
      0.1,
      10000
    );
    this.updateZoom();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.camera) {
      return;
    }
    let mustRerender = false;

    if (['zoom'].some(propName => propName in changes)) {
      this.updateZoom();
      mustRerender = true;
    }

    if (mustRerender) {
      this.rendererService.render();
    }
  }

  protected updateZoom() {
    this.camera.zoom = this.zoom;
  }

  public updateAspectRatio(aspect: number) {
    // console.log('OrthographicCameraComponent.updateAspectRatio: ' + aspect);
    const frustumSize = 1000;
    this.camera.left = -frustumSize * aspect / 2;
    this.camera.right = frustumSize * aspect / 2;
    this.camera.top = frustumSize / 2;
    this.camera.bottom = -frustumSize / 2;
    this.camera.updateProjectionMatrix();
  }

}
