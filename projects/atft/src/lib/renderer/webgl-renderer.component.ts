import {AfterViewInit, Component, ContentChildren, ElementRef, HostListener, Input, OnDestroy, QueryList, ViewChild} from '@angular/core';
import * as THREE from 'three';
import {SceneComponent} from '../object/scene.component';
import {AbstractCamera} from '../camera/abstract-camera';
import {Subject} from 'rxjs';
import {RendererService} from './renderer.service';

@Component({
  selector: 'atft-webgl-renderer',
  templateUrl: './webgl-renderer.component.html',
  styleUrls: ['./webgl-renderer.component.scss']
})
export class WebGLRendererComponent implements AfterViewInit, OnDestroy {

  private renderer: THREE.WebGLRenderer;
  private viewInitialized = false;
  private readonly onDestroy = new Subject<void>();

  @ViewChild('canvas', {static: true})
  private canvasRef: ElementRef; // NOTE: say bye-bye to server-side rendering ;)

  @ContentChildren(SceneComponent) sceneComponents: QueryList<SceneComponent>; // TODO: Multiple scenes
  @ContentChildren(AbstractCamera) cameraComponents: QueryList<AbstractCamera<THREE.Camera>>; // TODO: Multiple camera

  @Input()
  enableShadowMap = false;

  constructor(
    private rendererService: RendererService
  ) {
    // console.log('RendererComponent.constructor');
    this.render = this.render.bind(this);
  }

  ngAfterViewInit() {
    // console.log('RendererComponent.ngAfterViewInit');
    this.viewInitialized = true;
    this.startRendering();
    this.rendererService.render.subscribe(this.render);
  }

  /**
   * The render pane on which the scene is rendered.
   * Currently, only the WebGL renderer with a canvas is used in this
   * implementation, so this property will always be an ElementRef to the
   * underlying <canvas> element.
   *
   * @example This property can be used to restrict the orbit control (i.e. the
   * area which is listened for mouse move and zoom events) to the rendering pane:
   * ```
   * <three-orbit-control [rotateSpeed]=1 [zoomSpeed]=1.2 [listeningControlElement]=mainRenderer.renderPane>
   *   <three-renderer #mainRenderer>
   *     ...
   *   </three-renderer>
   * </three-orbit-control>
   * ```
   */
  public get renderPane(): ElementRef {
    return this.canvasRef;
  }

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private startRendering() {
    // console.log('RendererComponent.startRendering');
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true
    });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight, false);

    this.renderer.shadowMap.enabled = this.enableShadowMap;
    this.renderer.shadowMap.autoUpdate = this.enableShadowMap;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    // this.renderer.setClearColor(0xffffff, 1);
    // this.renderer.autoClear = true;

    this.updateChildCamerasAspectRatio();
    this.render();
  }

  public render() {
    if (this.viewInitialized) {
      const sceneComponent = this.sceneComponents.first;
      const cameraComponent = this.cameraComponents.first;
      //  console.log('render');
      this.renderer.render(sceneComponent.getObject(), cameraComponent.camera);
    }
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
    // strange, but single 100% resizing has unexpected behaviour with flex CSS
    // as workaround - resettling to 100 pixels, then to 100%
    this.resize('100px');
    this.resize('100%');
  }

  private resize(size: string) {
    this.canvas.style.width = size;
    this.canvas.style.height = size;
    const width = this.canvas.clientWidth;
    const height = this.canvas.clientHeight;

    this.renderer.setSize(width, height, true);
    this.updateChildCamerasAspectRatio();
    this.render();
  }

  public updateChildCamerasAspectRatio() {
    const aspect = this.calculateAspectRatio();
    this.cameraComponents.forEach(camera => camera.updateAspectRatio(aspect));
  }

  /*
  @HostListener('document:keypress', ['$event'])
  public onKeyPress(event: KeyboardEvent) {
    // console.log("onKeyPress: " + event.key);
  }
*/

  ngOnDestroy(): void {
    this.onDestroy.next();
  }


}
