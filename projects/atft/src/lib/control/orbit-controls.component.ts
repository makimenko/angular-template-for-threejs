import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {RendererService} from '../renderer/renderer.service';
import {RaycasterService} from '../raycaster/raycaster.service';
import {AbstractOrbitControls} from './abstract-orbit-controls';

@Component({
  selector: 'atft-orbit-controls',
  template: `
      <ng-content></ng-content>`,
  styleUrls: ['controls.component.scss']
})
export class OrbitControlsComponent extends AbstractOrbitControls<OrbitControls> implements OnChanges {

  @Input() rotateSpeed = 1.0;
  @Input() zoomSpeed = 1.2;

  constructor(
    protected override rendererService: RendererService,
    protected override raycasterService: RaycasterService
  ) {
    super(rendererService, raycasterService);
  }

  protected setUpControls() {
    this.controls = new OrbitControls(
      this.childCameras.first.camera,
      this.listeningControlElement && this.listeningControlElement.nativeElement
    );
    this.controls.rotateSpeed = this.rotateSpeed;
    this.controls.zoomSpeed = this.zoomSpeed;
  }

  override ngOnChanges(changes: SimpleChanges) {
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
  }

}
