import { Component, Input, Optional, SkipSelf } from '@angular/core';
import * as THREE from 'three';
import { RendererService } from '../../renderer/renderer.service';
import { provideParent } from '../../util';
import { appliedColor } from '../../util/applied-color';
import { AbstractObject3D } from '../abstract-object-3d';
import { AbstractConnector } from './abstract-connector';

@Component({
  selector: 'atft-line-connector',
  providers: [provideParent(LineConnectorComponent)],
  template: '<ng-content></ng-content>'
})
export class LineConnectorComponent extends AbstractConnector<THREE.Line> {

  @Input()
  materialColor = 0xffff00;

  // TODO: move to abstract?
  private geometry: THREE.BufferGeometry;

  private line: THREE.Line;

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>
  ) {
    super(rendererService, parent);
  }

  public createConnectorObject(): THREE.Line {
    this.geometry = this.getLineGeometry();

    const material = new THREE.LineBasicMaterial({
      color: appliedColor(this.materialColor),
      /**
       * NOTE: linewidth=1: Due to limitations of the OpenGL Core Profile
       * with the WebGL renderer on most platforms linewidth will always be 1
       * regardless of the set value.
       */
      linewidth: 1
    });

    this.line = new THREE.Line(this.geometry, material);

    return this.line;
  }

  updateLineGeometry(): void {
    this.geometry = this.getLineGeometry();
    this.line.geometry = this.geometry;
    this.rendererService.render();
  }

}
