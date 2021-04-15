import {Directive, EventEmitter, Input, Output} from '@angular/core';
import {AbstractEmptyDirective} from '../../../object';

@Directive()
export abstract class AbstractServerActor extends AbstractEmptyDirective {

  @Input()
  label: string;

  @Output()
  render = new EventEmitter<void>();

  @Output()
  selected = new EventEmitter<void>();

  @Output()
  deselected = new EventEmitter<void>();

  @Output()
  actorClick = new EventEmitter<void>();

  @Input()
  icon: string;

  color = '0xffffff';

  @Input()
  showFrame = true;

  public onSelected() {
    // console.log('ServerActorComponent.onSelected');
    this.color = '0xfff0f0';
  }

  public onDeselected() {
    // console.log('ServerActorComponent.onDeselected');
    this.color = '0xffffff';
  }

  public onClick() {
    console.log('ServerActorComponent.onClick');
    this.color = '0xffa0a0';
    this.actorClick.emit();
  }

}
