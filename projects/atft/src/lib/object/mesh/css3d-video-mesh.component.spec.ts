import {RendererService} from '../../renderer/renderer.service';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AtftMeshModule} from './atft-mesh.module';
import {StatsService} from '../../stats/stats.service';
import {Css3dVideoMeshComponent} from './css3d-video-mesh.component';

describe('mesh', () => {
  describe('Css3dVideoMeshComponent', () => {
    let component: Css3dVideoMeshComponent;
    let fixture: ComponentFixture<Css3dVideoMeshComponent>;

    beforeEach(async(() => {
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
