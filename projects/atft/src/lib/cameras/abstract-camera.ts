import {AfterViewInit, Input, QueryList, ContentChildren, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';
import * as THREE from 'three';

export abstract class AbstractCamera<T extends THREE.Camera> implements AfterViewInit, OnChanges {

  camera: T;

  @Input() positionX: number;
  @Input() positionY: number;
  @Input() positionZ: number;

  @Output() render = new EventEmitter<void>();

  constructor() {
    console.log('AbstractCamera.constructor');
  }

  public ngAfterViewInit(): void {
    console.log('AbstractCamera.ngAfterViewInit');
    this.afterInit();
  }

  protected abstract afterInit(): void;

  public abstract updateAspectRatio(aspect: number);

  ngOnChanges(changes: SimpleChanges): void {
    let mustRerender = false;

    if (['positionX', 'positionY', 'positionZ'].some(propName => propName in changes)) {
      this.applyPosition();
      mustRerender = true;
    }

    if (mustRerender) {
      this.render.emit();
    }

  }

  protected applyPosition() {
    if (this.camera) {
      this.camera.position.set(
        this.positionX || 0,
        this.positionY || 0,
        this.positionZ || 0,
      );
    }
  }

}
