export class Stats {

  private lastTime: number;

  private ms = 0;
  private count = 0;
  private interval;
  private name: string;

  constructor(name: string, printEveryMs: number) {
    this.name = name;
    this.interval = setInterval(() => {
      this.print();
    }, printEveryMs);
  }

  start() {
    this.lastTime = Date.now();
  }

  end() {
    const deltaMs = Date.now() - this.lastTime;
    this.ms += deltaMs;
    this.count++;
  }

  print() {
    if (this.count > 0) {
      const cps = Math.round(this.count / (this.ms / 1000));
      console.log(`Stats-${this.name}: ${cps} calls/sec`);
      this.ms = 0;
      this.count = 0;
    }
  }

  terminate() {
    clearInterval(this.interval);
  }

}
