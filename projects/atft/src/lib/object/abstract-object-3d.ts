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
import {v4 as uuidv4} from 'uuid';

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


  @Input() scaleX = 1;
  @Input() scaleY = 1;
  @Input() scaleZ = 1;

  @Input() name: string = uuidv4(); // if not provided, then auto-generate

  @Input() layer = 0;

  @Output() changed = new EventEmitter<void>();

  protected childlren: Array<AbstractObject3D<any>> = [];

  protected object: T;

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

    if (['scaleX', 'scaleY', 'scaleZ'].some(propName => propName in changes)) {
      this.applyScale();
      modified = true;
    }

    if (modified) {
      this.changed.emit();
      this.rendererService.render();
    }

  }

  public ngOnDestroy() {
    // console.log('AbstractObject3D.OnDestroy', this.name);
    if (this.object && this.object.parent) {
      this.parent.removeChild(this);
      // this.object.parent.remove(this.object);
      if (this.rendererService) {
        this.rendererService.render();
      }
    }
  }

  public ngOnInit(): void {
    // console.log('AbstractObject3D.ngOnInit', this.name);
    this.object = this.newObject3DInstance();
    if (this.layer) {
      this.object.layers.disableAll();
      this.object.layers.enable(this.layer);
    } else {
      this.object.layers.enableAll();
    }

    this.applyTranslation();
    this.applyRotation();
    this.applyScale();

    this.afterInit();
  }

  public updateParent(): void {
    if (this.parent) {
      this.parent.addChild(this);
      this.rendererService.render();
    }
  }

  public applyRotation(): void {
    this.object.rotation.set(
      this.rotateX || 0,
      this.rotateY || 0,
      this.rotateZ || 0,
      'XYZ'
    );
  }

  public applyTranslation(): void {
    this.object.position.set(
      this.translateX || 0,
      this.translateY || 0,
      this.translateZ || 0
    );
  }

  public applyScale(): void {
    this.object.scale.set(
      this.scaleX || 0,
      this.scaleY || 0,
      this.scaleZ || 0
    );
  }

  public addChild(object: AbstractObject3D<any>): void {
    // (this.constructor.name + ' addChild ' + object, this.object);
    if (this.object) {
      // console.log('AbstractObject3D.addChild', this.name);
      this.childlren.push(object);
      this.object.add(object.getObject());
      if (this.rendererService) {
        this.rendererService.render();
      }
    }
  }

  protected afterInit() {
  }

  public removeChild(object: AbstractObject3D<any>): void {
    if (this.object && object) {
      // console.log('AbstractObject3D.removeChild', this.name);

      // Remove from children:
      const index = this.childlren.indexOf(object, 0);
      if (index > -1) {
        this.childlren.splice(index, 1);
      }

      // Remove from THREE graph:
      this.object.remove(object.getObject());
    }
  }

  public getObject(): T {
    return this.object;
  }

  protected abstract newObject3DInstance(): T;

  public ngAfterViewInit(): void {
    this.updateParent();
  }

  public findByName(name: string) {
    // console.log('AbstractObject3D.findByName: Searching name', name);
    const res = this.recursionByName(this, name);
    // console.log('AbstractObject3D.findByName: result', res);
    return res;
  }

  protected recursionByName(currentNode: AbstractObject3D<any>, name) {
    if (currentNode.object && currentNode.name === name) {
      return currentNode;
    }
    let node;
    currentNode.childlren.some(child => node = this.recursionByName(child, name));
    return node;
  }


  public getChildren() {
    return this.childlren;
  }

  public removeChildByName(name: string) {
    this.childlren = this.childlren.filter(i => i.name !== name);
  }


}
