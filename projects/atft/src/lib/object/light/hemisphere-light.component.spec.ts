import {RendererService} from '../../renderer/renderer.service';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HemisphereLightComponent} from './hemisphere-light.component';

describe('light', () => {
  describe('HemisphereLightComponent', () => {
    let component: HemisphereLightComponent;
    let fixture: ComponentFixture<HemisphereLightComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          HemisphereLightComponent
        ],
        providers: [
          RendererService
        ]
      });
      fixture = TestBed.createComponent(HemisphereLightComponent);
      component = fixture.componentInstance;
      return TestBed.compileComponents();
    }));

    it('init', () => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });

  });
});
