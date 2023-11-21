import {Component, Input, Optional, SimpleChanges, SkipSelf} from '@angular/core';
import {RendererService} from '../../renderer/renderer.service';
import {BokehPass} from 'three/examples/jsm/postprocessing/BokehPass';
import {EffectComposerComponent} from './effect-composer.component';
import {AbstractComposeEffect} from './abstract-compose-effect';

@Component({
  selector: 'atft-dof',
  template: ''
})
export class DofComponent extends AbstractComposeEffect<BokehPass> {

  @Input() focus = 1.0;
  @Input() aperture = 0.025;
  @Input() maxblur = 0.01;

  constructor(
    protected override rendererService: RendererService,
    @SkipSelf() @Optional() protected override composer: EffectComposerComponent
  ) {
    super(rendererService, composer);
  }

  applyChanges(changes: SimpleChanges) {
    let modified = false;

    if (this.pass[0]) {
      if (['focus'].some(propName => propName in changes)) {
        // console.log('change focus', this.focus);
        // @ts-ignore
        this.pass[0].uniforms['focus'].value = this.focus;
        modified = true;
      }

      if (['aperture'].some(propName => propName in changes)) {
        // console.log('change aperture', this.aperture);
        // @ts-ignore
        this.pass[0].uniforms['aperture'].value = this.aperture;
        modified = true;
      }

      if (['maxblur'].some(propName => propName in changes)) {
        // console.log('change maxblur');
        // @ts-ignore
        this.pass[0].uniforms['maxblur'].value = this.maxblur;
        modified = true;
      }
    }

    return modified;
  }

  initPasses() {
    this.pass.push(new BokehPass(this.rendererService.getScene().getObject(), this.rendererService.getCamera().camera, {
        focus: this.focus,
        aperture: this.aperture,
        maxblur: this.maxblur,
        aspect :  window.innerWidth / window.innerHeight
      })
    );
  }


}
