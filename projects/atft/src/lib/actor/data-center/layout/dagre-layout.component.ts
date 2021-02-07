import {AfterViewInit, Component, Input, OnChanges, OnDestroy, Optional, SimpleChanges, SkipSelf} from '@angular/core';
import {EmptyComponent} from '../../../object/helper';
import {provideParent} from '../../../util';
import {DagreUtils, GraphModel} from './dagre-utils';
import {RendererService} from '../../../renderer';
import {AbstractObject3D} from '../../../object';
import {DagreEdgeComponent} from './dagre-edge.component';
import * as dagre from 'dagre';
import {DagreNodeComponent} from './dagre-node.component';
import {DagreCompositionComponent} from './dagre-composition.component';


@Component({
  selector: 'atft-dagre-layout',
  providers: [provideParent(DagreLayoutComponent)],
  template: `
    <ng-content></ng-content>`
})
export class DagreLayoutComponent extends EmptyComponent implements AfterViewInit, OnChanges, OnDestroy {

  @Input() align = 'DR';
  @Input() rankdir = 'TB';
  @Input() nodesep = 15;
  @Input() edgesep = 1;
  @Input() ranksep = 15;
  @Input() marginx = 0;
  @Input() marginy = 0;
  @Input() ranker = 'network-simplex';
  @Input() deepScan = false;

  protected graphModel: GraphModel;
  protected graph: dagre.graphlib.Graph;

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>
  ) {
    super(rendererService, parent);

    // Initialize empty model:
    this.graphModel = {
      layout: {},
      nodes: [],
      edges: [],
      composition: []
    };
  }

  public addChild(object: AbstractObject3D<any>): void {
    super.addChild(object);
    this.addDagreChild(object);
    if (this.graph) {
      this.layout();
    }
  }

  protected addDagreChild(object: AbstractObject3D<any>, deepRoot?: AbstractObject3D<any>) {
    console.log('DagreLayoutComponent.addDagreChild');
    if (object instanceof DagreEdgeComponent) {
      this.addEdge(object, deepRoot);
    } else if (object instanceof DagreNodeComponent
      || object instanceof DagreCompositionComponent
    ) {
      this.addNode(object, deepRoot);
    }

    if (this.deepScan) {
      if (object.getChildren()) {
        for (const i of object.getChildren()) {
          if (i instanceof DagreNodeComponent
            || i instanceof DagreEdgeComponent
            || i instanceof DagreCompositionComponent) {
            console.log('DagreLayoutComponent.addDagreChild: ', i.name);
            this.addDagreChild(i, object);
          }
        }
      }
    }
  }

  protected addEdge(edge: DagreEdgeComponent, deepRoot?: AbstractObject3D<any>) {
    console.log('DagreLayoutComponent.addEdge', edge);
    const edgeObject: DagreEdgeComponent = edge;
    if (edgeObject.from && edgeObject.to) {
      this.graphModel.edges.push({
        name: edgeObject.name,
        from: edgeObject.from,
        to: edgeObject.to,
        deepRoot: deepRoot?.name
      });
    } else {
      console.warn('DagreLayoutComponent.addChild: edge source/target is undefined');
    }
  }

  protected addNode(object: AbstractObject3D<any>, deepRoot?: AbstractObject3D<any>) {
    console.log('DagreLayoutComponent.addNode', object);
    this.graphModel.nodes.push({
      name: object.name,
      label: object.name,
      deepRoot: deepRoot?.name
    });

    if (object instanceof DagreNodeComponent) {
      const node: DagreNodeComponent = object;
      if (node.composition) {
        // console.log('DagreLayoutComponent.addNode to composition', node.composition);
        this.graphModel.composition.push({
          parent: node.composition,
          child: node.name,
          deepRoot: deepRoot?.name
        });
      }
    }

  }

  public removeChild(object: AbstractObject3D<any>) {
    super.removeChild(object);
    console.log('DagreLayoutComponent.removeChild');
    this.removeDagreChild(object);

    if (this.deepScan) {
      console.log('DagreLayoutComponent.removeChild deepScan for', object.name);
      this.graphModel.nodes = this.graphModel.nodes.filter(i => i.deepRoot !== object.name);
      this.graphModel.edges = this.graphModel.edges.filter(i => i.deepRoot !== object.name);
      this.graphModel.composition = this.graphModel.composition.filter(i => i.deepRoot !== object.name);
    }

    if (this.graph) {
      this.layout();
    }
  }

  protected removeDagreChild(object: AbstractObject3D<any>) {
    if (object instanceof DagreEdgeComponent) {
      console.log('DagreLayoutComponent.removeDagreChild: Edge', object.name);
      const edgeObject: DagreEdgeComponent = object;
      this.graphModel.edges = this.graphModel.edges.filter(i => i.name !== edgeObject.name);
    } else {
      console.log('DagreLayoutComponent.removeDagreChild: Node', object.name);
      this.graphModel.nodes = this.graphModel.nodes.filter(i => i.name !== object.name);

      if (object instanceof DagreNodeComponent) {
        const node: DagreNodeComponent = object;
        if (node.composition) {
          this.graphModel.composition = this.graphModel.composition.filter(i => i.child !== node.name);
        }
      }

    }
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
    this.layout();
  }

  public layout() {
    // console.log('DagreLayoutComponent.layout');
    this.graphModel.layout = {
      align: this.align,
      rankdir: this.rankdir,
      nodesep: this.nodesep,
      edgesep: this.edgesep,
      ranksep: this.ranksep,
      marginx: this.marginx,
      marginy: this.marginy,
      ranker: this.ranker
    };
    this.graph = DagreUtils.modelToGraph(this.graphModel);
    // console.log('DagreLayoutComponent.layout: g', g);
    this.syncGraphNodes(this.graph);
    this.syncGraphEdges(this.graph);
    this.syncGraphContainer(this.graph);
    this.rendererService.render();
  }

  protected syncGraphNodes(g: dagre.graphlib.Graph) {
    console.log('DagreLayoutComponent.syncGraphNodes');
    g.nodes().forEach((name) => {
      console.log('Node ' + name + ': ' + JSON.stringify(g.node(name)));
      const object: AbstractObject3D<any> = this.findByName(name);

      if (object) {
        const node = g.node(name);
        // console.log('DagreLayoutComponent.layout: Update position', node);

        object.translateX = node.x;
        object.translateY = node.y;
        object.applyTranslation();

        if (object instanceof DagreCompositionComponent) {
          // console.log('DagreLayoutComponent.layout: Update composition', node);
          const composition: DagreCompositionComponent = object;
          composition.width = node.width;
          composition.height = node.height;

        }

      } else {
        console.warn('DagreLayoutComponent.layout: Object not found by name', name);
      }
    });
  }

  protected syncGraphEdges(g: dagre.graphlib.Graph) {
    // console.log('DagreLayoutComponent.syncGraphEdges');
    g.edges().forEach((e) => {
      const edge: dagre.GraphEdge = g.edge(e);
      // console.log('DagreLayoutComponent.syncGraphEdges: edge', edge);
      const object: AbstractObject3D<any> = this.findByName(edge.name);
      if (object && object instanceof DagreEdgeComponent) {
        const edgeComponent: DagreEdgeComponent = object;
        edgeComponent.positions = [];
        // console.log('DagreLayoutComponent.syncGraphEdges: edge.points', edge.points);

        edge.points.forEach(p => {
          if (!Number.isNaN(p.x) && !Number.isNaN(p.y)) {
            // console.log('x=' + p.x + ', y=' + p.y);
            edgeComponent.positions.push(p.x, p.y, 0);
          }
        });
        edgeComponent.updateLineGeometry();
      } else {
        console.warn('DagreLayoutComponent.layout: Object not found by name', e.name);
      }
    });
  }

  protected syncGraphContainer(g: dagre.graphlib.Graph) {
    // console.log('DagreLayoutComponent.syncGraphContainer');
    this.translateX = -(g.graph().width / 2);
    this.translateY = -(g.graph().height / 2);
    this.applyTranslation();

  }

  public ngOnChanges(changes: SimpleChanges) {
    // console.log('AbstractObject3D.ngOnChanges', this.name);
    if (!this.object) {
      return;
    }
    super.ngOnChanges(changes);

    let modified = false;

    if (['align', 'rankdir', 'ranksep', 'nodesep', 'edgesep', 'marginx', 'marginy', 'ranker'].some(propName => propName in changes)) {
      this.layout();
      modified = true;
    }

    if (modified) {
      this.changed.emit();
      // this.rendererService.render();
    }

  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.graph = undefined;
    this.graphModel = undefined;
  }

}
