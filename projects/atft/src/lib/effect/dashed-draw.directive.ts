import {AfterViewInit, Directive} from '@angular/core';
import {AbstractObject3D} from '../object/abstract-object-3d';
import * as THREE from 'three';
import {AnimationService} from '../animation/animation.service';

@Directive({selector: '[atft-dashed-draw]'})
export class DashedDrawDirective implements AfterViewInit {

  private edges: any;

  constructor(
    private host: AbstractObject3D<any>,
    private animation: AnimationService
  ) {

  }

  ngAfterViewInit(): void {
    console.log('Dashed draw for', this.host);

    const object = this.host.getObject() as THREE.Object3D;

    const list = new THREE.Group();

    object.traverse(child => {
      if (child instanceof THREE.Mesh) {
        // child.material = new THREE.MeshBasicMaterial({color: 0x999999});
        console.log(child);

        const edgesGeom = new THREE.EdgesGeometry(child.geometry, 8);
        this.edges = new THREE.LineSegments(edgesGeom, new THREE.LineDashedMaterial({color: 0xDA1111}));
        this.edges.computeLineDistances();
        // console.log(this.edges);
        this.edges.material.dashSize = 0;
        this.edges.material.gapSize = this.edges.geometry.attributes
          .lineDistance.array[this.edges.geometry.attributes.lineDistance.count - 1];


        const material = child.material as THREE.Material;
        material.transparent = true;
        material.opacity = 0.2;

        // this.edges.scale.x = 1.01;
        // this.edges.scale.y = 1.01;
        // this.edges.scale.z = 1.01;
        child.add(this.edges);

        // scene.add(this.edges);
        // child.scale.setScalar(0.999);
        // child.visible = false;
        // edges.add(child);
      }
    });


    this.animate = this.animate.bind(this);
    this.animation.animate.subscribe(this.animate);
    this.animation.start();
  }

  private animate() {

    // console.log(this.host.getObject().parentScene);
    if (this.edges) {
      this.edges.material.dashSize += 2;
      if (this.edges.material.dashSize >= this.edges.material.gapSize) {
        // edges.material.color.set(0xffffff);
        // edges.children[0].visible = true;
        // this.animation.animate.unsubscribe();
      }
    }

  }

}
