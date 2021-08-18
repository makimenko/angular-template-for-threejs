import {Component, Input} from '@angular/core';
import {provideParent} from '../../../util';
import {EmptyComponent} from '../../../object';


@Component({
  selector: 'atft-theme',
  providers: [provideParent(ThemeComponent)],
  template: '<ng-content></ng-content>'
})
export class ThemeComponent extends EmptyComponent {

  @Input() raised = false;

}
