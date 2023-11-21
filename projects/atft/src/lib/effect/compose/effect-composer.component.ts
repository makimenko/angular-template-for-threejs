import {AfterViewInit, Component, Input, OnDestroy, Optional, SkipSelf} from '@angular/core';
import {RendererService} from '../../renderer/renderer.service';
import {SceneComponent} from '../../object';
import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer';
import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass';
import {Pass} from 'three/examples/jsm/postprocessing/Pass';

@Component({
  selector: 'atft-effect-composer',
  template: ''
})
export class EffectComposerComponent implements AfterViewInit, OnDestroy {

  @Input() renderToScreen = true;
  @Input() sceneBackgroundTarget!: SceneComponent;

  protected composer?: EffectComposer;

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parentScene: SceneComponent
  ) {
    // console.log('DofComponent.constructor', parentScene);
  }

  public ngAfterViewInit() {
    // console.log('EffectComposerComponent.ngAfterViewInit');
    this.initComposer();
  }

  ngOnDestroy(): void {
    // console.log('EffectComposerComponent.ngOnDestroy');
    this.rendererService.setComposer(undefined);
    this.composer = undefined;
    this.rendererService.render();
  }

  public initComposer() {
    if (!this.composer && this.rendererService.getWebGlRenderer()) {
      // console.log('EffectComposerComponent.initComposer');
      this.composer = new EffectComposer(this.rendererService.getWebGlRenderer());
      this.composer.renderToScreen = this.renderToScreen;

      // TODO: move renderPass to separate component?
      const renderPass = new RenderPass(this.parentScene.getObject(), this.rendererService.getCamera().camera);
      this.addPass(renderPass);

      if (this.sceneBackgroundTarget) {
        this.sceneBackgroundTarget.getObject().background = this.composer.writeBuffer.texture;
      }
      this.rendererService.setComposer(this);
    }
  }

  public addPass(pass: Pass) {
    // console.log('EffectComposerComponent.addPass', pass);
    this.initComposer();
    this.composer?.addPass(pass);
  }

  public removePass(pass: Pass) {
    // console.log('EffectComposerComponent.removePass', pass);
    if (this.composer && this.composer.passes.length > 1) {
      const passes = this.composer.passes;
      const index = passes.indexOf(pass, 0);
      if (index > -1) {
        passes.splice(index, 1);
      }
      if (passes.length === 1) {
        this.composer = undefined;
      }
    }
  }

  public render() {
    if (this.composer) {
      this.composer.render(0.1);
    }
  }

  public getComposer() {
    return this.composer;
  }

}
