import {Component, Input, Optional, SkipSelf} from '@angular/core';
import {RendererService} from '../../renderer/renderer.service';
import {appliedColor, appliedMaterial, fixCenter, provideParent, scaleToFit} from '../../util';
import {AbstractObject3D} from '../abstract-object-3d';
import {AbstractModelLoader} from './abstract-model-loader';
import {SvgLoaderService} from './services';
import * as THREE from 'three';
import {Shape} from 'three';

@Component({
  selector: 'atft-svg-loader',
  providers: [provideParent(SVGLoaderComponent)],
  template: '<ng-content></ng-content>'
})
export class SVGLoaderComponent extends AbstractModelLoader {

  @Input()
  get overrideMaterialColor(): number {
    return this._overrideMaterialColor;
  }

  set overrideMaterialColor(value: number) {
    this._overrideMaterialColor = value;
    if (this.object) {
      this.startLoading();
    }
  }

  private _overrideMaterialColor: number = undefined;


  @Input()
  material = 'basic';

  @Input()
  depthWrite = true;

  @Input()
  maxX: number;

  @Input()
  maxY: number;

  @Input()
  centered = true;

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>,
    protected svgLoader: SvgLoaderService
  ) {
    super(rendererService, parent);
  }

  protected async loadLazyObject(): Promise<THREE.Object3D> {
    // console.log('SVGLoaderComponent.loadLazyObject');

    const paths = await this.svgLoader.load(this.model);
    const group = new THREE.Group();

    for (const path of paths) {
      const color = (this._overrideMaterialColor ? appliedColor(this._overrideMaterialColor) : path.color);
      const material = appliedMaterial(color, this.material, this.depthWrite);
      const shapes: Shape[] = path.toShapes(false, false);

      for (const shape of shapes) {
        const geometry = new THREE.ShapeBufferGeometry(shape);
        const mesh = new THREE.Mesh(geometry, material);
        group.add(mesh);
      }
    }

    if (this.maxX || this.maxY) {
      scaleToFit(group, new THREE.Vector3(this.maxX, this.maxY, 0));
    }
    if (this.centered) {
      fixCenter(group);
    }

    return group;
  }


}
