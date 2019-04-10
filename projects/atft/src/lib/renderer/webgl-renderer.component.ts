import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ContentChildren,
  HostListener,
  QueryList,
  EventEmitter,
  Output,
  AfterViewInit
} from '@angular/core';
import * as THREE from 'three';
import { SceneDirective } from '../objects/scene.directive';
import { AbstractCamera } from '../cameras/abstract-camera';


@Component({
  selector: 'atft-webgl-renderer',
  templateUrl: './webgl-renderer.component.html',
  styleUrls: ['./webgl-renderer.component.scss']
})
export class WebGLRendererComponent implements AfterViewInit {

  private renderer: THREE.WebGLRenderer;
  private viewInitialized = false;

  @ViewChild('canvas')
  private canvasRef: ElementRef; // NOTE: say bye-bye to server-side rendering ;)

  @ContentChildren(SceneDirective) sceneComponents: QueryList<SceneDirective>; // TODO: Multiple scenes
  @ContentChildren(AbstractCamera) cameraComponents: QueryList<AbstractCamera<THREE.Camera>>; // TODO: Multiple cameras

  constructor() {
    console.log('RendererComponent.constructor');
    this.render = this.render.bind(this);
  }

  ngAfterViewInit() {
    console.log('RendererComponent.ngAfterViewInit');
    this.viewInitialized = true;
    this.startRendering();
  }

  /**
   * The render pane on which the scene is rendered.
   * Currently, only the WebGL renderer with a canvas is used in this
   * implementation, so this property will always be an ElementRef to the
   * underlying <canvas> element.
   *
   * @example This property can be used to restrict the orbit controls (i.e. the
   * area which is listened for mouse move and zoom events) to the rendering pane:
   * ```
   * <three-orbit-controls [rotateSpeed]=1 [zoomSpeed]=1.2 [listeningControlElement]=mainRenderer.renderPane>
   *   <three-renderer #mainRenderer>
   *     ...
   *   </three-renderer>
   * </three-orbit-controls>
   * ```
   */
  public get renderPane(): ElementRef {
    return this.canvasRef;
  }

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private startRendering() {
    console.log('RendererComponent.startRendering');
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true
    });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.setClearColor(0xffffff, 1);
    this.renderer.autoClear = true;

    this.updateChildCamerasAspectRatio();
    this.render();
  }

  public render() {
    // if (this.sceneComponents != undefined && this.sceneComponents.length == 1 &&
    //     this.cameraComponents != undefined && this.cameraComponents.length == 1) {
    if (this.viewInitialized) {
      const sceneComponent = this.sceneComponents.first;
      const cameraComponent = this.cameraComponents.first;
      // console.log("render");
      // console.log(scene.getObject());
      // console.log(camera.camera);
      this.renderer.render(sceneComponent.getObject(), cameraComponent.camera);
    }
    // }
  }

  private calculateAspectRatio(): number {
    const height = this.canvas.clientHeight;
    if (height === 0) {
      return 0;
    }
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event: Event) {
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    console.log('RendererComponent.onResize: ' + this.canvas.clientWidth + ', ' + this.canvas.clientHeight);

    this.updateChildCamerasAspectRatio();

    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    this.render();
  }

  public updateChildCamerasAspectRatio() {
    const aspect = this.calculateAspectRatio();
    this.cameraComponents.forEach(camera => camera.updateAspectRatio(aspect));
  }

  /*
  @HostListener('document:keypress', ['$event'])
  public onKeyPress(event: KeyboardEvent) {
    console.log("onKeyPress: " + event.key);
  }
*/

}
