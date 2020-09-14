import {RendererService} from '../../renderer/renderer.service';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {StatsService} from '../../stats';
import {AxesHelperComponent} from './axes-helper.component';

describe('helper', () => {
  describe('AxesHelperComponent', () => {
    let component: AxesHelperComponent;
    let fixture: ComponentFixture<AxesHelperComponent>;

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          AxesHelperComponent
        ],
        providers: [
          StatsService,
          RendererService
        ]
      });
      fixture = TestBed.createComponent(AxesHelperComponent);
      component = fixture.componentInstance;
      return TestBed.compileComponents();
    }));

    it('init', () => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });

  });
});
