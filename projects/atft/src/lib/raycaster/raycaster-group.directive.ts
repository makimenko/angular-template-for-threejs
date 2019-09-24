import {AfterViewInit, Directive, EventEmitter, Output} from '@angular/core';
import {AbstractObject3D} from '../object/abstract-object-3d';
import {RaycasterService} from './raycaster.service';
import * as THREE from 'three';

/**
 * Only components marked as atft-raycaster-group emit raycaster events.
 * NOTE: All childs are also considered by raycaster (very usefull, for composite components).
 */
@Directive({selector: '[atft-raycaster-group]'})
export class RaycasterGroupDirective implements AfterViewInit {


  @Output() mouseEnter = new EventEmitter<void>();
  @Output() mouseExit = new EventEmitter<void>();
  @Output() mouseDown = new EventEmitter<void>();


  constructor(
    private host: AbstractObject3D<any>,
    private raycasterService: RaycasterService
  ) {

  }

  ngAfterViewInit(): void {
    this.raycasterService.addGroup(this.host);
    this.listenMouseEvents(this.host.getObject());
  }


  protected listenMouseEvents(object: THREE.Object3D) {
    object.addEventListener('mouseExit', () => {
      this.mouseExit.emit();
    });

    object.addEventListener('mouseEnter', () => {
      this.mouseEnter.emit();
    });

    object.addEventListener('mouseDown', () => {
      this.mouseDown.emit();
    });
  }

}
