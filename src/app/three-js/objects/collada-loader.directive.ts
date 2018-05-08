import { Directive, AfterViewInit, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import * as THREE from 'three';
import { AbstractObject3D } from './abstract-object-3d';
import '../js/EnableThreeExamples';
import 'three/examples/js/loaders/ColladaLoader';
import { RendererComponent } from '../renderer/renderer.component';

@Directive({
  selector: 'three-collada-loader',
  providers: [{ provide: AbstractObject3D, useExisting: forwardRef(() => ColladaLoaderDirective) }]
})
export class ColladaLoaderDirective extends AbstractObject3D<THREE.Object3D> {

  @Input() model: string;
  @Input() renderer: RendererComponent;

  constructor() {
    super();
    console.log('ColladaLoaderDirective.constructor');
  }

  protected newObject3DInstance(): THREE.Object3D {
    console.log('ColladaLoaderDirective.newObject3DInstance');
    return new THREE.Object3D();
  }

  protected afterInit(): void {
    console.log('ColladaLoaderDirective.afterInit');
    const loader = new THREE.ColladaLoader();

    loader.load(this.model, this.onModelLoadingCompleted.bind(this));
  }

  private onModelLoadingCompleted(collada: THREE.ColladaModel) {
    console.log('ColladaLoaderDirective.onModelLoadingCompleted');
    this.addChild(collada.scene);
    this.renderer.render();
  }

}
