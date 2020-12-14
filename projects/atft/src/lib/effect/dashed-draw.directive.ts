import {AfterViewInit, Directive, Input} from '@angular/core';
import {AbstractObject3D} from '../object/abstract-object-3d';
import * as THREE from 'three';
import {AnimationService} from '../animation/animation.service';
import {appliedColor} from '../util';

@Directive({selector: '[atft-dashed-draw]'})
export class DashedDrawDirective implements AfterViewInit {

  @Input() dashColor = 0xFF0000;
  @Input() dashIncrement = 10;

  private edges: any;

  private material: THREE.Material;
  private stop = false;

  constructor(
    private host: AbstractObject3D<any>,
    private animation: AnimationService
  ) {

  }

  ngAfterViewInit(): void {
    // console.log('DashedDrawDirective.ngAfterViewInit: Dashed draw for', this.host);

    this.tryToFindGeometry();

    this.animate = this.animate.bind(this);
    this.animation.animate.subscribe(this.animate);
    this.animation.start();
  }

  private tryToFindGeometry() {
    const object = this.host.getObject() as THREE.Object3D;
    object.traverse(child => {
      const findMesh = (child instanceof THREE.Mesh ? child : child.children[0]);

      if (findMesh && findMesh instanceof THREE.Mesh) {
        // console.log('DashedDrawDirective.ngAfterViewInit: child', findMesh);
        // child.findMesh = new THREE.MeshBasicMaterial({color: 0x999999});
        // console.log(child);

        const edgesGeom = new THREE.EdgesGeometry(findMesh.geometry, 8);
        this.edges = new THREE.LineSegments(edgesGeom, new THREE.LineDashedMaterial({color: appliedColor(this.dashColor)}));
        this.edges.computeLineDistances();
        // console.log(this.edges);
        this.edges.material.dashSize = 0;
        this.edges.material.gapSize = this.edges.geometry.attributes
          .lineDistance.array[this.edges.geometry.attributes.lineDistance.count - 1];


        this.material = findMesh.material as THREE.Material;
        // console.log('DashedDrawDirective.tryToFindGeometry original material', this.material);

        this.material.transparent = true;
        this.material.opacity = 0.2;

        findMesh.add(this.edges);

      } else {
        // console.log('DashedDrawDirective.ngAfterViewInit: cant find geometry yet');
      }
    });
  }

  private animate() {

    // console.log(this.host.getObject().parentScene);
    if (!this.stop) {
      if (this.edges) {
        this.edges.material.dashSize += this.dashIncrement;
        if (this.edges.material.dashSize >= this.edges.material.gapSize) {

          // this.edges.parent.children = [];
          this.material.transparent = false;
          this.material.opacity = 1;
          this.stop = true;
        }
      } else {
        this.tryToFindGeometry();
      }
    }

  }

}
