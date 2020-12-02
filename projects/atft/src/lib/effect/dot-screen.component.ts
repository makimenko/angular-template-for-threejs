import {AfterViewInit, Component, Input, OnChanges, OnDestroy, Optional, SimpleChanges, SkipSelf} from '@angular/core';
import {RendererService} from '../renderer/renderer.service';
import {DotScreenPass} from 'three/examples/jsm/postprocessing/DotScreenPass';
import {EffectComposerComponent} from './effect-composer.component';


@Component({
  selector: 'atft-dot-screen',
  template: ''
})
export class DotScreenComponent implements AfterViewInit, OnDestroy, OnChanges {

  @Input() scale = 4;

  protected pass: DotScreenPass;

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected composer: EffectComposerComponent
  ) {
    // console.log('DofComponent.constructor', parentScene);
  }

  protected enable() {
    if (this.composer) {
      // console.log('DofComponent.enable', this.rendererService);

      this.pass = new DotScreenPass();
      this.pass.uniforms['scale'].value = this.scale;

      this.composer.addPass(this.pass);
      this.rendererService.render();
    }
  }

  protected disable() {
    if (this.composer) {
      // console.log('DofComponent.disable');
      this.composer.removePass(this.pass);
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


  }


}
