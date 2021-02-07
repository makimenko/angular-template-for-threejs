import {Component, Injector, Input, OnDestroy, OnInit, Optional, SkipSelf} from '@angular/core';
import {AbstractObject3D, MeshLineConnectorComponent} from '../../../object';
import {provideParent} from '../../../util';
import * as THREE from 'three';
import {RendererService} from '../../../renderer';
import {DagreLayoutComponent} from './dagre-layout.component';
import {AnimationService} from '../../../animation';

@Component({
  selector: 'atft-dagre-edge',
  providers: [provideParent(DagreEdgeComponent)],
  template: '<ng-content></ng-content>'
})
export class DagreEdgeComponent extends MeshLineConnectorComponent implements OnInit, OnDestroy {

  @Input() animated = true;
  @Input() from: string;
  @Input() to: string;

  public positions: Array<number>;
  protected dagreLayout: DagreLayoutComponent;


  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>,
    protected animationService: AnimationService,
    protected injector: Injector
  ) {
    super(rendererService, parent, animationService);

    this.dagreLayout = this.injector.get<DagreLayoutComponent>(DagreLayoutComponent);
    if (!this.dagreLayout) {
      console.warn('DagreEdgeComponent.constructor: atft-dagre-layout not found!');
    }
  }


  protected getLineGeometry(): THREE.BufferGeometry {
    if (this.source || this.target) {
      console.warn('DagreEdgeComponent.getLineGeometry source/target inputs ignored. Please use from/to instead');
    }
    if (!this.from || !this.to) {
      throw new Error('DagreEdgeComponent: from or to inputs are missing!');
    }
    // console.log('DagreCompositionComponent.getLineGeometry', this.positions);
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(this.positions, 3));
    return geometry;
  }


  ngOnInit() {
    super.ngOnInit();
    this.addEdge();
  }


  protected addEdge() {
    if (this.dagreLayout && this.dagreLayout.getGraphModel()) {
      // console.log('DagreEdgeComponent.addEdge', this.name);

      // Register as layout children
      this.dagreLayout.getChildren().push(this);

      // Create Graph edge:
      if (this.from && this.to) {
        this.dagreLayout.getGraphModel().edges.push({
          name: this.name,
          from: this.from,
          to: this.to
        });
      } else {
        console.warn('DagreEdgeComponent.addChild: edge source/target is undefined');
      }

      // Update Graph Layout
      this.dagreLayout.refreshLayout();
    }
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.removeEdge();
  }

  protected removeEdge() {
    if (this.dagreLayout && this.dagreLayout.getGraphModel()) {
      // console.log('DagreNodeComponent.removeNode', this.name);

      // Remove from layout
      this.dagreLayout.removeChildByName(this.name);

      // Remove from model
      this.dagreLayout.getGraphModel().edges = this.dagreLayout.getGraphModel().edges.filter(i => i.name !== this.name);

      // Update Graph Layout
      this.dagreLayout.refreshLayout();
    }
  }


}
