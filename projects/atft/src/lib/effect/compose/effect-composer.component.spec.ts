import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {StatsService} from '../../stats';
import {RendererService} from '../../renderer';
import {AnimationService} from '../../animation';
import {EffectComposerComponent} from './effect-composer.component';
import {BlurComponent} from './blur.component';


@Component({
  template: `
  <atft-effect-composer>
  </atft-effect-composer>
  `
})
export class MockComponent { }

describe('effect', () => {

  describe('EffectComposerComponent', () => {
    let component: MockComponent;
    let fixture: ComponentFixture<MockComponent>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [
          MockComponent,
          EffectComposerComponent,
          BlurComponent
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
