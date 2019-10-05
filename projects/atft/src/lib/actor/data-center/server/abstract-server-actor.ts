import {Component, EventEmitter, forwardRef, Input, Output, TemplateRef, ViewChild} from '@angular/core';
import {AbstractObject3D} from '../../../object/abstract-object-3d';
import {EmptyComponent} from '../../../object/helper';

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
