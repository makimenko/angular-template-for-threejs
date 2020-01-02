import {RendererService} from '../../renderer/renderer.service';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {StatsService} from '../../stats';
import {GridHelperComponent} from './grid-helper.component';

describe('helper', () => {
  describe('GridHelperComponent', () => {
    let component: GridHelperComponent;
    let fixture: ComponentFixture<GridHelperComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          GridHelperComponent
        ],
        providers: [
          StatsService,
          RendererService
        ]
      });
      fixture = TestBed.createComponent(GridHelperComponent);
      component = fixture.componentInstance;
      return TestBed.compileComponents();
    }));

    it('init', () => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });

  });
});
