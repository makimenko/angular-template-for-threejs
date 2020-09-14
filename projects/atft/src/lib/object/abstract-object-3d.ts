import {
  AfterViewInit,
  ContentChildren,
  Directive,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  QueryList,
  SimpleChanges,
  ViewChildren
} from '@angular/core';
import * as THREE from 'three';
import {RendererService} from '../renderer/renderer.service';

@Directive()
export abstract class AbstractObject3D<T extends THREE.Object3D> implements AfterViewInit, OnChanges, OnDestroy {

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

  @Input() name: string;

  @Output() changed = new EventEmitter<void>();

  private object: T;

  constructor(protected rendererService: RendererService) {
    // console.log('AbstractObject3D.constructor');
    this.changed.subscribe(() => {
      this.rendererService.render();
    });

  }

  public ngOnChanges(changes: SimpleChanges) {
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
    // console.log('AbstractObject3D.OnDestroy');
    if (this.object && this.object.parent) {
      this.object.parent.remove(this.object);
    }
  }

  public ngAfterViewInit() {
    // console.log('AbstractObject3D.ngAfterViewInit ' + this.name);
    this.object = this.newObject3DInstance();

    this.applyTranslation();
    this.applyRotation();

    this.collectChilds();

    this.afterInit();
  }

  public collectChilds() {
    // console.log('Collect childs for', this.name);
    if (this.childNodes !== undefined && this.childNodes.length > 1) {
      this.childNodes.filter(i => i !== this && i.getObject() !== undefined).forEach(i => {
        // console.log('Add childNodes for', this.name, i);
        this.addChild(i.getObject());
      });
    } else {
      // console.log("No child Object3D for: " + this.constructor.label);
    }


    if (this.viewChilds !== undefined && this.viewChilds.length > 0) {
      this.viewChilds.filter(
        i => i !== this
          && i.getObject() !== undefined
          && !i.getObject().parent /* direct childs only */
      ).forEach(i => {
        // console.log('Add viewChilds for', this.name, i);
        this.addChild(i.getObject());
      });
    } else {
      // console.log("No child Object3D for: " + this.constructor.label);
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
    this.object.add(object);
  }

  protected removeChild(object: THREE.Object3D): void {
    this.object.remove(object);
  }

  public getObject(): T {
    return this.object;
  }

  protected afterInit() {
    // this.changed.emit();
  }

  protected abstract newObject3DInstance(): T;


}
