import {Component, Input, Optional, SimpleChanges, SkipSelf} from '@angular/core';
import {RendererService} from '../../renderer/renderer.service';
import {EffectComposerComponent} from './effect-composer.component';
import {ShaderPass} from 'three/examples/jsm/postprocessing/ShaderPass';
import {DotScreenShader} from 'three/examples/jsm/shaders/DotScreenShader';
import {AbstractComposeEffect} from './abstract-compose-effect';

@Component({
  selector: 'atft-dot-screen',
  template: ''
})
export class DotScreenComponent extends AbstractComposeEffect<ShaderPass> {

  @Input() scale = 4;

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected composer: EffectComposerComponent
  ) {
    super(rendererService, composer);
  }

  initPasses() {
    this.pass.push(new ShaderPass(DotScreenShader));
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  applyChanges(changes: SimpleChanges): boolean {
    // TODO: Implement
    return false;
  }

}
