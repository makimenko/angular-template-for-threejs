import {ComponentFixture, TestBed} from '@angular/core/testing';
import {StatsService} from '../../../stats';
import {RendererService} from '../../../renderer';
import {AnimationService} from '../../../animation';
import {TextMeshComponent} from '../../../object';
import {LoaderActorComponent} from './loader-actor.component';


describe('ux', () => {

  describe('LoaderActorComponent', () => {
    let component: LoaderActorComponent;
    let fixture: ComponentFixture<LoaderActorComponent>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [
          LoaderActorComponent,
          TextMeshComponent
        ],
        providers: [
          StatsService,
          RendererService,
          AnimationService
        ]
      });
      fixture = TestBed.createComponent(LoaderActorComponent);
      TestBed.compileComponents();
    });

    it('init', () => {
      component = fixture.componentInstance;
      component.animate = true;
      component.materialColor = '#ff0000';

      fixture.autoDetectChanges(true);
      fixture.detectChanges();

      expect(component).toBeTruthy();
    });

  });

});
