import {EventEmitter, Injectable} from '@angular/core';
import {RendererService} from '../renderer/renderer.service';


/**
 * Animation service emits updateAnimation event, which should be used by animated components for animationService logic.
 * NOTE: this service is for the performance optimization: requestAnimationFrame and render is called once.
 */
@Injectable()
export class AnimationService {

  /**
   * Subscribe for animationService frame creation (change position and etc.)
   * Avoid render() execution, it's called only once when all components updated animationService frame.
   */
  readonly animate = new EventEmitter<void>();

  private enabled = false;

  constructor(
    private rendererService: RendererService
  ) {
    this.animationStep = this.animationStep.bind(this);
  }

  /**
   * Start the animationService loop.
   */
  public start() {
    if (!this.enabled) {
      this.enabled = true;
      this.animationStep();
    }
  }

  /**
   * Stop all animations.
   */
  public stop() {
    if (this.enabled) {
      this.enabled = false;
    }
  }

  public animationStep() {
    if (this.enabled && this.animate.observers) {
      requestAnimationFrame(this.animationStep);
      if (this.animate.observers.length > 0) {
        this.animate.emit();
        /**
         * When all components updated animationService, render event is emitted.
         * Main renderer subscribed to this event emitter.
         */
        this.rendererService.render();
      }
    }
  }

}
