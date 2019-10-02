import {AfterViewInit, ContentChildren, ElementRef, Input, OnChanges, OnDestroy, QueryList, SimpleChanges} from '@angular/core';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {AbstractCamera} from '../camera/abstract-camera';
import {RendererService} from '../renderer/renderer.service';
import {RaycasterService} from '../raycaster';


export abstract class AbstractOrbitControls<T extends OrbitControls> implements AfterViewInit, OnChanges, OnDestroy {

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

  protected controls: T;

  constructor(
    protected rendererService: RendererService,
    protected raycasterService: RaycasterService
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

  protected abstract setUpControls();


  private configureListeners() {
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
  }

  ngAfterViewInit(): void {
    // console.log('OrbitControlsComponent.ngAfterViewInit');
    if (this.childCameras === undefined || this.childCameras.first === undefined) {
      throw new Error('Camera is not found');
    }

    this.setUpControls();
    this.configureListeners();
    this.rendererService.request();
  }

}
