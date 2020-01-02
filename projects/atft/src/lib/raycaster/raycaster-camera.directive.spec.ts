import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RendererService} from '../renderer/renderer.service';
import {Component} from '@angular/core';
import {AnimationService} from '../animation';
import {RaycasterCameraDirective} from '../raycaster/raycaster-camera.directive';
import {StatsService} from '../stats/stats.service';
import {RaycasterService} from './raycaster.service';
import {PerspectiveCameraComponent} from '../camera';

@Component({
  selector: 'atft-mock',
  template: `
      <atft-perspective-camera atft-raycaster-camera></atft-perspective-camera>
  `
})
class MockComponent {

}

describe('raycaster', () => {

  describe('RaycasterCameraDirective', () => {
    let component: MockComponent;
    let fixture: ComponentFixture<MockComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          PerspectiveCameraComponent,
          MockComponent,
          RaycasterCameraDirective
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
