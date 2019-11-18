import {AnimationService} from './animation.service';
import {RendererService, StatsService} from '../renderer';
import {fakeAsync, tick} from '@angular/core/testing';

describe('animation', () => {
  describe('AnimationService', () => {


    it('validate', fakeAsync(() => {
      const stats = new StatsService();
      const renderer = new RendererService(stats);
      const animation = new AnimationService(renderer);

      let called = false;
      animation.animate.subscribe(() => {
        called = true;
      });
      spyOn(window, 'requestAnimationFrame').and.callThrough();
      animation.start();

      tick();
      animation.stop();

      expect(window.requestAnimationFrame).toHaveBeenCalled();
      expect(called).toBeTruthy();
    }));


  });

});
