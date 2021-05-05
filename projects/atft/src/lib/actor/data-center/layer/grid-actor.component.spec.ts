import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {AtftDataCenterActorModule} from '../atft-data-center-actor.module';
import {RendererService} from '../../../renderer';
import {AnimationService} from '../../../animation';
import {StatsService} from '../../../stats';
import {GridActorComponent} from './grid-actor.component';

describe('actor', () => {
  describe('GridActorComponent', () => {
    let component: GridActorComponent;
    let fixture: ComponentFixture<GridActorComponent>;

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          AtftDataCenterActorModule
        ],
        providers: [
          StatsService,
          RendererService,
          AnimationService
        ]
      });
      fixture = TestBed.createComponent(GridActorComponent);
      component = fixture.componentInstance;
      return TestBed.compileComponents();
    }));


    it('init', waitForAsync(() => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
    }));

  });
});
