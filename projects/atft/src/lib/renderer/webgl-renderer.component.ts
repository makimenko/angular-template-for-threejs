import {AfterViewInit, Component, ElementRef, HostListener, Input, OnDestroy, ViewChild} from '@angular/core';
import {Subject} from 'rxjs';
import {RendererService} from './renderer.service';

@Component({
  selector: 'atft-renderer-canvas',
  templateUrl: './webgl-renderer.component.html',
  styleUrls: ['./webgl-renderer.component.scss']
})
export class WebGLRendererComponent implements AfterViewInit, OnDestroy {

  private readonly onDestroy = new Subject<void>();

  @ViewChild('canvas', {static: true})
  private canvasRef: ElementRef;

  @Input()
  enableShadowMap = false;

  constructor(
    private rendererService: RendererService
  ) {
    // console.log('RendererComponent.constructor');
    this.onResize = this.onResize.bind(this);
  }

  ngAfterViewInit() {
    // console.log('RendererComponent.ngAfterViewInit');
    this.rendererService.initialize(this.canvas);
  }

  /**
   * The render pane on which the scene is rendered.
   * Currently, only the WebGL renderer with a canvas is used in this
   * implementation, so this property will always be an ElementRef to the
   * underlying <canvas> element.
   *
   * @example This property can be used to restrict the orbit control (i.e. the
   * area which is listened for mouse move and zoom events) to the rendering pane
   */
  public get renderPane(): ElementRef {
    return this.canvasRef;
  }

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event: Event) {
    // strange, but single 100% resizing has unexpected behaviour with flex CSS
    // as workaround - resettling to 100 pixels, then to 100%
    this.rendererService.resize(this.canvas, '100px');
    this.rendererService.resize(this.canvas, '100%');
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
  }

}
