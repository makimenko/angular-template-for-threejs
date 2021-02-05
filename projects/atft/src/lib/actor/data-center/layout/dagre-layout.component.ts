import {AfterViewInit, Component, Input, OnChanges, Optional, SimpleChanges, SkipSelf} from '@angular/core';
import {EmptyComponent} from '../../../object/helper';
import {provideParent} from '../../../util';
import {DagreUtils, GraphModel} from './dagre-utils';
import {RendererService} from '../../../renderer';
import {AbstractObject3D} from '../../../object';
import {DagreEdgeComponent} from './dagre-edge.component';
import * as dagre from 'dagre';


@Component({
  selector: 'atft-dagre-layout',
  providers: [provideParent(DagreLayoutComponent)],
  template: `

  `
})
export class DagreLayoutComponent extends EmptyComponent implements AfterViewInit, OnChanges {

  @Input() align = 'DR';
  @Input() rankdir = 'TB';

  protected graphModel: GraphModel;

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>
  ) {
    super(rendererService, parent);

    // Initialize empty model:
    this.graphModel = {
      layout: {},
      nodes: [],
      edges: []
    };
  }

  public addChild(object: AbstractObject3D<any>): void {
    super.addChild(object);
    console.log('DagreLayoutComponent.addChild', object);
    if (object instanceof DagreEdgeComponent) {
      // ============== 1) EDGE:
      console.log('DagreLayoutComponent.addChild as Edge', object);
      const edgeObject: DagreEdgeComponent = object;
      if (edgeObject.source && edgeObject.source.getObject() && edgeObject.target && edgeObject.target.getObject()) {
        this.graphModel.edges.push({
          uuid: edgeObject.getObject().uuid,
          from: edgeObject.source.getObject().uuid,
          to: edgeObject.target.getObject().uuid
        });
      } else {
        console.warn('DagreLayoutComponent.addChild: edge source/target is undefined');
      }
    } else {
      // ============== 2) NODE:
      console.log('DagreLayoutComponent.addChild as Node', object);
      this.graphModel.nodes.push({
        id: object.getObject().uuid,
        label: '?',
      });
    }
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
    this.layout();
  }

  public layout() {
    console.log('DagreLayoutComponent.layout');

    this.graphModel.layout.align = this.align;
    this.graphModel.layout.rankdir = this.rankdir;

    const g = DagreUtils.modelToGraph(this.graphModel);
    console.log('DagreLayoutComponent.layout: g', g);
    this.syncGraphNodes(g);
    this.syncGraphEdges(g);

    this.rendererService.render();
  }

  protected syncGraphNodes(g: dagre.graphlib.Graph) {
    console.log('DagreLayoutComponent.syncGraphNodes');
    g.nodes().forEach((uuid) => {
      console.log('Node ' + uuid + ': ' + JSON.stringify(g.node(uuid)));
      const object: AbstractObject3D<any> = this.findByUuid(uuid);

      if (object) {
        const node = g.node(uuid);
        // console.log('DagreLayoutComponent.layout: Update position', node);

        object.translateX = node.x;
        object.translateY = node.y;
        object.applyTranslation();

      } else {
        console.warn('DagreLayoutComponent.layout: Object not found by uuid', uuid);
      }
    });
  }

  protected syncGraphEdges(g: dagre.graphlib.Graph) {
    console.log('DagreLayoutComponent.syncGraphEdges');
    g.edges().forEach((e) => {
      const edge: dagre.GraphEdge = g.edge(e);
      console.log('DagreLayoutComponent.syncGraphEdges: edge', edge);
      const object: AbstractObject3D<any> = this.findByUuid(edge.uuid);
      if (object && object instanceof DagreEdgeComponent) {
        const edgeComponent: DagreEdgeComponent = object;
        edgeComponent.positions = [];
        console.log('DagreLayoutComponent.syncGraphEdges: edge.points', edge.points);

        edge.points.forEach(p => {
          if (!Number.isNaN(p.x) && !Number.isNaN(p.y)) {
            console.log('x=' + p.x + ', y=' + p.y);
            edgeComponent.positions.push(p.x, p.y, 0);
          }
        });
        edgeComponent.updateLineGeometry();
      } else {
        console.warn('DagreLayoutComponent.layout: Object not found by uuid', e.name);
      }
    });
  }


  public ngOnChanges(changes: SimpleChanges) {
    // console.log('AbstractObject3D.ngOnChanges', this.uuid);
    if (!this.object) {
      return;
    }
    super.ngOnChanges(changes);

    let modified = false;

    if (['align', 'rankdir'].some(propName => propName in changes)) {
      this.layout();
      modified = true;
    }

    if (modified) {
      this.changed.emit();
      // this.rendererService.render();
    }

  }


}
