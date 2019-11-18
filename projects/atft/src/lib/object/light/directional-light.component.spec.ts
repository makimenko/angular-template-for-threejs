import {RendererService} from '../../renderer/renderer.service';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AtftLightModule} from './atft-light.module';
import {DirectionalLightComponent} from './directional-light.component';
import {StatsService} from '../../renderer';

describe('light', () => {
  describe('DirectionalLightComponent', () => {
    let component: DirectionalLightComponent;
    let fixture: ComponentFixture<DirectionalLightComponent>;

    beforeEach(async(() => {
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
