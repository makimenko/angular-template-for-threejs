import {
  AfterViewInit,
  ContentChildren,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  QueryList,
  SimpleChanges,
  ViewChildren
} from '@angular/core';
import * as THREE from 'three';

export abstract class AbstractObject3D<T extends THREE.Object3D> implements AfterViewInit, OnChanges {

  @ContentChildren(AbstractObject3D, {descendants: false}) childNodes: QueryList<AbstractObject3D<THREE.Object3D>>;

  @ViewChildren(AbstractObject3D) viewChilds: QueryList<AbstractObject3D<THREE.Object3D>>;

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

  /**
   * Notify parent component, that scene rendering is required
   */
  @Output() render = new EventEmitter<void>();

  @Output() mouseEnter = new EventEmitter<void>();
  @Output() mouseExit = new EventEmitter<void>();
  @Output() mouseDown = new EventEmitter<void>();

  private object: T;

  public ngOnChanges(changes: SimpleChanges) {
    if (!this.object) {
      return;
    }

    let mustRerender = false;

    if (['rotateX', 'rotateY', 'rotateZ'].some(propName => propName in changes)) {
      this.applyRotation();
      mustRerender = true;
    }
    if (['translateX', 'translateY', 'translateZ'].some(propName => propName in changes)) {
      this.applyTranslation();
      mustRerender = true;
    }

    if (mustRerender) {
      this.render.emit();
    }
  }

  public ngAfterViewInit(): void {
    // console.log('AbstractObject3D.ngAfterViewInit');
    this.object = this.newObject3DInstance();

    this.applyTranslation();
    this.applyRotation();

    if (this.childNodes !== undefined && this.childNodes.length > 1) {
      this.childNodes.filter(i => i !== this && i.getObject() !== undefined).forEach(i => {
        // console.log("Add childNodes for ", this.constructor.name, i);
        this.addChild(i.getObject());
      });
    } else {
      // console.log("No child Object3D for: " + this.constructor.name);
    }

    if (this.viewChilds !== undefined && this.viewChilds.length > 0) {
      this.viewChilds.filter(i => i !== this && i.getObject() !== undefined).forEach(i => {
        // console.log("Add viewChilds for ", this.constructor.name, i);
        this.addChild(i.getObject());
      });
    } else {
      // console.log("No child Object3D for: " + this.constructor.name);
    }

    this.object.addEventListener('mouseExit', () => {
      this.mouseExit.emit();
    });

    this.object.addEventListener('mouseEnter', () => {
      this.mouseEnter.emit();
    });

    this.object.addEventListener('mouseDown', () => {
      this.mouseDown.emit();
    });

    this.afterInit();
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

  protected addChild(object: THREE.Object3D): void {
    this.object.add(object);
  }

  protected removeChild(object: THREE.Object3D): void {
    this.object.remove(object);
  }

  public getObject(): T {
    return this.object;
  }

  protected afterInit() {
  }

  protected abstract newObject3DInstance(): T;


}
