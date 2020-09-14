import {TorusMeshComponent} from './torus-mesh.component';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {RendererService} from '../../renderer/renderer.service';
import {StatsService} from '../../stats';

describe('mesh', () => {
  describe('TorusMeshComponent', () => {
    let component: TorusMeshComponent;
    let fixture: ComponentFixture<TorusMeshComponent>;

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          TorusMeshComponent
        ],
        providers: [
          StatsService,
          RendererService
        ]
      });
      fixture = TestBed.createComponent(TorusMeshComponent);
      component = fixture.componentInstance;
      return TestBed.compileComponents();
    }));


    it('should create an instance', () => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });

  });
});
