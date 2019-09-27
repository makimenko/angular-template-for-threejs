import {RendererService} from '../../renderer/renderer.service';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AtftMeshModule} from './atft-mesh.module';
import {BoxMeshComponent} from './box-mesh.component';

describe('mesh', () => {
  describe('BoxMeshComponent', () => {
    let component: BoxMeshComponent;
    let fixture: ComponentFixture<BoxMeshComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          AtftMeshModule
        ],
        providers: [
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
