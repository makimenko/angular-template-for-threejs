import {Component, Injector, Input, OnDestroy, OnInit, Optional, SkipSelf} from '@angular/core';
import * as dagre from 'dagre';
import * as THREE from 'three';
import {AnimationService} from '../../../animation';
import {AbstractObject3D, LineConnectorComponent, MeshLineConnectorComponent} from '../../../object';
import {RendererService} from '../../../renderer';
import {provideParent} from '../../../util';
import {DagreLayoutComponent} from './dagre-layout.component';
import {Subscription} from 'rxjs';

@Component({
  selector: 'atft-dagre-edge',
  providers: [provideParent(DagreEdgeComponent)],
  template: '<ng-content></ng-content>'
})
export class DagreEdgeComponent extends LineConnectorComponent implements OnInit, OnDestroy {

  @Input() from: string;
  @Input() to: string;

  public positions: Array<number>;
  protected dagreLayout: DagreLayoutComponent;
  protected graphUpdated: Subscription;


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

    this.syncGraph = this.syncGraph.bind(this);
    this.graphUpdated = this.dagreLayout.updated.subscribe(this.syncGraph);
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

      // Unsubscribe from graph update events
      this.graphUpdated?.unsubscribe();

      // Remove from layout
      this.dagreLayout.removeChildByName(this.name);

      // Remove from model
      this.dagreLayout.getGraphModel().edges = this.dagreLayout.getGraphModel().edges.filter(i => i.name !== this.name);

      // Update Graph Layout
      this.dagreLayout.refreshLayout();
    }
  }

  protected syncGraph() {
    // console.log('DagreEdgeComponent.update');
    if (this.object) {
      this.syncGraphEdges(this.dagreLayout.getGraph());
    }
  }

  protected syncGraphEdges(g: dagre.graphlib.Graph) {
    // console.log('DagreEdgeComponent.syncGraphEdges');
    g.edges().forEach((e) => {
      const edge: dagre.GraphEdge = g.edge(e);
      // console.log('DagreEdgeComponent.syncGraphEdges: edge', edge);
      if (edge.name === this.name) {
        this.positions = [];
        // console.log('DagreEdgeComponent.syncGraphEdges: edge.points', edge.points);
        edge.points.forEach(p => {
          if (!Number.isNaN(p.x) && !Number.isNaN(p.y)) {
            // console.log('x=' + p.x + ', y=' + p.y);
            this.positions.push(p.x, p.y, 0);
          }
        });
        this.updateLineGeometry();
      }
    });
  }


}
