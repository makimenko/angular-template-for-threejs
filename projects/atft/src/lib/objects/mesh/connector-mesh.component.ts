import {Component, forwardRef, Input} from '@angular/core';
import * as THREE from 'three';
import {AbstractObject3D} from '../abstract-object-3d';
import {MeshLine, MeshLineMaterial} from 'three.meshline';

@Component({
  selector: 'atft-connector-mesh',
  providers: [{provide: AbstractObject3D, useExisting: forwardRef(() => ConnectorMeshComponent)}],
  template: '<ng-content></ng-content>'
})
export class ConnectorMeshComponent extends AbstractObject3D<THREE.Mesh> {

  @Input()
  source: AbstractObject3D<THREE.Object3D>;

  @Input()
  target: AbstractObject3D<THREE.Object3D>;

  @Input()
  materialColor = 0xff0000;

  @Input()
  transparent = true;

  @Input()
  opacity = 0.9;

  @Input()
  lineWidth = 1;

  @Input()
  depthWrite = false;

  @Input()
  depthTest = true;


  private geometry: THREE.Geometry;
  private line: MeshLine;


  constructor() {
    super();
    console.log('ConnectorMeshComponent.constructor');
  }

  protected newObject3DInstance(): THREE.Mesh {
    console.log('ConnectorMeshComponent.newObject3DInstance');

    this.geometry = this.getGeometry();

    this.line = new MeshLine();
    this.line.setGeometry(this.geometry);

    let appliedColor = 0xffff00;
    if (this.materialColor !== undefined ) {
      appliedColor = this.materialColor * 1;
    }

    const material = new MeshLineMaterial({
      // TODO: dynamic parameters
      color: appliedColor,
      transparent: this.transparent,
      opacity: this.opacity,
      lineWidth: this.lineWidth,
      depthWrite: this.depthWrite,
      depthTest: this.depthTest,
      side: THREE.DoubleSide,
      blending: THREE.NormalBlending
    });
    const mesh = new THREE.Mesh(this.line.geometry, material);
    this.watchObjectsChanges();
    return mesh;
  }

  private watchObjectsChanges() {
    this.source.render.subscribe(item => {
      this.updateLineGeometry();
    });

    this.target.render.subscribe(item => {
      this.updateLineGeometry();
    });
  }

  private getGeometry(): THREE.Geometry {
    const geo = new THREE.Geometry();
    if (!this.source || !this.target) {
      throw new Error('ConnectorMeshComponent: source or target inputs are missing!');
    }
    geo.vertices.push(this.source.getObject().position);
    geo.vertices.push(this.target.getObject().position);
    return geo;
  }

  private updateLineGeometry(): void {
    // https://github.com/spite/THREE.MeshLine/issues/51#issuecomment-379579926
    this.line.setGeometry(this.geometry);
    this.render.emit();
  }

}
