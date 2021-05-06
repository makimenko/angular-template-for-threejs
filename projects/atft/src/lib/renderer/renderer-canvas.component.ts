import {Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {RendererService} from './renderer.service';

@Component({
  selector: 'atft-renderer-canvas',
  templateUrl: './renderer-canvas.component.html',
  styleUrls: ['./renderer-canvas.component.scss']
})
export class RendererCanvasComponent implements OnInit {

  @ViewChild('canvas', {static: true})
  private canvasRef: ElementRef;

  @Input() preserveDrawingBuffer = false;

  constructor(
    private rendererService: RendererService
  ) {
    // console.log('RendererComponent.constructor');
    this.onResize = this.onResize.bind(this);
  }

  ngOnInit() {
    // console.log('RendererComponent.ngAfterViewInit');
    this.rendererService.initialize(this.canvas, this.preserveDrawingBuffer);
    this.resetCanvas();
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public onResize(event: Event) {
    this.resetCanvas();
  }

  protected resetCanvas() {
    // console.log('RendererCanvasComponent.resetCanvas');
    // strange, but single 100% resizing has unexpected behaviour with flex CSS
    // as workaround - resettling to 100 pixels, then to 100%
    this.rendererService.resize(this.canvas, '100px');
    this.rendererService.resize(this.canvas, '100%');
  }

}
