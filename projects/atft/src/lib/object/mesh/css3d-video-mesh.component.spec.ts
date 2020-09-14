import {RendererService} from '../../renderer/renderer.service';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {StatsService} from '../../stats/stats.service';
import {Css3dVideoMeshComponent} from './css3d-video-mesh.component';

describe('mesh', () => {
  describe('Css3dVideoMeshComponent', () => {
    let component: Css3dVideoMeshComponent;
    let fixture: ComponentFixture<Css3dVideoMeshComponent>;

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          Css3dVideoMeshComponent
        ],
        providers: [
          StatsService,
          RendererService
        ]
      });
      fixture = TestBed.createComponent(Css3dVideoMeshComponent);
      component = fixture.componentInstance;
      return TestBed.compileComponents();
    }));

    it('should create an instance', () => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });

  });
});
