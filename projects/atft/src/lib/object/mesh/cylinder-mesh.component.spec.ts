import {CylinderMeshComponent} from './cylinder-mesh.component';
import {RendererService} from '../../renderer';
import {async, TestBed} from '@angular/core/testing';
import {AtftMeshModule} from './atft-mesh.module';

describe('CylinderMeshComponent', () => {

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
    const fixture = TestBed.createComponent(CylinderMeshComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

});
