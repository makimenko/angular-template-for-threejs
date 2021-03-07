import {Component, Injector, Input, OnDestroy, OnInit, Optional, SkipSelf} from '@angular/core';
import * as dagre from 'dagre';
import {Subscription} from 'rxjs';
import * as THREE from 'three';
import {AnimationService} from '../../../animation';
import {AbstractObject3D, LineConnectorComponent} from '../../../object';
import {RendererService} from '../../../renderer';
import {appliedColor, provideParent} from '../../../util';
import {DagreLayoutComponent} from './dagre-layout.component';

export enum LineEndType {
  none = 'none',
  circle = 'circle',
  arrow = 'arrow'
}

export enum EdgeType {
  sequence = 'sequence',
  association = 'association',
  message = 'message',
  line = 'line'
}

@Component({
  selector: 'atft-dagre-edge',
  providers: [provideParent(DagreEdgeComponent)],
  template: '<ng-content></ng-content>'
})
export class DagreEdgeComponent extends LineConnectorComponent implements OnInit, OnDestroy {

  @Input() from: string;
  @Input() to: string;
  @Input() startType: LineEndType = LineEndType.circle;
  @Input() endType: LineEndType = LineEndType.arrow;

  @Input()
  set type(val: EdgeType) {
    switch (val) {

      case EdgeType.association:
        this.animated = false;
        this.solid = false;
        this.startType = LineEndType.none;
        this.endType = LineEndType.arrow;
        break;

      case EdgeType.message:
        this.animated = true;
        this.solid = false;
        this.dashSize = 1;
        this.startType = LineEndType.circle;
        this.endType = LineEndType.arrow;
        break;

      case EdgeType.line:
        this.animated = false;
        this.solid = true;
        this.startType = LineEndType.none;
        this.endType = LineEndType.none;
        break;

      case EdgeType.sequence:
        this.animated = false;
        this.solid = true;
        this.startType = LineEndType.none;
        this.endType = LineEndType.arrow;
        break;

      default:
        this.animated = true;
        this.solid = false;
        this.dashSize = 4;
        this.startType = LineEndType.circle;
        this.endType = LineEndType.arrow;
    }
  }

  protected lineStart: THREE.Mesh;
  protected lineEnd: THREE.Mesh;
  protected positions: Array<number>;
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

  protected newObject3DInstance(): THREE.Object3D {
    const lineObject = super.newObject3DInstance();
    // console.log('DagreEdgeComponent.newObject3DInstance');
    this.appendLineEnds(lineObject);
    return lineObject;
  }

  protected appendLineEnds(lineObject: THREE.Object3D) {
    // 1. Init Material
    const material = new THREE.MeshBasicMaterial({color: appliedColor(this.materialColor)});

    // 2. Create start
    const startGeometry = this.getConnectorEndGeometry(this.startType);
    if (startGeometry) {
      this.lineStart = new THREE.Mesh(startGeometry, material);
      lineObject.add(this.lineStart);
    }

    // 3. Create end
    const endGeometry = this.getConnectorEndGeometry(this.endType);
    if (endGeometry) {
      this.lineEnd = new THREE.Mesh(endGeometry, material);
      lineObject.add(this.lineEnd);
    }
  }

  protected getConnectorEndGeometry(type: string): THREE.BufferGeometry {
    switch (type) {
      case LineEndType.circle:
        return new THREE.CircleGeometry(0.7, 16);
        break;
      case LineEndType.arrow:
        const shape = new THREE.Shape();

        shape.moveTo(0, -0.5);
        shape.lineTo(1, 2);
        shape.lineTo(0, 1.7);
        shape.lineTo(-1, 2);

        const geometry = new THREE.ShapeBufferGeometry(shape);

        return geometry;
        break;
      default:
        return undefined;
    }

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
        this.updateEnds(this.positions);
        this.updateLineGeometry();
      }
    });
  }


  private updateEnds(positions: number[]) {
    const p = this.positions;
    if (p?.length >= 9) {
      // Beginning / Start of the line
      this.updateEnd(this.lineStart,
        new THREE.Vector3(p[3], p[4], p[5]),
        new THREE.Vector3(p[0], p[1], p[2])
      );
      // Target / End of the line
      this.updateEnd(this.lineEnd,
        new THREE.Vector3(p[p.length - 6], p[p.length - 5], p[p.length - 4]),
        new THREE.Vector3(p[p.length - 3], p[p.length - 2], p[p.length - 1])
      );
    }

  }

  private updateEnd(lineSide: THREE.Mesh, prevPoint: THREE.Vector3, endPoint: THREE.Vector3) {
    if (lineSide) {
      const direction = prevPoint.clone().sub(endPoint);
      let angle = direction.angleTo(new THREE.Vector3(0, 1, 0));
      angle = prevPoint.x < endPoint.x ? angle : -angle;

      lineSide.rotation.set(0, 0, angle);
      lineSide.position.set(
        endPoint.x || 0,
        endPoint.y || 0,
        endPoint.z || 0
      );
    }
  }

  protected getPositions(): number[] {
    if (this.positions) {
      return this.positions;
    } else {
      return [0, 0, 0, 0, 0, 0];
    }

  }

}
