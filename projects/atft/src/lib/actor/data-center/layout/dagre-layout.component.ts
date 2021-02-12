import {
  AfterContentInit,
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Optional,
  Output,
  SimpleChanges,
  SkipSelf
} from '@angular/core';
import * as dagre from 'dagre';
import { AbstractEmptyDirective, AbstractObject3D } from '../../../object';
import { RendererService } from '../../../renderer';
import { provideParent } from '../../../util';
import { DagreUtils, GraphModel } from './dagre-utils';


@Component({
  selector: 'atft-dagre-layout',
  providers: [provideParent(DagreLayoutComponent)],
  template: `
    <ng-content></ng-content>`
})
export class DagreLayoutComponent extends AbstractEmptyDirective implements AfterViewInit, OnChanges, OnDestroy, AfterContentInit {

  @Input() align = 'DR';
  @Input() rankdir = 'TB';
  @Input() nodesep = 15;
  @Input() edgesep = 1;
  @Input() ranksep = 15;
  @Input() marginx = 0;
  @Input() marginy = 0;
  @Input() ranker = 'network-simplex';
  @Input() deepScan = false;

  @Input() centered = true;

  @Output() updated = new EventEmitter<void>();

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

  ngAfterViewInit() {
    super.ngAfterViewInit();

  }

  ngAfterContentInit() {
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
    // console.log('DagreLayoutComponent.layout: graph', this.graph);
    this.syncGraphContainer(this.graph);
    this.updated.emit();
    this.rendererService.render();
  }


  protected syncGraphContainer(g: dagre.graphlib.Graph) {
    // console.log('DagreLayoutComponent.syncGraphContainer');
    if (this.object && this.centered) {
      this.translateX = -(g.graph().width / 2);
      this.translateY = -(g.graph().height / 2);
      this.applyTranslation();
    }
  }


  public ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);
    // console.log('AbstractObject3D.ngOnChanges', this.name);
    if (!this.object) {
      return;
    }
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

  public getGraphModel() {
    return this.graphModel;
  }

  public refreshLayout() {
    if (this.graph) {
      this.layout();
    }
  }

  public getGraph() {
    return this.graph;
  }

}
