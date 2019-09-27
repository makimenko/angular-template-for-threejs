import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ServerActorComponent} from './server-actor.component';
import {AtftDataCenterActorModule} from '../atft-data-center-actor.module';
import {RendererService} from '../../../renderer';
import {AnimationService} from '../../../animation';

describe('actor', () => {
  describe('ServerActorComponent', () => {
    let component: ServerActorComponent;
    let fixture: ComponentFixture<ServerActorComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          AtftDataCenterActorModule
        ],
        providers: [
          RendererService,
          AnimationService
        ]
      });
      fixture = TestBed.createComponent(ServerActorComponent);
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
