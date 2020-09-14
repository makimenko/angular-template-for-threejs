import {RendererService} from '../../renderer/renderer.service';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {StatsService} from '../../stats/stats.service';
import {GridMeshComponent} from './grid-mesh.component';

describe('mesh', () => {
  describe('GridMeshComponent', () => {
    let component: GridMeshComponent;
    let fixture: ComponentFixture<GridMeshComponent>;

    beforeEach(waitForAsync(() => {
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
