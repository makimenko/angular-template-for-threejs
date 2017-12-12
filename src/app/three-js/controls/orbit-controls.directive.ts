import { Directive, Input, AfterViewInit, ContentChildren, QueryList } from '@angular/core';
import * as THREE from 'three';
import { AbstractCamera } from '../cameras/index';
import { RendererComponent } from '../renderer/renderer.component';
import "../js/EnableThreeExamples";
import "three/examples/js/controls/OrbitControls";

@Directive({
  selector: 'three-orbit-contols'
})
export class OrbitControlsDirective implements AfterViewInit {

  @ContentChildren(AbstractCamera, { descendants: true }) childCameras: QueryList<AbstractCamera<THREE.Camera>>;
  @ContentChildren(RendererComponent, { descendants: true }) childRenderers: QueryList<RendererComponent>;

  @Input() rotateSpeed: number = 1.0;
  @Input() zoomSpeed: number = 1.2;

  private controls: THREE.OrbitControls;

  constructor() {
    console.log("OrbitControlsDirective.constructor");
  }

  ngAfterViewInit(): void {
    console.log("OrbitControlsDirective.ngAfterViewInit");
    if (this.childCameras == undefined || this.childCameras.first == undefined) {
      throw new Error("Camera is not found");
    }
    if (this.childRenderers == undefined || this.childRenderers.first == undefined) {
      throw new Error("Renderer is not found");
    }

    this.controls = new THREE.OrbitControls(this.childCameras.first.camera);
    this.controls.rotateSpeed = this.rotateSpeed;
    this.controls.zoomSpeed = this.zoomSpeed;
    this.controls.addEventListener('change', this.childRenderers.first.render);
    this.childRenderers.first.render();
  }

}
