import {Component, forwardRef, Input} from '@angular/core';
import * as THREE from 'three';
import {AbstractObject3D} from '../abstract-object-3d';
import {AbstractConnector} from './abstract-connector';

@Component({
  selector: 'atft-line-connector',
  providers: [{provide: AbstractObject3D, useExisting: forwardRef(() => LineConnectorComponent)}],
  template: '<ng-content></ng-content>'
})
export class LineConnectorComponent extends AbstractConnector<THREE.Line> {

  @Input()
  materialColor = 0xff0000;

  // TODO: move to abstract?
  private geometry: THREE.Geometry;

  public createConnectorObject(): THREE.Line {
    this.geometry = this.getLineGeometry();

    // TODO: move to utils
    let appliedColor = 0xffff00;
    if (this.materialColor !== undefined) {
      appliedColor = this.materialColor * 1;
    }
    const material = new THREE.LineBasicMaterial({
      color: appliedColor,
      /**
       * NOTE: linewidth=1: Due to limitations of the OpenGL Core Profile
       * with the WebGL renderer on most platforms linewidth will always be 1
       * regardless of the set value.
       */
      linewidth: 1
    });

    const line = new THREE.Line(this.geometry, material);

    return line;
  }

  updateLineGeometry(): void {
    this.geometry.verticesNeedUpdate = true;
    this.render.emit();
  }

}
