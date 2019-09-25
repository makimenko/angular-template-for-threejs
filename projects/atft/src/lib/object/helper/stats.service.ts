import {Injectable} from '@angular/core';

export interface StatsResults {
  ms: number;
  count: number;
  callsPerSecond: number;
}

@Injectable()
export class StatsService {

  private lastTime: number;
  private ms = 0;
  private count = 0;

  start() {
    this.lastTime = Date.now();
  }

  end() {
    const deltaMs = Date.now() - this.lastTime;
    this.ms += deltaMs;
    this.count++;
  }

  getStats(): StatsResults {
    return {
      ms: this.ms,
      count: this.count,
      callsPerSecond: Math.round(this.count / (this.ms / 1000))
    };
  }

  reset() {
    this.ms = 0;
    this.count = 0;
  }

}
