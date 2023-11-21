import {Component, Optional, SkipSelf, ViewChild} from '@angular/core';
import {EmptyComponent} from './helper/empty.component';
import {AbstractObject3D} from './abstract-object-3d';
import {RendererService} from '../renderer/renderer.service';
import {provideParent} from '../util';

@Component({
  selector: 'atft-content-projection',
  providers: [provideParent(ContentProjectionComponent)],
  template: '<ng-content></ng-content>'
})
export class ContentProjectionComponent extends EmptyComponent {

  @ViewChild('contentProjection') contentProjection!: AbstractObject3D<any>;

  constructor(
    protected override rendererService: RendererService,
    @SkipSelf() @Optional() protected override parent: AbstractObject3D<any>
  ) {
    super(rendererService, parent);
  }

  override addChild(object: AbstractObject3D<any>) {
    if (this.contentProjection) {
      this.contentProjection.addChild(object);
    } else {
      console.error('ContentProjectionComponent error: #contentProjection name not found! Embedded child object in "ng-content" can not be attached to parentScene object');
    }
  }

}
