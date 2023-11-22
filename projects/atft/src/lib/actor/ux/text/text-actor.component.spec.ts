import {TextActorComponent} from './text-actor.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {StatsService} from '../../../stats';
import {RendererService} from '../../../renderer';
import {AnimationService} from '../../../animation';
import {FontService, TextMeshComponent} from '../../../object';


describe('ux', () => {

  describe('TextActorComponent', () => {
    let component: TextActorComponent;
    let fixture: ComponentFixture<TextActorComponent>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [
          TextActorComponent,
          TextMeshComponent
        ],
        providers: [
          StatsService,
          RendererService,
          AnimationService,
          FontService
        ]
      });
      fixture = TestBed.createComponent(TextActorComponent);
      TestBed.compileComponents();
    });

    it('init', () => {
      component = fixture.componentInstance;
      component.text = 'Sample Text';
      component.currentText = '';
      component.animate = true;
      component.materialColor = '#ff0000';

      fixture.detectChanges();

      expect(component).toBeTruthy();
      expect(component.currentText).toBe('');
    });

  });

});
