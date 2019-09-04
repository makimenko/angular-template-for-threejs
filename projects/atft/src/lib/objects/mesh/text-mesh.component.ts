import {Component, forwardRef, Input} from '@angular/core';
import * as THREE from 'three';
import {AbstractMesh} from './abstract-mesh-3d';
import {AbstractObject3D} from '../abstract-object-3d';
import {mockFont} from './mock-font';

@Component({
  selector: 'atft-text-mesh',
  providers: [{provide: AbstractObject3D, useExisting: forwardRef(() => TextMeshComponent)}],
  template: '<ng-content></ng-content>'
})
export class TextMeshComponent extends AbstractMesh {

  @Input()
  text = 'Text';

  @Input()
  size = 10;

  @Input()
  height = 0.3;

  @Input()
  curveSegments = 2;

  @Input()
  bevelEnabled = false;

  @Input()
  bevelThickness = 0.1;

  @Input()
  bevelSize = 0.1;

  @Input()
  bevelOffset = 0;

  @Input()
  bevelSegments = 1;

  constructor() {
    super();
    console.log('TextMeshComponent.constructor');
  }

  protected newObject3DInstance(): THREE.Mesh {
    console.log('TextMeshComponent.newObject3DInstance');
    const geometry = new THREE.TextGeometry(this.text, {
      font: this.getFont(),
      size: this.size,
      height: this.height,
      curveSegments: this.curveSegments,
      bevelEnabled: this.bevelEnabled,
      bevelThickness: this.bevelThickness,
      bevelSize: this.bevelSize,
      bevelOffset: this.bevelOffset,
      bevelSegments: this.bevelOffset
    });
    const material: THREE.MeshBasicMaterial = this.getMaterial();
    return new THREE.Mesh(geometry, material);
  }

  private getFont(): THREE.Font {
    // TODO: move FontLoader to service
    const loader = new THREE.FontLoader();
    return loader.parse(mockFont);
  }


}
