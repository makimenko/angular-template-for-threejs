import {RendererService} from '../../renderer';
import {async, TestBed} from '@angular/core/testing';
import {AtftMeshModule} from './atft-mesh.module';
import {FrameMeshComponent} from './frame-mesh.component';

describe('FrameMeshComponent', () => {

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
    const fixture = TestBed.createComponent(FrameMeshComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

});
