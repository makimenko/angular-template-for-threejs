import {
  AfterViewInit,
  Directive,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  SimpleChanges,
  SkipSelf
} from '@angular/core';
import * as THREE from 'three';
import {RendererService} from '../renderer/renderer.service';

@Directive()
export abstract class AbstractObject3D<T extends THREE.Object3D> implements AfterViewInit, OnChanges, OnDestroy, OnInit {

  /**
   * Rotation in Euler angles (radians) with order X, Y, Z.
   */
  @Input() rotateX: number;
  @Input() rotateY: number;
  @Input() rotateZ: number;

  /**
   * Translate the geometry. This is typically done as a one time operation, and not during a loop.
   */
  @Input() translateX: number;
  @Input() translateY: number;
  @Input() translateZ: number;

  @Input() name: string;

  @Output() changed = new EventEmitter<void>();

  private object: T;

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>
  ) {
    // console.log('AbstractObject3D.constructor', this.name);
  }

  public ngOnChanges(changes: SimpleChanges) {
    // console.log('AbstractObject3D.ngOnChanges', this.name);
    if (!this.object) {
      return;
    }

    let modified = false;

    if (['rotateX', 'rotateY', 'rotateZ'].some(propName => propName in changes)) {
      this.applyRotation();
      modified = true;
    }
    if (['translateX', 'translateY', 'translateZ'].some(propName => propName in changes)) {
      this.applyTranslation();
      modified = true;
    }

    if (modified) {
      this.changed.emit();
    }

  }

  public ngOnDestroy() {
    // console.log('AbstractObject3D.OnDestroy', this.name);
    if (this.object && this.object.parent) {
      this.object.parent.remove(this.object);
      this.rendererService.render();
    }
  }

  public ngOnInit(): void {
    this.object = this.newObject3DInstance();

    this.applyTranslation();
    this.applyRotation();
    this.updateParent();

    this.afterInit();
  }

  private updateParent(): void {
    if (this.parent) {
      this.parent.addChild(this.object);
      this.rendererService.render();
    }
  }

  private applyRotation(): void {
    this.object.rotation.set(
      this.rotateX || 0,
      this.rotateY || 0,
      this.rotateZ || 0,
      'XYZ'
    );
  }

  private applyTranslation(): void {
    this.object.position.set(
      this.translateX || 0,
      this.translateY || 0,
      this.translateZ || 0
    );
  }

  public addChild(object: THREE.Object3D): void {
    // (this.constructor.name + ' addChild ' + object, this.object);
    if (this.object) {
      // console.log(this.constructor.name + ' add child ' + object);
      this.object.add(object);
      this.rendererService.render();
    }
  }

  protected removeChild(object: THREE.Object3D): void {
    this.object.remove(object);
  }

  public getObject(): T {
    return this.object;
  }

  protected afterInit() {
    // console.log('AbstractObject3D.afterInit', this.name);
    // this.created.emit(this.object);
    // this.changed.emit();
  }

  protected abstract newObject3DInstance(): T;

  ngAfterViewInit(): void {
  }

}
