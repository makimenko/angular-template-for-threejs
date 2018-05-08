import { Directive, AfterViewInit, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import * as THREE from 'three';
import { AbstractObject3D } from './abstract-object-3d';
import { RendererComponent } from '../renderer/renderer.component';
import { Object3D } from 'three';

@Directive({
  selector: 'three-object-loader',
  providers: [{ provide: AbstractObject3D, useExisting: forwardRef(() => ObjectLoaderDirective) }]
})
export class ObjectLoaderDirective extends AbstractObject3D<THREE.Object3D> {

  @Input() model: string;
  @Input() renderer: RendererComponent;

  constructor() {
    super();
    console.log('ObjectLoaderDirective.constructor');
  }

  protected newObject3DInstance(): THREE.Object3D {
    console.log('ObjectLoaderDirective.newObject3DInstance');
    return new THREE.Object3D();
  }

  protected afterInit(): void {
    console.log('ObjectLoaderDirective.afterInit');
    const loader = new THREE.ObjectLoader();
    loader.load(this.model, this.onObjectLoaded.bind(this));

  }

  private onObjectLoaded(object: THREE.Object3D) {
    console.log('ObjectLoaderDirective.onObjectLoaded');
    this.addChild(object);
    this.renderer.render();
  }

}
