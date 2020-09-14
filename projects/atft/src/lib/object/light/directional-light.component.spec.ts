import {RendererService} from '../../renderer/renderer.service';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {DirectionalLightComponent} from './directional-light.component';
import {StatsService} from '../../stats';

describe('light', () => {
  describe('DirectionalLightComponent', () => {
    let component: DirectionalLightComponent;
    let fixture: ComponentFixture<DirectionalLightComponent>;

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          DirectionalLightComponent
        ],
        providers: [
          StatsService,
          RendererService
        ]
      });
      fixture = TestBed.createComponent(DirectionalLightComponent);
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
