import {AfterViewInit, Directive, EventEmitter, OnDestroy, Output} from '@angular/core';
import {AbstractObject3D} from '../object/abstract-object-3d';
import {RaycasterService} from './raycaster.service';

/**
 * Only components marked as atft-raycaster-group emit raycaster events.
 * NOTE: All childs are also considered by raycaster (very usefull, for composite components).
 */
@Directive({selector: '[atft-raycaster-group]'})
export class RaycasterGroupDirective implements AfterViewInit, OnDestroy {

  @Output() mouseEnter = new EventEmitter<void>();
  @Output() mouseExit = new EventEmitter<void>();
  @Output() mouseDown = new EventEmitter<void>();

  constructor(
    private host: AbstractObject3D<any>,
    private raycasterService: RaycasterService
  ) {
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseExit = this.onMouseExit.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
  }

  ngAfterViewInit(): void {
    this.raycasterService.addGroup(this.host);
    this.subscribeEvents();
  }

  private subscribeEvents() {
    const obj = this.host.getObject();
    obj.addEventListener('mouseEnter', this.onMouseEnter);
    obj.addEventListener('mouseExit', this.onMouseExit);
    obj.addEventListener('mouseDown', this.onMouseDown);
  }

  private unSubscribeEvents() {
    const obj = this.host.getObject();
    obj.removeEventListener('mouseEnter', this.onMouseEnter);
    obj.removeEventListener('mouseExit', this.onMouseExit);
    obj.removeEventListener('mouseDown', this.onMouseDown);
  }

  private onMouseExit() {
    this.mouseExit.emit();
  }

  private onMouseEnter() {
    this.mouseEnter.emit();
  }

  private onMouseDown() {
    this.mouseDown.emit();
  }

  ngOnDestroy(): void {
    this.unSubscribeEvents();
  }

}
