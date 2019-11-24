import {EventEmitter, Input, Output} from '@angular/core';
import {EmptyComponent} from '../../../object/helper/empty.component';

export abstract class AbstractServerActor extends EmptyComponent {

  @Input()
  label: string;

  @Output()
  render = new EventEmitter<void>();

  @Output()
  selected = new EventEmitter<void>();

  @Output()
  deselected = new EventEmitter<void>();

  @Input()
  svgName: string;

  color = 0xffffff;

  @Input()
  showFrame = true;

  public onSelected() {
    // console.log('ServerActorComponent.onSelected');
    this.color = 0xfff0f0;
  }

  public onDeselected() {
    // console.log('ServerActorComponent.onDeselected');
    this.color = 0xffffff;
  }

  public onClick() {
    // console.log('ServerActorComponent.onClick');
    this.color = 0xffa0a0;
  }

}
