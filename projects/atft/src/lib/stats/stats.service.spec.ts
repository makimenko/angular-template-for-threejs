import {StatsService} from '../stats';

describe('stats', () => {
  describe('StatsService', () => {


    it('create and remove', () => {
      const stats = new StatsService();

      const beforeCount = document.body.childElementCount;
      stats.create();
      expect(beforeCount + 1 === document.body.childElementCount).toBeTruthy();

      stats.update();

      stats.ngOnDestroy();
      expect(beforeCount === document.body.childElementCount).toBeTruthy();

    });

    it('toggle', () => {
      const stats = new StatsService();

      const beforeCount = document.body.childElementCount;
      stats.toggle();
      expect(beforeCount + 1 === document.body.childElementCount).toBeTruthy();

      stats.toggle();
      expect(beforeCount === document.body.childElementCount).toBeTruthy();
    });

    it('event', () => {
      const stats = new StatsService();
      stats.toggle();

      const beforeCount = document.body.childElementCount;

      const eventAltS = new KeyboardEvent('keydown', {altKey: true, key: 's'});
      document.body.dispatchEvent(eventAltS);
      expect(document.body.childElementCount).toBeGreaterThan(beforeCount);

      document.body.dispatchEvent(eventAltS);
      expect(beforeCount === document.body.childElementCount).toBeTruthy();
    });

  });

});
