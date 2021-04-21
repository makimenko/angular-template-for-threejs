import {Component, Input, OnChanges, Optional, SimpleChanges, SkipSelf} from '@angular/core';
import * as THREE from 'three';
import {RendererService} from '../renderer/renderer.service';
import {provideParent} from '../util';
import {AbstractObject3D} from './abstract-object-3d';

@Component({
  selector: 'atft-scene',
  providers: [provideParent(SceneComponent)],
  template: '<ng-content></ng-content>'
})
export class SceneComponent extends AbstractObject3D<THREE.Scene> implements OnChanges {

  @Input() background = '#ffffff';

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>
  ) {
    super(rendererService, parent);
    // TODO: directive?
    rendererService.setScene(this);
  }

  protected newObject3DInstance(): THREE.Scene {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(this.background);
    return scene;
  }

  public updateParent() {
    // No Parent for scene. Skip: super.updateParent();
  }

  public ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);
    if (!this.object) {
      return;
    }

    let modified = false;

    if (['background'].some(propName => propName in changes)) {
      this.getObject().background = new THREE.Color(this.background);
      modified = true;
    }

    if (modified) {
      this.rendererService.render();
    }

  }


}
