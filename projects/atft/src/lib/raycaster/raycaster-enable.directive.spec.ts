import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {RendererService} from '../renderer/renderer.service';
import {Component} from '@angular/core';
import {AnimationService} from '../animation';
import {StatsService} from '../stats/stats.service';
import {RaycasterService} from './raycaster.service';
import {PerspectiveCameraComponent} from '../camera';
import {RaycasterEnableDirective} from './raycaster-enable.directive';

@Component({
  selector: 'atft-mock',
  template: `
    <atft-perspective-camera atft-raycaster-enable></atft-perspective-camera>
  `
})
class MockComponent {

}

describe('raycaster', () => {

  describe('RaycasterEnableDirective', () => {
    let component: MockComponent;
    let fixture: ComponentFixture<MockComponent>;

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          PerspectiveCameraComponent,
          MockComponent,
          RaycasterEnableDirective
        ],
        providers: [
          StatsService,
          RendererService,
          AnimationService,
          RaycasterService
        ]
      });
      fixture = TestBed.createComponent(MockComponent);
      component = fixture.componentInstance;
      return TestBed.compileComponents();
    }));

    it('init', () => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });
  });

});
