import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {RendererService} from '../renderer/renderer.service';
import {Component} from '@angular/core';
import {AnimationService} from '../animation';
import {StatsService} from '../stats/stats.service';
import {RaycasterService} from './raycaster.service';
import {RaycasterEnableDirective} from './raycaster-enable.directive';
import {EmptyComponent} from '../object/helper';
import {RaycasterGroupDirective} from './raycaster-group.directive';

@Component({
  selector: 'atft-mock',
  template: `
    <atft-empty atft-raycaster-group></atft-empty>
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
          EmptyComponent,
          MockComponent,
          RaycasterGroupDirective
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
