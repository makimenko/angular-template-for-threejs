import {AfterViewInit, Component, forwardRef, Input} from '@angular/core';
import {AbstractObject3D} from '../abstract-object-3d';
import {CSS3DObject} from 'three/examples/jsm/renderers/CSS3DRenderer';
import {AbstractCss3dMesh} from './abstract-css3d-mesh';
import {RendererService} from '../../renderer';

@Component({
  selector: 'atft-css3d-video-mesh',
  providers: [{provide: AbstractObject3D, useExisting: forwardRef(() => Css3dVideoMeshComponent)}],
  template: '<ng-content></ng-content>'
})
export class Css3dVideoMeshComponent extends AbstractCss3dMesh implements AfterViewInit {

  @Input()
  videoSrc;

  video = document.createElement('video');

  constructor(
    protected rendererService: RendererService
  ) {
    super(rendererService);
  }

  protected createCss3dObject(): CSS3DObject {
    // 1. Create DIV
    const div = document.createElement('div');
    div.style.width = this.resolutionX + 'px';
    div.style.height = this.resolutionY + 'px';
    div.style.backgroundColor = '#000000';
    div.id = 'myWrapper';

    // 2. Create Video Player with source
    this.video.autoplay = false;
    this.video.loop = true;
    this.video.muted = true;
    const source = document.createElement('source');
    source.src = this.videoSrc;
    source.type = 'video/mp4';
    this.video.appendChild(source);
    div.appendChild(this.video);

    // 3. Create CSS3DObject
    const object = new CSS3DObject(div);
    return object;
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
    this.video.load();
    this.video.addEventListener('canplay', () => {
      console.log('EVENT');
      this.video.play();
    });


  }

}
