import {StatsResults, StatsService} from './stats.service';
import {fakeAsync, tick} from '@angular/core/testing';

const empty: StatsResults = {
  ms: 0,
  count: 0,
  callsPerSecond: NaN
};

describe('helper', () => {
  describe('StatsService', () => {

    it('test stats', fakeAsync(() => {
      const stats = new StatsService();
      expect(stats.getStats()).toEqual(empty);
      stats.start();
      tick(10);
      stats.end();

      expect(stats.getStats().count).toEqual(1);
      expect(stats.getStats().ms).toEqual(10);
      expect(stats.getStats().callsPerSecond).toBeGreaterThan(1 / 10 / 1000);

      stats.reset();
      expect(stats.getStats()).toEqual(empty);
    }));

  });
});
