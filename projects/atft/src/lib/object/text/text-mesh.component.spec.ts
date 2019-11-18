import {RendererService} from '../../renderer/renderer.service';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TextMeshComponent} from './text-mesh.component';
import {StatsService} from '../../renderer';

describe('text', () => {
  describe('TextMeshComponent', () => {
    let component: TextMeshComponent;
    let fixture: ComponentFixture<TextMeshComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          TextMeshComponent
        ],
        providers: [
          StatsService,
          RendererService
        ]
      });
      fixture = TestBed.createComponent(TextMeshComponent);
      component = fixture.componentInstance;
      component.castShadow = true;
      return TestBed.compileComponents();
    }));

    it('init', () => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });

  });
});
