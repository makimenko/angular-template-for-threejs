import {EventEmitter, Injectable} from '@angular/core';


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

  /**
   * When all components updated animation, render event is emitted.
   * Main renderer subscribed to this event emitter.
   */
  readonly render = new EventEmitter<void>();

  private enabled = true;

  constructor() {
    this.animationStep = this.animationStep.bind(this);
    this.start();
  }

  /**
   * By default animation is started in the beginning.
   * If stop() was called, then start() will continue animation
   */
  public start() {
    this.enabled = true;
    this.animationStep();
  }

  /**
   * Stop all animations.
   */
  public stop() {
    this.enabled = false;
  }

  private animationStep() {
    if (this.enabled) {
      requestAnimationFrame(this.animationStep);
      if (this.animate.observers.length > 0) {
        this.animate.emit();
        this.render.emit();
      }
    }
  }

}
