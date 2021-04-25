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

  color: string | number = '#ffffff';

  @Input()
  showFrame = true;

  public onSelected() {
    // console.log('ServerActorComponent.onSelected');
    this.color = '#fff0f0';
  }

  public onDeselected() {
    // console.log('ServerActorComponent.onDeselected');
    this.color = '#ffffff';
  }

  public onClick() {
    console.log('ServerActorComponent.onClick');
    this.color = '#ffa0a0';
    this.actorClick.emit();
  }

}
