import {RendererService} from '../../renderer/renderer.service';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {BoxMeshComponent} from './box-mesh.component';
import {StatsService} from '../../stats';

describe('mesh', () => {
  describe('BoxMeshComponent', () => {
    let component: BoxMeshComponent;
    let fixture: ComponentFixture<BoxMeshComponent>;

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          BoxMeshComponent
        ],
        providers: [
          StatsService,
          RendererService
        ]
      });
      fixture = TestBed.createComponent(BoxMeshComponent);
      component = fixture.componentInstance;
      return TestBed.compileComponents();
    }));

    it('should create an instance', () => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });

  });
});
