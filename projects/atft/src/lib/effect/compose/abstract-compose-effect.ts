import {AfterViewInit, Directive, OnChanges, OnDestroy, Optional, SimpleChanges, SkipSelf} from '@angular/core';
import {RendererService} from '../../renderer/renderer.service';
import {EffectComposerComponent} from './effect-composer.component';
import {Pass} from 'three/examples/jsm/postprocessing/Pass';

@Directive()
export abstract class AbstractComposeEffect<T extends Pass> implements AfterViewInit, OnDestroy, OnChanges {

  protected pass: T[] = [];

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected composer: EffectComposerComponent
  ) {
    // console.log('AbstractComposeEffect.constructor', parentScene);
  }

  protected enable() {
    if (this.composer) {
      // console.log('AbstractComposeEffect.enable', this.rendererService);

      this.initPasses();

      this.pass.forEach(pass => this.composer.addPass(pass));
      this.rendererService.render();
    }
  }

  protected disable() {
    if (this.composer) {
      // console.log('AbstractComposeEffect.disable');
      this.pass.forEach(pass => this.composer.removePass(pass));
      this.rendererService.render();
    }
  }

  public ngAfterViewInit() {
    this.enable();
  }

  ngOnDestroy(): void {
    this.disable();
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (!this.pass) {
      return;
    }
    if (this.applyChanges(changes)) {
      this.rendererService.render();
    }
  }

  abstract initPasses();

  abstract applyChanges(changes: SimpleChanges): boolean;


}
