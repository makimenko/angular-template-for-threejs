import {Component, EventEmitter, Input, Optional, Output, SkipSelf} from '@angular/core';

import * as THREE from 'three';
import {RendererService} from '../../renderer/renderer.service';
import {provideParent} from '../../util';
import {AbstractObject3D} from '../abstract-object-3d';
import {AbstractModelLoader} from './abstract-model-loader';

@Component({
  selector: 'atft-audio-loader',
  providers: [provideParent(AudioLoaderComponent)],
  template: '<ng-content></ng-content>'
})
export class AudioLoaderComponent extends AbstractModelLoader {
  private loader = new THREE.AudioLoader();
  private listener = new THREE.AudioListener();
  private sound = new THREE.Audio(this.listener);

  @Input() url!: string;
  @Input() volume = 0.5;
  @Input() loop = false;
  @Input() autostart = true;

  @Output() ready = new EventEmitter();

  constructor(
    protected override rendererService: RendererService,
    @SkipSelf() @Optional() protected override parent: AbstractObject3D<any>
  ) {
    super(rendererService, parent);
    this.audioLoaded = this.audioLoaded.bind(this);
  }

  private initListener() {
    console.log('AudioLoaderComponent.initListener');
    this.rendererService.getCamera().camera.add(this.listener);
  }

  protected async loadLazyObject() {
    this.initListener();
    console.log('AudioLoaderComponent.loadLazyObject url', this.url);
    return new Promise<THREE.Object3D>((resolve, reject) => {
      this.sound = new THREE.Audio(this.listener);
      this.loader.load(this.url, this.audioLoaded, undefined, reject);
      resolve(this.sound);
    });
  }

  protected audioLoaded(buffer: AudioBuffer) {
    console.log('AudioLoaderComponent.audioLoaded');
    this.sound.setBuffer(buffer);
    this.sound.setLoop(this.loop);
    this.sound.setVolume(this.volume);
    this.sound.autoplay = false;
    if (this.autostart) {
      //NOTE: interaction with user must happen before this component initialization
      // three.module.js:46880 The AudioContext was not allowed to start. It must be resumed (or created) after a user gesture on the page. https://goo.gl/7K7WLu
      this.play();
    }
  }

  public override ngOnDestroy(): void {
    console.log('AudioLoaderComponent.ngOnDestroy');
    super.ngOnDestroy();
    this.sound.stop()
  }

  public play() {
    this.sound.play()
  }

  public pause() {
    this.sound.pause();
  }

  public stop() {
    this.sound.stop();
  }
}
