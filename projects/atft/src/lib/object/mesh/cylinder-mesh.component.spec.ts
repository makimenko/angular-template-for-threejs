import {CylinderMeshComponent} from './cylinder-mesh.component';
import {RendererService} from '../../renderer/renderer.service';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {StatsService} from '../../stats';

describe('mesh', () => {
  describe('CylinderMeshComponent', () => {
    let component: CylinderMeshComponent;
    let fixture: ComponentFixture<CylinderMeshComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          CylinderMeshComponent
        ],
        providers: [
          StatsService,
          RendererService
        ]
      });
      fixture = TestBed.createComponent(CylinderMeshComponent);
      component = fixture.componentInstance;
      return TestBed.compileComponents();
    }));

    it('should create an instance', () => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });

  });
});
