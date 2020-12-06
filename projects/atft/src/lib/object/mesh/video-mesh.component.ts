import {AfterViewInit, Component, Input, OnDestroy, Optional, SkipSelf} from '@angular/core';
import * as THREE from 'three';
import {RendererService} from '../../renderer/renderer.service';
import {provideParent} from '../../util';
import {AbstractObject3D} from '../abstract-object-3d';
import {AbstractMesh} from './abstract-mesh-3d';
import {AnimationService} from '../../animation';

@Component({
  selector: 'atft-video-mesh',
  providers: [provideParent(VideoMeshComponent)],
  template: '<ng-content></ng-content>'
})
export class VideoMeshComponent extends AbstractMesh implements AfterViewInit, OnDestroy {

  /**
   * Width; that is, the length of the edges parallel to the X axis. Optional; defaults to 1.
   */
  @Input()
  width = 1.0;

  /**
   * Height; that is, the length of the edges parallel to the Y axis. Optional; defaults to 1.
   */
  @Input()
  height = 1.0;

  @Input()
  videoSrc;

  @Input()
  type = 'video/mp4';

  @Input()
  autoplay = true;

  @Input()
  loop = true;

  @Input()
  muted = true;

  protected video = document.createElement('video');
  protected widthSegments = 1;
  protected heightSegments = 1;


  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>,
    protected animationService: AnimationService
  ) {
    super(rendererService, parent);
  }

  protected newObject3DInstance(): THREE.Mesh {
    const geometry = new THREE.PlaneBufferGeometry(this.width, this.height, this.widthSegments, this.heightSegments);
    const material = this.getMaterial();
    const mesh = new THREE.Mesh(geometry, material);
    this.applyShadowProps(mesh);

    return mesh;
  }

  protected getMaterial() {
    // console.log('VideoMeshComponent.initVideo');

    const source = document.createElement('source');
    source.src = this.videoSrc;
    source.type = this.type;
    this.video.appendChild(source);

    this.video.crossOrigin = 'anonymous';
    this.video.autoplay = false;
    this.video.loop = this.loop;
    this.video.muted = this.muted;
    const texture = new THREE.VideoTexture(this.video);
    const material = new THREE.MeshBasicMaterial({color: 0xffffff, map: texture});

    return material;
  }

  protected animate() {
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
    if (this.autoplay) {
      this.animationService.start();
      this.animate = this.animate.bind(this);
      this.animationService.animate.subscribe(this.animate);

      this.video.load();
      this.video.addEventListener('canplay', () => {
        if (this.video) {
          this.video.play();
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.video = null;
  }


}
