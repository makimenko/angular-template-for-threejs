import {Injectable} from '@angular/core';
import Stats from 'three/examples/jsm/libs/stats.module.js';


@Injectable()
export class StatsService {

  private stats: Stats;

  public createStats() {
    if (!this.stats) {
      this.stats = new Stats();
      document.body.appendChild(this.stats.dom);
    }
  }

  public update() {
    if (this.stats) {
      this.stats.update();
    }
  }

}
