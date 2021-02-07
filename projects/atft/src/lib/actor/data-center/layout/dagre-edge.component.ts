import {Component, Input} from '@angular/core';
import {MeshLineConnectorComponent} from '../../../object';
import {provideParent} from '../../../util';
import * as THREE from 'three';

@Component({
  selector: 'atft-dagre-edge',
  providers: [provideParent(DagreEdgeComponent)],
  template: '<ng-content></ng-content>'
})
export class DagreEdgeComponent extends MeshLineConnectorComponent {

  public positions: Array<number>;

  public animated = true;

  @Input() from: string;
  @Input() to: string;

  protected getLineGeometry(): THREE.BufferGeometry {
    if (this.source || this.target) {
      console.warn('DagreEdgeComponent.getLineGeometry source/target inputs ignored. Please use from/to instead');
    }
    if (!this.from || !this.to) {
      throw new Error('DagreEdgeComponent: from or to inputs are missing!');
    }
    // console.log('DagreCompositionComponent.getLineGeometry', this.positions);
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(this.positions, 3));
    return geometry;
  }

}
