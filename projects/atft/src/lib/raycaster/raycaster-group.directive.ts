import {AfterViewInit, Directive, EventEmitter, OnDestroy, Output} from '@angular/core';
import {AbstractObject3D} from '../object/abstract-object-3d';
import {RaycasterService} from './raycaster.service';
import {RaycasterEvent} from './raycaster-event';

/**
 * Only components marked as atft-raycaster-group emit raycaster events.
 * NOTE: All childs are also considered by raycaster (very usefull, for composite components).
 */
@Directive({selector: '[atft-raycaster-group]'})
export class RaycasterGroupDirective implements AfterViewInit, OnDestroy {

  @Output() mouseEnter = new EventEmitter<void | any>();
  @Output() mouseExit = new EventEmitter<void | AbstractObject3D<any>>();
  @Output() click = new EventEmitter<void | AbstractObject3D<any>>();

  constructor(
    private host: AbstractObject3D<any>,
    private raycasterService: RaycasterService
  ) {
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseExit = this.onMouseExit.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  ngAfterViewInit(): void {
    this.raycasterService.addGroup(this.host);
    this.subscribeEvents();
  }

  private subscribeEvents() {
    const obj = this.host.getObject();
    obj.addEventListener(RaycasterEvent.mouseEnter, this.onMouseEnter);
    obj.addEventListener(RaycasterEvent.mouseExit, this.onMouseExit);
    obj.addEventListener(RaycasterEvent.click, this.onClick);
  }

  private unSubscribeEvents() {
    const obj = this.host.getObject();
    if (obj) {
      obj.removeEventListener(RaycasterEvent.mouseEnter, this.onMouseEnter);
      obj.removeEventListener(RaycasterEvent.mouseExit, this.onMouseExit);
      obj.removeEventListener(RaycasterEvent.click, this.onClick);
    }
  }

  private onMouseExit() {
    this.mouseExit.emit(this.host);
  }

  private onMouseEnter(event) {
    // console.log('RaycasterGroupDirective.onMouseEnter', event);
    this.mouseEnter.emit(event);
  }

  private onClick(event) {
    // console.log('onClick', event);
    this.click.emit(event);
  }

  ngOnDestroy(): void {
    this.unSubscribeEvents();
  }

}
