import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AtftDataCenterActorModule} from '../atft-data-center-actor.module';
import {RendererService} from '../../../renderer';
import {AnimationService} from '../../../animation';
import {LayerActorComponent} from './layer-actor.component';
import {StatsService} from '../../../stats';

describe('actor', () => {
  describe('LayerActorComponent', () => {
    let component: LayerActorComponent;
    let fixture: ComponentFixture<LayerActorComponent>;

    beforeEach(async(() => {
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
      fixture = TestBed.createComponent(LayerActorComponent);
      component = fixture.componentInstance;
      return TestBed.compileComponents();
    }));


    it('init', async(() => {
      fixture.detectChanges();
      expect(component).toBeTruthy();

      component.onSelected();
      component.onDeselected();
      component.onClick();

    }));


  });
});
