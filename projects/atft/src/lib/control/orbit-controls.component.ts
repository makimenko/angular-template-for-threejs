import {AfterViewInit, Component, ContentChildren, ElementRef, Input, OnChanges, OnDestroy, QueryList, SimpleChanges} from '@angular/core';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {AbstractCamera} from '../camera/abstract-camera';
import {RendererService} from '../renderer/renderer.service';
import {RaycasterService} from '../raycaster';

@Component({
  selector: 'atft-orbit-controls',
  template: `
      <ng-content></ng-content>`,
  styleUrls: ['controls.component.scss']
})
export class OrbitControlsComponent implements AfterViewInit, OnChanges, OnDestroy {

  @ContentChildren(AbstractCamera, {descendants: true}) childCameras: QueryList<AbstractCamera<THREE.Camera>>;

  /**
   * The element on whose native element the orbit control will listen for mouse events.
   *
   * Note that keyboard events are still listened for on the global window object, this is
   * a known issue from Three.js: https://github.com/mrdoob/three.js/pull/10315
   *
   * @example This property can be used to restrict the orbit control (i.e. the
   * area which is listened for mouse move and zoom events) to the rendering pane:
   * ```
   * <three-orbit-control [listeningControlElement]=mainRenderer.renderPane>
   *   <three-renderer #mainRenderer>
   *     ...
   *   </three-renderer>
   * </three-orbit-control>
   * ```
   */
  @Input() listeningControlElement: ElementRef | undefined = undefined;

  @Input() rotateSpeed = 1.0;
  @Input() zoomSpeed = 1.2;

  private controls: OrbitControls;

  constructor(
    private rendererService: RendererService,
    private raycasterService: RaycasterService
  ) {
    // console.log('OrbitControlsComponent.constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    // If the THREE.js OrbitControls are not set up yet, we do not need to update
    // anything as they will pick the new values from the @Input properties automatically
    // upon creation.
    if (!this.controls) {
      return;
    }

    if (changes['rotateSpeed']) {
      this.controls.rotateSpeed = this.rotateSpeed;
    }
    if (changes['zoomSpeed']) {
      this.controls.zoomSpeed = this.zoomSpeed;
    }
    if (changes['listeningControlElement']) {
      // The DOM element the OrbitControls listen on cannot be changed once an
      // OrbitControls object is created. We thus need to recreate it.
      this.controls.dispose();
      this.setUpControls();
    }
  }

  ngOnDestroy() {
    if (this.controls) {
      this.controls.dispose();
    }
  }

  private setUpControls() {
    this.controls = new OrbitControls(
      this.childCameras.first.camera,
      this.listeningControlElement && this.listeningControlElement.nativeElement
    );
    this.controls.rotateSpeed = this.rotateSpeed;
    this.controls.zoomSpeed = this.zoomSpeed;

    this.controls.addEventListener('change', () => {
      this.rendererService.request();
    });

    // don't raycast during rotation/damping/panning
    if (this.raycasterService.isEnabled) {
      this.controls.addEventListener('start', () => {
        this.raycasterService.pause();
      });
      this.controls.addEventListener('end', () => {
        this.raycasterService.resume();
      });
    }
    this.rendererService.request();
  }

  ngAfterViewInit(): void {
    // console.log('OrbitControlsComponent.ngAfterViewInit');
    if (this.childCameras === undefined || this.childCameras.first === undefined) {
      throw new Error('Camera is not found');
    }

    this.setUpControls();
  }

}
