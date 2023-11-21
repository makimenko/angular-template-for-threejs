import {AfterViewInit, Component, Input, OnChanges, OnDestroy, Optional, SimpleChanges, SkipSelf} from '@angular/core';
import {RendererService} from '../renderer/renderer.service';
import {SceneComponent} from '../object';
import * as THREE from 'three';

@Component({
  selector: 'atft-fog',
  template: ''
})
export class FogComponent implements AfterViewInit, OnDestroy, OnChanges {

  @Input() color: string | number = '#0000AA';
  @Input() near = 10;
  @Input() far = 100;

  protected scene!: THREE.Scene;

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: SceneComponent
  ) {
    // console.log('FogComponent.constructor', parentScene);

  }


  public ngAfterViewInit() {
    // console.log('ngAfterViewInit', this.parentScene);
    if (this.parent && this.parent.getObject() && this.parent.getObject().isScene) {
      // console.log('FogComponent detected parentScene scene', this.parentScene);
      this.scene = this.parent.getObject();
      this.enableFog();
    }
  }

  protected enableFog() {
    // console.log('enableFog');
    this.scene.fog = new THREE.Fog(this.color, this.near, this.far);
    this.rendererService.render();
  }

  protected disableFog() {
    // console.log('disableFog');
    this.scene.fog = null;
    this.rendererService.render();
  }

  ngOnDestroy(): void {
    this.disableFog();
  }


  public ngOnChanges(changes: SimpleChanges) {
    if (!this.scene) {
      return;
    }

    if (['color', 'near', 'far'].some(propName => propName in changes)) {
      this.enableFog();
    }

  }

}
