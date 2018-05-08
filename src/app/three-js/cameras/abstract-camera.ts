import { AfterViewInit, Input, QueryList, ContentChildren } from '@angular/core';
import * as THREE from 'three';

export abstract class AbstractCamera<T extends THREE.Camera> implements AfterViewInit {

  camera: T;

  constructor() {
    console.log('AbstractCamera.constructor');
  }

  public ngAfterViewInit(): void {
    console.log('AbstractCamera.ngAfterViewInit');
    this.afterInit();
  }

  protected abstract afterInit(): void;

  public abstract updateAspectRatio(aspect: number);

}
