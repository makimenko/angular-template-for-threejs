import {AfterViewInit, Directive, EventEmitter, OnDestroy, Output} from '@angular/core';
import {AbstractObject3D} from '../object/abstract-object-3d';
import {RaycasterService} from './raycaster.service';
import {RaycasterEvent} from './raycaster-event';
import * as THREE from 'three';

export interface RaycasterEmitEvent {
  component: AbstractObject3D<any>;
  face?: THREE.Face;
}

/**
 * Only components marked as atft-raycaster-group emit raycaster events.
 * NOTE: All childs are also considered by raycaster (very usefull, for composite components).
 */
@Directive({selector: '[atft-raycaster-group]'})
export class RaycasterGroupDirective implements AfterViewInit, OnDestroy {

  @Output() mouseEnter = new EventEmitter<RaycasterEmitEvent>();
  @Output() mouseExit = new EventEmitter<RaycasterEmitEvent>();
  @Output() click = new EventEmitter<RaycasterEmitEvent>();

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
    this.mouseExit.emit({
      component: this.host
    });
  }

  private onMouseEnter(event : any) {
    // console.log('RaycasterGroupDirective.onMouseEnter', event);
    this.mouseEnter.emit({
      component: this.host,
      face: event.face
    });
  }

  private onClick(event : any) {
    // console.log('onClick', event);
    this.click.emit({
      component: this.host,
      face: event.face
    });
  }

  ngOnDestroy(): void {
    this.unSubscribeEvents();
  }

}
