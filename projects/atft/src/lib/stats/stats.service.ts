import {Injectable, OnDestroy} from '@angular/core';
import Stats from 'three/examples/jsm/libs/stats.module.js';


@Injectable()
export class StatsService implements OnDestroy {

  private stats?: Stats;

  constructor() {
    document.body.addEventListener('keydown', event => {
      if (event.altKey && event.key === 's') {
        this.toggle();
      }
    });
  }

  public update() {
    if (this.stats) {
      this.stats.update();
    }
  }


  public toggle() {
    (this.stats ? this.remove() : this.create());
  }

  public create() {
    if (!this.stats) {
      this.stats = new Stats();
      document.body.appendChild(this.stats.dom);
    }
  }

  public remove() {
    if (this.stats) {
      this.stats.dom.remove();
      // @ts-ignore
      this.stats.dom = undefined;
      this.stats = undefined;
    }
  }

  ngOnDestroy(): void {
    this.remove();
  }

}
