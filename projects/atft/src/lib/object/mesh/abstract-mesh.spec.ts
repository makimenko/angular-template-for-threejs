import {RendererService} from '../../renderer/renderer.service';
import {async, TestBed} from '@angular/core/testing';
import {AtftMeshModule} from './atft-mesh.module';
import {BoxMeshComponent} from './box-mesh.component';
import * as THREE from 'three';

fdescribe('AbstractMesh (via BoxMeshComponent)', () => {

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

  it('material', () => {
    const fixture = TestBed.createComponent(BoxMeshComponent);
    const component = fixture.componentInstance;
    component.material = 'phong';
    component.materialColor = 0xff0000;
    fixture.detectChanges();

    const material = component.getObject().material as any;
    expect(material.color).toEqual(new THREE.Color(1, 0, 0));
    expect(material.constructor).toBe(THREE.MeshPhongMaterial);
  });

});
