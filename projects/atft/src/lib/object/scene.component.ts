import {Component, Input, OnChanges, Optional, SimpleChanges, SkipSelf} from '@angular/core';
import * as THREE from 'three';
import {RendererService} from '../renderer/renderer.service';
import {provideParent} from '../util';
import {AbstractObject3D} from './abstract-object-3d';
import {EnvMapService} from '../renderer';
import {Subscription} from 'rxjs';
import {Texture} from 'three/src/textures/Texture';

@Component({
  selector: 'atft-scene',
  providers: [provideParent(SceneComponent)],
  template: '<ng-content></ng-content>'
})
export class SceneComponent extends AbstractObject3D<THREE.Scene> implements OnChanges {

  @Input() background: number | string = '#ffffff';

  @Input() envMapPath: string;

  protected envMapLoaded: Subscription;


  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>,
    protected envMap: EnvMapService
  ) {
    super(rendererService, parent);
    // TODO: directive?
    rendererService.setScene(this);
    this.updateEnvMap = this.updateEnvMap.bind(this);
    this.envMapLoaded = envMap.envMapLoaded.subscribe((envMap) => this.updateEnvMap(envMap));
  }

  protected newObject3DInstance(): THREE.Scene {
    const scene = new THREE.Scene();
    if (this.envMapPath) {
      this.envMap.load(this.envMapPath);
    } else {
      scene.background = new THREE.Color(this.background);
    }
    // console.log('scene.background', scene.background);
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
      //TODO: ? this.getObject().background = new THREE.Color(this.background);
      modified = true;
    }

    if (modified) {
      this.rendererService.render();
    }

  }

  protected updateEnvMap(envMap: Texture) {
    this.getObject().background = envMap;
    this.rendererService.render();
  }

}
