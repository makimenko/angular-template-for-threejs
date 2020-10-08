import {Directive, Optional, SkipSelf, ViewChild} from '@angular/core';
import * as THREE from 'three';
import {EmptyComponent} from './helper';
import {AbstractObject3D} from './abstract-object-3d';
import {RendererService} from '../renderer';

@Directive()
// tslint:disable-next-line:directive-class-suffix
export abstract class AbstractContentProjection extends EmptyComponent {

  @ViewChild('contentProjection') contentProjection: AbstractObject3D<any>;

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>
  ) {
    super(rendererService, parent);
  }

  addChild(object: THREE.Object3D) {
    if (this.contentProjection) {
      this.contentProjection.addChild(object);
    } else {
      console.error('AbstractContentProjection error: #contentProjection id not found! Embedded child object in "ng-content" can not be attached to parent object');
    }
  }

}
