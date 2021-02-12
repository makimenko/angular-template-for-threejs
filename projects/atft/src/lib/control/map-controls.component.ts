import {Component, Input, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import {MapControls, OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {RendererService} from '../renderer/renderer.service';
import {AnimationService} from '../animation/animation.service';
import {RaycasterService} from '../raycaster/raycaster.service';
import {AbstractOrbitControls} from './abstract-orbit-controls';
import {Subscription} from 'rxjs';

@Component({
  selector: 'atft-map-controls',
  template: `
    <ng-content></ng-content>`,
  styleUrls: ['controls.component.scss']
})
export class MapControlsComponent extends AbstractOrbitControls<OrbitControls> implements OnChanges, OnDestroy {

  @Input() rotateSpeed = 1.0;

  @Input() zoomSpeed = 1.2;

  @Input() autoRotate = false;

  @Input() autoRotateSpeed = 0.5;

  @Input() enableDamping = false;

  @Input() dampingFactor = 0.1;

  @Input() screenSpacePanning = false;

  @Input() minDistance = 20;

  @Input() maxDistance = 200;

  @Input() maxPolarAngle: number = Math.PI / 2 - 0.1;

  @Input() panSpeed = 1.2;

  protected animation: Subscription;

  constructor(
    protected rendererService: RendererService,
    protected raycasterService: RaycasterService,
    protected animationService: AnimationService
  ) {
    super(rendererService, raycasterService);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.controls) {
      return;
    }
    super.ngOnChanges(changes);

    if (changes['rotateSpeed']) {
      this.controls.rotateSpeed = this.rotateSpeed;
    }
    if (changes['zoomSpeed']) {
      this.controls.zoomSpeed = this.zoomSpeed;
    }
    // TODO: add others
  }

  protected setUpControls() {
    this.controls = new MapControls(
      this.childCameras.first.camera,
      this.listeningControlElement && this.listeningControlElement.nativeElement
    );
    this.controls.rotateSpeed = this.rotateSpeed;
    this.controls.zoomSpeed = this.zoomSpeed;

    this.controls.panSpeed = this.panSpeed;

    this.controls.autoRotate = this.autoRotate;
    this.controls.autoRotateSpeed = this.autoRotateSpeed;
    this.controls.enableDamping = this.enableDamping;
    this.controls.dampingFactor = this.dampingFactor;

    this.controls.screenSpacePanning = this.screenSpacePanning;
    this.controls.minDistance = this.minDistance;
    this.controls.maxDistance = this.maxDistance;
    this.controls.maxPolarAngle = this.maxPolarAngle;

    this.controls.update();

    // Advanced animationService:
    if (this.autoRotate || this.enableDamping) {

      this.animation = this.animationService.animate.subscribe(() => {
        this.controls.update();
      });
      this.controls.addEventListener('change', () => {
        this.rendererService.render();
      });
      this.animationService.start();
    }

    this.rendererService.render();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.animation?.unsubscribe();
  }

}
