import {Component, Input, Optional, SkipSelf} from '@angular/core';
import {RendererService} from '../../renderer/renderer.service';
import {provideParent} from '../../util';
import {AbstractObject3D} from '../abstract-object-3d';
import {AbstractModelLoader} from './abstract-model-loader';
import {SvgDetails, SvgLoaderService} from './services';


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

  protected async loadLazyObject() {
    // console.log('ObjectLoaderComponent.loadLazyObject');
    const key: SvgDetails = {
      model: this.model,
      color: this._overrideMaterialColor,
      material: this.material,
      maxX: this.maxX,
      maxY: this.maxY,
      depthWrite: this.depthWrite,
      centered: this.centered
    };
    return this.svgLoader.load(this.model, key);
  }


}
