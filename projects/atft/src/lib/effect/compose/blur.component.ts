import {Component, Optional, SimpleChanges, SkipSelf} from '@angular/core';
import {RendererService} from '../../renderer/renderer.service';
import {ShaderPass} from 'three/examples/jsm/postprocessing/ShaderPass';
import {VerticalBlurShader} from 'three/examples/jsm/shaders/VerticalBlurShader';
import {HorizontalBlurShader} from 'three/examples/jsm/shaders/HorizontalBlurShader';
import {EffectComposerComponent} from './effect-composer.component';
import {AbstractComposeEffect} from './abstract-compose-effect';

@Component({
  selector: 'atft-blur',
  template: ''
})
export class BlurComponent extends AbstractComposeEffect<ShaderPass> {

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected composer: EffectComposerComponent
  ) {
    super(rendererService, composer);
  }

  initPasses() {
    this.pass.push(new ShaderPass(VerticalBlurShader));
    this.pass.push(new ShaderPass(HorizontalBlurShader));
    this.pass.push(new ShaderPass(VerticalBlurShader));
    this.pass.push(new ShaderPass(HorizontalBlurShader));
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  applyChanges(changes: SimpleChanges) {
    // TODO: implement changes
    return false;
  }

}
