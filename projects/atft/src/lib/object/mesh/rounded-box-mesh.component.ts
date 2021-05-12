import {Component, Input, Optional, SkipSelf} from '@angular/core';
import * as THREE from 'three';
import {RendererService} from '../../renderer/renderer.service';
import {provideParent} from '../../util';
import {AbstractObject3D} from '../abstract-object-3d';
import {AbstractMesh} from './abstract-mesh-3d';
import {BoxMeshComponent} from './box-mesh.component';
import {EnvMapService} from '../../renderer';
import {Subscription} from 'rxjs';
import {Texture} from 'three/src/textures/Texture';

@Component({
  selector: 'atft-rounded-box-mesh',
  providers: [provideParent(RoundedBoxMeshComponent)],
  template: '<ng-content></ng-content>'
})
export class RoundedBoxMeshComponent extends AbstractMesh {

  /**
   * Width; that is, the length of the edges parallel to the X axis. Optional; defaults to 1.
   */
  @Input()
  width = 1.0;

  /**
   * Height; that is, the length of the edges parallel to the Y axis. Optional; defaults to 1.
   */
  @Input()
  height = 1.0;

  /**
   * Depth; that is, the length of the edges parallel to the Z axis. Optional; defaults to 1.
   */
  @Input()
  depth = 1.0;

  @Input()
  radius0 = 0.8;

  @Input()
  smoothness = 16;

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

    this.updateEnvMap = this.updateEnvMap.bind(this);
    this.envMapLoaded = envMap.envMapLoaded.subscribe((envMap) => this.updateEnvMap(envMap));

  }

  protected newObject3DInstance() {
    // console.log('BoxMeshComponent.newObject3DInstance');
    const geometry = this.createBoxWithRoundedEdges(this.width, this.height, this.depth, this.radius0, this.smoothness);
    // const material = this.getMaterial();

    const material = new THREE.MeshStandardMaterial({
      color: this.materialColor,
      roughness: this.roughness,
      metalness: this.metalness,
      envMapIntensity: this.envMapIntensity
    });

    const mesh = new THREE.Mesh(geometry, material);
    this.applyShadowProps(mesh);
    return mesh;
  }

  protected createBoxWithRoundedEdges(width, height, depth, radius0, smoothness): THREE.BufferGeometry {
    let shape = new THREE.Shape();
    let eps = 0.00001;
    let radius = radius0 - eps;
    shape.absarc(eps, eps, eps, -Math.PI / 2, -Math.PI, true);
    shape.absarc(eps, height - radius * 2, eps, Math.PI, Math.PI / 2, true);
    shape.absarc(width - radius * 2, height - radius * 2, eps, Math.PI / 2, 0, true);
    shape.absarc(width - radius * 2, eps, eps, 0, -Math.PI / 2, true);
    let geometry = new THREE.ExtrudeBufferGeometry(shape, {
      depth: (depth - radius0 * 2),
      bevelEnabled: true,
      bevelSegments: smoothness * 2,
      steps: 1,
      bevelSize: radius,
      bevelThickness: radius0,
      curveSegments: smoothness
    });

    geometry.center();

    return geometry;
  }


  protected updateEnvMap(envMap: Texture) {
    const mat = this.getObject().material;
    if (mat instanceof THREE.MeshStandardMaterial) {
      mat.envMap = envMap;
      mat.needsUpdate = true;
      this.rendererService.render();
    }
  }

}
