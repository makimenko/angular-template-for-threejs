import {Injectable, OnDestroy} from '@angular/core';
import Stats from 'three/examples/jsm/libs/stats.module.js';


@Injectable()
export class StatsService implements OnDestroy {

  private stats: Stats;

  private visible = false;

  constructor() {
    document.body.addEventListener('keydown', event => {
      if (event.altKey && event.key === 's') {
        this.toggle();
      }
    });
  }

  public createStats() {
    if (!this.stats) {
      this.stats = new Stats();
      const dom = this.stats.dom;
      document.body.appendChild(this.stats.dom);
    }
  }

  public update() {
    if (this.stats) {
      this.stats.update();
    }
  }


  public toggle() {
    (this.visible ? this.hide() : this.show());
  }

  public show() {
    this.createStats();
    this.stats.dom.style.display = 'block';
    this.visible = true;
  }

  public hide() {
    this.stats.dom.style.display = 'none';
    this.visible = false;
  }

  ngOnDestroy(): void {
    if (this.stats) {
      this.stats.dom.remove();
      this.stats = null;
    }
  }

}
