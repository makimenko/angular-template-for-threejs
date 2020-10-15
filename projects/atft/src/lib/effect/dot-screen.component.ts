import {AfterViewInit, Component, Input, OnChanges, OnDestroy, Optional, SimpleChanges, SkipSelf} from '@angular/core';
import {RendererService} from '../renderer/renderer.service';
import {SceneComponent} from '../object';
import {DotScreenPass} from 'three/examples/jsm/postprocessing/DotScreenPass';


@Component({
  selector: 'atft-dot-screen',
  template: ''
})
export class DotScreenComponent implements AfterViewInit, OnDestroy, OnChanges {

  protected pass: DotScreenPass;

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: SceneComponent
  ) {
    // console.log('DofComponent.constructor', parent);
  }

  protected enable() {
    // console.log('DofComponent.enable', this.rendererService);

    this.pass = new DotScreenPass();
    this.pass.uniforms['scale'].value = 4;

    this.rendererService.addPass(this.pass);
    this.rendererService.render();
  }

  protected disable() {
    // console.log('DofComponent.disable');
    this.rendererService.removePass(this.pass);
    this.rendererService.render();
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
