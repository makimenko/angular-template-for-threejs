import {RendererService} from '../../renderer/renderer.service';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {BoxMeshComponent} from './box-mesh.component';
import * as THREE from 'three';
import {SimpleChange} from '@angular/core';
import {StatsService} from '../../stats';

describe('mesh', () => {
  describe('AbstractMesh (via BoxMeshComponent)', () => {

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

    it('material properly initialized', () => {
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
      component.castShadow = true;
      component.receiveShadow = true;
      fixture.detectChanges();

      expect(component.getObject().castShadow).toBeTruthy();
      expect(component.getObject().receiveShadow).toBeTruthy();
    });


  });

});
