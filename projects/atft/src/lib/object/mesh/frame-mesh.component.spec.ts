import {RendererService} from '../../renderer/renderer.service';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AtftMeshModule} from './atft-mesh.module';
import {FrameMeshComponent} from './frame-mesh.component';
import {StatsService} from '../../stats';

describe('mesh', () => {
  describe('FrameMeshComponent', () => {
    let component: FrameMeshComponent;
    let fixture: ComponentFixture<FrameMeshComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          AtftMeshModule
        ],
        providers: [
          StatsService,
          RendererService
        ]
      });
      fixture = TestBed.createComponent(FrameMeshComponent);
      component = fixture.componentInstance;
      return TestBed.compileComponents();
    }));

    it('should create an instance', () => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });

  });
});
