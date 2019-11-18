import {AfterViewInit, Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {RendererService} from './renderer.service';
import {StatsService} from './stats.service';


@Component({
  selector: 'atft-renderer-canvas',
  templateUrl: './renderer-canvas.component.html',
  styleUrls: ['./renderer-canvas.component.scss']
})
export class RendererCanvasComponent implements AfterViewInit {

  @ViewChild('canvas', {static: true})
  private canvasRef: ElementRef;

  constructor(
    private rendererService: RendererService,
    private statsService: StatsService
  ) {
    // console.log('RendererComponent.constructor');
    this.onResize = this.onResize.bind(this);
  }

  ngAfterViewInit() {
    // console.log('RendererComponent.ngAfterViewInit');
    this.rendererService.initialize(this.canvas);
    this.statsService.createStats();
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

}
