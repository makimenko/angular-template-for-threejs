import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DashedDrawDirective} from './dashed-draw.directive';
import {StatsService} from '../stats';
import {RendererService} from '../renderer';
import {AnimationService} from '../animation';
import {Component} from '@angular/core';
import {BoxMeshComponent} from '../object';


@Component({
  template: `
  <atft-box-mesh atft-dashed-draw></atft-box-mesh>
  `
})
export class MockComponent { }

describe('effect', () => {

  describe('DashedDrawDirective', () => {
    let component: MockComponent;
    let fixture: ComponentFixture<MockComponent>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [
          DashedDrawDirective,
          MockComponent,
          BoxMeshComponent
        ],
        providers: [
          StatsService,
          RendererService,
          AnimationService,
        ]
      });
      fixture = TestBed.createComponent(MockComponent);
      TestBed.compileComponents();
    });

    it('init', () => {
      component = fixture.componentInstance;

      fixture.detectChanges();
      expect(component).toBeTruthy();
    });

  });

});
