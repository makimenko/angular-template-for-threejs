import {Component, Input, Optional, SkipSelf} from '@angular/core';
import * as THREE from 'three';
import {RendererService} from '../../renderer/renderer.service';
import {appliedMaterial, provideParent} from '../../util';
import {fixCenter} from '../../util/fix-center';
import {AbstractLazyObject3D} from '../abstract-lazy-object-3d';
import {AbstractObject3D} from '../abstract-object-3d';

@Component({
  selector: 'atft-text-mesh',
  providers: [provideParent(TextMeshComponent)],
  template: '<ng-content></ng-content>'
})
export class TextMeshComponent extends AbstractLazyObject3D {

  @Input()
  material = 'basic';

  private _materialColor = 0xDADADA;
  @Input()
  set materialColor(materialColor: number) {
    // console.log('change color', materialColor);
    this._materialColor = materialColor;
    this.startLoading();
  }

  get materialColor() {
    return this._materialColor;
  }

  private _text = 'Text';
  @Input()
  set text(text: string) {
    this._text = text;
    this.startLoading();
  }

  get text() {
    return this._text;
  }


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

  @Input()
  castShadow = true;

  @Input()
  receiveShadow = true;

  @Input()
  depthWrite = true;

  @Input()
  centered = true;

  protected fontCache: THREE.Font;

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>
  ) {
    super(rendererService, parent);
  }

  public getMaterial(): THREE.Material {
    return appliedMaterial(this.materialColor, this.material, this.depthWrite);
  }

  protected async loadLazyObject(): Promise<THREE.Object3D> {
    // console.log('TextMeshComponent.loadLazyObject');

    if (this.fontCache) {
      return new Promise<THREE.Object3D>(resolve => {
        resolve(this.getTextMesh(this.fontCache));
      });
    } else {
      return new Promise<THREE.Object3D>(resolve => {
        const loader = new THREE.FontLoader();
        loader.load(this.fontUrl, font => {
          this.fontCache = font;
          resolve(this.getTextMesh(font));
        });
      });
    }
  }

  protected getTextMesh(font: THREE.Font): THREE.Mesh {
    // console.log('TextMeshComponent.getTextMesh');
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

    const material = this.getMaterial();
    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = this.castShadow;
    mesh.receiveShadow = this.receiveShadow;

    if (this.centered) {
      fixCenter(mesh);
    }
    return mesh;
  }


}
