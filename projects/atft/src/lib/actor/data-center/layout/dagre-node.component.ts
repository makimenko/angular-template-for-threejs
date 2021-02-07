import {Component, Injector, Input, Optional, SkipSelf} from '@angular/core';
import {AbstractObject3D, EmptyComponent} from '../../../object';
import {provideParent} from '../../../util';
import {RendererService} from '../../../renderer';
import {DagreLayoutComponent} from './dagre-layout.component';

@Component({
  selector: 'atft-dagre-node',
  providers: [provideParent(DagreNodeComponent)],
  template: '<ng-content></ng-content>'
})
export class DagreNodeComponent extends EmptyComponent {

  @Input() composition: string;

  @Input() translateZ = 1;

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>,
    protected injector: Injector
  ) {
    super(rendererService, parent);

    const dagreLayout: DagreLayoutComponent = this.injector.get<DagreLayoutComponent>(DagreLayoutComponent);
    console.log('DagreNodeComponent.constructor dagreLayout', dagreLayout);
  }


}
