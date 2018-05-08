import { AfterViewInit, Input, QueryList, ContentChildren } from '@angular/core';
import * as THREE from 'three';

export abstract class AbstractObject3D<T extends THREE.Object3D> implements AfterViewInit {

  @ContentChildren(AbstractObject3D, { descendants: false }) childNodes: QueryList<AbstractObject3D<THREE.Object3D>>;

  @Input() rotateX: number;
  @Input() rotateY: number;
  @Input() rotateZ: number;

  @Input() translateX: number;
  @Input() translateY: number;
  @Input() translateZ: number;

  private object: T;

  public ngAfterViewInit(): void {
    console.log('AbstractObject3D.ngAfterViewInit');
    this.object = this.newObject3DInstance();

    this.applyTranslation();
    this.applyRotation();

    if (this.childNodes !== undefined && this.childNodes.length > 1) {
      this.childNodes.filter(i => i !== this && i.getObject() !== undefined).forEach(i => {
        // console.log("Add child for " + this.constructor.name);
        // console.log(i);
        this.addChild(i.getObject());
      });
    } else {
      // console.log("No child Object3D for: " + this.constructor.name);
    }

    this.afterInit();
  }

  private applyRotation(): void {
    if (this.rotateX !== undefined) { this.object.rotateX(this.rotateX); }
    if (this.rotateY !== undefined) { this.object.rotateY(this.rotateY); }
    if (this.rotateZ !== undefined) { this.object.rotateZ(this.rotateZ); }
  }

  private applyTranslation(): void {
    if (this.translateX !== undefined) { this.object.translateX(this.translateX); }
    if (this.translateY !== undefined) { this.object.translateY(this.translateY); }
    if (this.translateZ !== undefined) { this.object.translateZ(this.translateZ); }
  }

  protected addChild(object: THREE.Object3D): void {
    this.object.add(object);
  }

  public getObject(): T {
    return this.object;
  }

  protected abstract newObject3DInstance(): T;

  protected abstract afterInit(): void;

}
