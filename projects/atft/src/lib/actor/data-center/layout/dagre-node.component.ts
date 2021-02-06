import {Component, Input} from '@angular/core';
import {AbstractObject3D, EmptyComponent} from '../../../object';
import {provideParent} from '../../../util';

@Component({
  selector: 'atft-dagre-node',
  providers: [provideParent(DagreNodeComponent)],
  template: '<ng-content></ng-content>'
})
export class DagreNodeComponent extends EmptyComponent {

  @Input() composition: AbstractObject3D<any>;

  @Input() translateZ = 1;
}
