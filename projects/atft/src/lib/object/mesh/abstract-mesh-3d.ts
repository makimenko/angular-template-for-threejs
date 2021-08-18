import {Input, OnChanges, SimpleChanges, Directive, SkipSelf, Optional} from '@angular/core';
import * as THREE from 'three';
import {AbstractObject3D} from '../abstract-object-3d';
import {appliedMaterial, MaterialType} from '../../util';
import {EnvMapService, RendererService} from '../../renderer';
import {Subscription} from 'rxjs';
import {Texture} from 'three/src/textures/Texture';

@Directive()
export abstract class AbstractMesh extends AbstractObject3D<THREE.Mesh> implements OnChanges {

  @Input()
  material: string;

  @Input()
  materialColor: string | number = '#5DADE2';

  @Input()
  castShadow = true;

  @Input()
  receiveShadow = true;

  @Input()
  depthWrite = true;

  @Input()
  roughness = 0.05;

  @Input()
  metalness = 0.9;

  @Input()
  envMapIntensity = 1;

  protected envMapLoaded: Subscription;

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>,
    protected envMap: EnvMapService
  ) {
    super(rendererService, parent);

  }

  protected afterInit() {
    super.afterInit();
    if (this.material == MaterialType.standard) {
      this.updateEnvMap = this.updateEnvMap.bind(this);
      this.envMapLoaded = this.envMap.envMapLoaded.subscribe((envMap) => this.updateEnvMap(envMap));
    }
  }

  protected getMaterial(): THREE.Material {
    return appliedMaterial(this.materialColor, this.material, this.depthWrite, this.roughness, this.metalness, this.envMapIntensity);
  }

  protected applyShadowProps(mesh: THREE.Mesh) {
    mesh.castShadow = this.castShadow;
    mesh.receiveShadow = this.receiveShadow;
  }

  public ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);
    if (!this.getObject()) {
      return;
    }

    let mustRerender = false;
    if (['material', 'materialColor', 'depthWrite'].some(propName => propName in changes)) {
      this.applyMaterial();
      mustRerender = true;
    }

    if (mustRerender) {
      this.rendererService.render();
    }
  }

  public applyMaterial() {
    this.getObject().material = this.getMaterial();
  }


  protected updateEnvMap(envMap: Texture) {
    // console.log('AbstractMesh.updateEnvMap');
    const mat = this.getObject().material;
    if (mat instanceof THREE.MeshStandardMaterial) {
      mat.envMap = envMap;
      mat.needsUpdate = true;
      this.rendererService.render();
    }
  }

}
