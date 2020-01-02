import {RendererService} from '../../renderer/renderer.service';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AtftMeshModule} from './atft-mesh.module';
import {StatsService} from '../../stats/stats.service';
import {GridMeshComponent} from './grid-mesh.component';

describe('mesh', () => {
  describe('GridMeshComponent', () => {
    let component: GridMeshComponent;
    let fixture: ComponentFixture<GridMeshComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          GridMeshComponent
        ],
        providers: [
          StatsService,
          RendererService
        ]
      });
      fixture = TestBed.createComponent(GridMeshComponent);
      component = fixture.componentInstance;
      return TestBed.compileComponents();
    }));

    it('should create an instance', () => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });

  });
});
