import {Component, Input, Optional, SkipSelf} from '@angular/core';
import {RendererService} from '../../renderer/renderer.service';
import {appliedMaterial, fixCenter, provideParent, scaleToFit} from '../../util';
import {AbstractObject3D} from '../abstract-object-3d';
import {AbstractModelLoader} from './abstract-model-loader';
import {IconService, SvgLoaderService} from './services';
import * as THREE from 'three';


@Component({
  selector: 'atft-svg-loader',
  providers: [provideParent(SVGLoaderComponent)],
  template: '<ng-content></ng-content>'
})
export class SVGLoaderComponent extends AbstractModelLoader {

  @Input()
  get overrideMaterialColor(): string | undefined {
    return this._overrideMaterialColor;
  }

  set overrideMaterialColor(value: string | undefined) {
    this._overrideMaterialColor = value;
    if (this.object) {
      this.startLoading();
    }
  }

  @Input()
  set icon(icon: string) {
    // console.log('SVGLoaderComponent.icon', icon);
    const iconProvider = this.iconService.getSource(icon);
    this.model = iconProvider.url;
    this.isCCW = iconProvider.isCCW;
    this.noHoles = iconProvider.noHoles;
    if (!iconProvider.allowColorOverride) {
      this.overrideMaterialColor = undefined;
    }
  }

  get icon(): string {
    return this.model;
  }
  private _overrideMaterialColor: string | undefined = undefined;


  @Input()
  material = 'basic';

  @Input()
  depthWrite = true;

  @Input()
  maxX!: number;

  @Input()
  maxY!: number;

  @Input()
  centered = true;

  @Input()
  isCCW = false;

  @Input()
  noHoles = false;

  constructor(
    protected override rendererService: RendererService,
    @SkipSelf() @Optional() protected override parent: AbstractObject3D<any>,
    protected svgLoader: SvgLoaderService,
    protected iconService: IconService
  ) {
    super(rendererService, parent);
  }

  public async loadLazyObject(): Promise<THREE.Object3D> {
    // console.log('SVGLoaderComponent.loadLazyObject', this.model);

    const paths = await this.svgLoader.load(this.model);
    const group = new THREE.Group();

    for (const path of paths) {
      const color = (this._overrideMaterialColor ? this._overrideMaterialColor : path.color);
      const material = appliedMaterial(color, this.material, this.depthWrite);
      const shapes: THREE.Shape[] = path.toShapes(this.isCCW/*, this.noHoles*/);

      for (const shape of shapes) {
        const geometry = new THREE.ShapeGeometry(shape);
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
