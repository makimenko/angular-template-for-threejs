import {TorusMeshComponent} from './torus-mesh.component';
import {async, TestBed} from '@angular/core/testing';
import {RendererService} from '../../renderer';
import {AtftMeshModule} from './atft-mesh.module';

describe('TorusMeshComponent', () => {

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
    const fixture = TestBed.createComponent(TorusMeshComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

});
