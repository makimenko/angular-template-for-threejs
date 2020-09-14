import { AfterViewInit, Input, OnChanges, SimpleChanges, Directive } from '@angular/core';
import * as THREE from 'three';
import {RendererService} from '../renderer/renderer.service';

@Directive()
export abstract class AbstractCamera<T extends THREE.Camera> implements AfterViewInit, OnChanges {

  camera: T;

  @Input() positionX: number;
  @Input() positionY: number;
  @Input() positionZ: number;

  @Input() zAxisUp = false;

  constructor(
    protected rendererService: RendererService
  ) {
    // console.log('AbstractCamera.constructor');
  }

  public ngAfterViewInit(): void {
    // console.log('AbstractCamera.ngAfterViewInit');
    this.createCamera();

    this.applyZAxisUp();
    this.applyPosition();

    // TODO: Directive?
    this.rendererService.setCamera(this);
  }

  protected abstract createCamera(): void;

  public abstract updateAspectRatio(aspect: number);

  ngOnChanges(changes: SimpleChanges): void {
    let mustRerender = false;

    if (['positionX', 'positionY', 'positionZ'].some(propName => propName in changes)) {
      this.applyPosition();
      mustRerender = true;
    }

    if (mustRerender) {
      this.rendererService.render();
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

  protected applyZAxisUp() {
    if (this.camera && this.zAxisUp) {
      // Z axis up (similarly to 3D Creation Software: Blender, 3DS Max)
      this.camera.up.set(0, 0, 1);
    }
  }

}
