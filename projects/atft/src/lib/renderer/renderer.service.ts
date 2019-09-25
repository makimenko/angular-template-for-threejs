import {EventEmitter, Injectable, OnDestroy} from '@angular/core';

@Injectable()
export class RendererService implements OnDestroy {

  readonly render = new EventEmitter<void>();

  constructor() {

  }

  ngOnDestroy() {

  }

  /**
   * Emit render event
   */
  public request() {
    this.render.emit();
  }

}
