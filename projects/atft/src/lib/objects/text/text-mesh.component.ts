import {Component, forwardRef, Input} from '@angular/core';
import * as THREE from 'three';
import {AbstractObject3D} from '../abstract-object-3d';
import {AbstractLazyObject3D} from '../abstract-lazy-object-3d';

@Component({
  selector: 'atft-text-mesh',
  providers: [{provide: AbstractObject3D, useExisting: forwardRef(() => TextMeshComponent)}],
  template: '<ng-content></ng-content>'
})
export class TextMeshComponent extends AbstractLazyObject3D {

  @Input()
  material: string;

  @Input()
  materialColor: number;

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

  @Input()
  fontUrl = './assets/font/helvetiker_regular.typeface.json';

  constructor() {
    super();
    console.log('TextMeshComponent.constructor');
  }


  public getMaterial(): THREE.MeshBasicMaterial {
    // TODO: Extract to directive (or component)
    let appliedColor = 0x5DADE2;
    if (this.materialColor !== undefined) {
      appliedColor = this.materialColor * 1;
    }
    console.log('AbstractMesh.getMaterial.appliedColor: ', appliedColor);

    if (this.material === 'lamb') {
      return new THREE.MeshLambertMaterial({color: appliedColor});
    } else {
      return new THREE.MeshBasicMaterial({color: appliedColor});
    }
  }

  protected async loadLazyObject(): Promise<THREE.Object3D> {
    console.log('TextMeshComponent.loadLazyObject');

    return new Promise<THREE.Object3D>(resolve => {
      const loader = new THREE.FontLoader();
      loader.load(this.fontUrl, font => {

        const geometry = new THREE.TextGeometry(this.text, {
          font: font,
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
        resolve(new THREE.Mesh(geometry, material));
      });
    });


  }

}
