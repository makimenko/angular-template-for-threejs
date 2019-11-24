import {RendererService} from '../../renderer/renderer.service';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PointLightComponent} from './point-light.component';
import {StatsService} from '../../stats';

describe('light', () => {
  describe('PointLightComponent', () => {
    let component: PointLightComponent;
    let fixture: ComponentFixture<PointLightComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          PointLightComponent
        ],
        providers: [
          StatsService,
          RendererService
        ]
      });
      fixture = TestBed.createComponent(PointLightComponent);
      component = fixture.componentInstance;
      component.castShadow = true;
      return TestBed.compileComponents();
    }));

    it('init', () => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });

  });
});
