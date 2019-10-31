import {EventEmitter, Injectable, Optional, SkipSelf} from '@angular/core';
import {RendererService} from '../renderer/renderer.service';


/**
 * Animation service emits animate event, which should be used by animated components for animation logic.
 * NOTE: this service is for the performance optimization: requestAnimationFrame and render is called once.
 */
@Injectable()
export class AnimationService {

  /**
   * Subscribe for animation frame creation (change position and etc.)
   * Avoid render() execution, it's called only once when all components updated animation frame.
   */
  readonly animate = new EventEmitter<void>();

  private enabled = false;

  constructor(
    private rendererService: RendererService
  ) {
    this.animationStep = this.animationStep.bind(this);
  }

  /**
   * Start the animation loop.
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

  private animationStep() {
    if (this.enabled) {
      requestAnimationFrame(this.animationStep);
      if (this.animate.observers.length > 0) {
        this.animate.emit();
        /**
         * When all components updated animation, render event is emitted.
         * Main renderer subscribed to this event emitter.
         */
        this.rendererService.render();
      }
    }
  }

}
