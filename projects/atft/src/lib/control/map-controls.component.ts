import {AfterViewInit, Component, ContentChildren, ElementRef, Input, OnChanges, OnDestroy, QueryList, SimpleChanges} from '@angular/core';
import * as THREE from 'three';
import {MapControls} from 'three/examples/jsm/controls/OrbitControls';
import {AbstractCamera} from '../camera/abstract-camera';
import {RendererService} from '../renderer/renderer.service';
import {AnimationService} from '../animation';
import {RaycasterService} from '../raycaster';

@Component({
  selector: 'atft-map-controls',
  template: `
      <ng-content></ng-content>`,
  styleUrls: ['controls.component.scss']
})
export class MapControlsComponent implements AfterViewInit, OnChanges, OnDestroy {

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

  @Input() autoRotate = true;

  @Input() autoRotateSpeed = 0.5;

  @Input() enableDamping = true;

  @Input() dampingFactor = 0.03;

  @Input() screenSpacePanning = false;

  @Input() minDistance = 100;

  @Input() maxDistance = 800;

  @Input() maxPolarAngle: number = Math.PI / 2 - 0.1;

  @Input() panSpeed = 1;

  private controls: MapControls;

  constructor(
    private rendererService: RendererService,
    private animationService: AnimationService,
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
    this.controls = new MapControls(
      this.childCameras.first.camera,
      this.listeningControlElement && this.listeningControlElement.nativeElement
    );
    this.controls.rotateSpeed = this.rotateSpeed;
    this.controls.zoomSpeed = this.zoomSpeed;

    this.controls.panSpeed = this.panSpeed;

    this.controls.autoRotate = this.autoRotate;
    this.controls.autoRotateSpeed = this.autoRotateSpeed;
    this.controls.enableDamping = this.enableDamping; // an animation loop is required when either damping or auto-rotation are enabled
    this.controls.dampingFactor = this.dampingFactor;

    this.controls.screenSpacePanning = this.screenSpacePanning;
    this.controls.minDistance = this.minDistance;
    this.controls.maxDistance = this.maxDistance;
    this.controls.maxPolarAngle = this.maxPolarAngle;

    // Advanced animation:
    if (this.autoRotate || this.enableDamping) {
      this.animationService.animate.subscribe(() => {
        this.controls.update();
      });
      this.controls.addEventListener('change', () => {
        this.rendererService.request();
      });
      this.animationService.start();
    }

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
