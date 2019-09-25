import {CylinderMeshComponent} from './cylinder-mesh.component';
import {RendererService} from '../../renderer/renderer.service';
import {async, TestBed} from '@angular/core/testing';
import {AtftMeshModule} from './atft-mesh.module';
import {FrameMeshComponent} from './frame-mesh.component';
import {BoxMeshComponent} from './box-mesh.component';

describe('BoxMeshComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AtftMeshModule
      ],
      providers: [
        RendererService
      ]
    });
    return TestBed.compileComponents();
  }));

  it('should create an instance', () => {
    const fixture = TestBed.createComponent(BoxMeshComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

});
