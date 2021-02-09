import {AfterViewInit, Directive, Input, OnDestroy} from '@angular/core';
import {AbstractObject3D} from '../object/abstract-object-3d';
import * as THREE from 'three';
import {AnimationService} from '../animation/animation.service';
import {appliedColor} from '../util';
import {Subscription} from 'rxjs';

@Directive({selector: '[atft-dashed-draw]'})
export class DashedDrawDirective implements AfterViewInit, OnDestroy {

  @Input() dashColor = 0xFF0000;
  @Input() dashIncrement = 10;
  @Input() initialOpacity;
  @Input() targetOpacity;
  @Input() hideDash = false; // hide dash lines at the end of animation

  private edges: any;
  private material: THREE.Material;
  private stop = false;
  protected animation: Subscription;

  constructor(
    private host: AbstractObject3D<any>,
    private animationService: AnimationService
  ) {
  }

  ngAfterViewInit(): void {
    // console.log('DashedDrawDirective.ngAfterViewInit: Dashed draw for', this.host);
    this.tryToFindGeometry();
    this.animate = this.animate.bind(this);
    this.animation = this.animationService.animate.subscribe(this.animate);
    this.animationService.start();
  }


  private tryToFindGeometry() {
    const object = this.host.getObject() as THREE.Object3D;
    object.traverse(child => {
      const findMesh = (child instanceof THREE.Mesh ? child : child.children[0]);

      if (findMesh && findMesh instanceof THREE.Mesh && !this.edges) {
        // console.log('DashedDrawDirective.ngAfterViewInit: child', findMesh);

        const edgesGeom = new THREE.EdgesGeometry(findMesh.geometry, 8);
        this.edges = new THREE.LineSegments(edgesGeom, new THREE.LineDashedMaterial({color: appliedColor(this.dashColor)}));
        this.edges.computeLineDistances();
        this.edges.material.dashSize = 0;
        this.edges.material.gapSize = this.edges.geometry.attributes
          .lineDistance.array[this.edges.geometry.attributes.lineDistance.count - 1];
        this.material = findMesh.material as THREE.Material;
        // console.log('DashedDrawDirective.tryToFindGeometry original material', this.material);

        if (this.initialOpacity >= 0.0) {
          // console.log('initialOpacity', this.initialOpacity);
          if (!this.material.transparent) {
            this.material.transparent = true;
          }
          this.material.opacity = this.initialOpacity;
        }
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

          if (this.hideDash) {
            this.edges.parent.children = [];
          }
          if (this.targetOpacity >= 0.0) {
            this.material.opacity = this.targetOpacity;
            if (this.targetOpacity === 1) {
              this.material.transparent = false;
            }
          }
          this.stop = true;
        }
      } else {
        this.tryToFindGeometry();
      }
    }

  }

  ngOnDestroy() {
    this.animation?.unsubscribe();
  }

}
