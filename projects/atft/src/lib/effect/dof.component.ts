import {AfterViewInit, Component, Input, OnChanges, OnDestroy, Optional, SimpleChanges, SkipSelf} from '@angular/core';
import {RendererService} from '../renderer/renderer.service';
import {SceneComponent} from '../object';
import {BokehPass} from 'three/examples/jsm/postprocessing/BokehPass';
import {EffectComposerComponent} from './effect-composer.component';

@Component({
  selector: 'atft-dof',
  template: ''
})
export class DofComponent implements AfterViewInit, OnDestroy, OnChanges {

  @Input() focus = 1.0;
  @Input() aperture = 0.025;
  @Input() maxblur = 0.01;

  protected bokehPass: BokehPass;

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected composer: EffectComposerComponent
  ) {
    // console.log('DofComponent.constructor', parentScene);
  }

  protected enable() {
    // console.log('DofComponent.enable', this.rendererService);

    this.bokehPass = new BokehPass(this.rendererService.getScene().getObject(), this.rendererService.getCamera().camera, {
      focus: this.focus,
      aperture: this.aperture,
      maxblur: this.maxblur,
      width: window.innerWidth,
      height: window.innerHeight
    });

    this.composer.addPass(this.bokehPass);
    this.rendererService.render();
  }

  protected disable() {
    // console.log('DofComponent.disable');
    this.composer.removePass(this.bokehPass);
    this.rendererService.render();
  }

  public ngAfterViewInit() {
    this.enable();
  }

  ngOnDestroy(): void {
    this.disable();
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (!this.bokehPass) {
      return;
    }

    let modified = false;

    if (['focus'].some(propName => propName in changes)) {
      // console.log('change focus', this.focus);
      this.bokehPass.uniforms['focus'].value = this.focus;
      modified = true;
    }

    if (['aperture'].some(propName => propName in changes)) {
      // console.log('change aperture', this.aperture);
      this.bokehPass.uniforms['aperture'].value = this.aperture;
      modified = true;
    }

    if (['maxblur'].some(propName => propName in changes)) {
      // console.log('change maxblur');
      this.bokehPass.uniforms['maxblur'].value = this.maxblur;
      modified = true;
    }

    if (modified) {
      this.rendererService.render();
    }

  }


}
