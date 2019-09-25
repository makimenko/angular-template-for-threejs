import {RendererService} from '../../renderer/renderer.service';
import {async, TestBed} from '@angular/core/testing';
import {AtftMeshModule} from './atft-mesh.module';
import {BoxMeshComponent} from './box-mesh.component';
import * as THREE from 'three';
import {SimpleChange} from '@angular/core';

describe('AbstractMesh (via BoxMeshComponent)', () => {

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

  it('material properly initialized', () => {
    const fixture = TestBed.createComponent(BoxMeshComponent);
    const component = fixture.componentInstance;
    component.material = 'phong';
    component.materialColor = 0xff0000;
    component.depthWrite = true;
    fixture.detectChanges();

    const material = component.getObject().material as any;
    expect(material.color).toEqual(new THREE.Color(1, 0, 0));
    expect(material.constructor).toBe(THREE.MeshPhongMaterial);
    expect(material.depthWrite).toBeTruthy();
  });


  it('material changed via ngOnChanges', () => {
    const fixture = TestBed.createComponent(BoxMeshComponent);
    const component = fixture.componentInstance;
    component.material = 'phong';
    component.materialColor = 0xff0000;
    component.depthWrite = true;
    fixture.detectChanges();

    // Make sure that material could be changed at runtime:
    component.material = 'lamb';
    component.materialColor = 0x00ff00;
    component.depthWrite = false;
    component.ngOnChanges({
      materialColor: new SimpleChange('', component.materialColor, true),
      material: new SimpleChange('', component.material, true),
      depthWrite: new SimpleChange('', component.depthWrite, true)
    });
    const adjustedMaterial = component.getObject().material as any;
    expect(adjustedMaterial.color).toEqual(new THREE.Color(0, 1, 0));
    expect(adjustedMaterial.constructor).toBe(THREE.MeshLambertMaterial);
    expect(adjustedMaterial.depthWrite).toBeFalsy();
  });


  it('shadow properly initialized', () => {
    const fixture = TestBed.createComponent(BoxMeshComponent);
    const component = fixture.componentInstance;
    component.castShadow = true;
    component.receiveShadow = true;
    fixture.detectChanges();

    expect(component.getObject().castShadow).toBeTruthy();
    expect(component.getObject().receiveShadow).toBeTruthy();
  });


});
