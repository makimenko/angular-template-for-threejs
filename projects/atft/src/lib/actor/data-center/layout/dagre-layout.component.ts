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
import {AbstractEmptyDirective, AbstractObject3D} from '../../../object';
import {RendererService} from '../../../renderer';
import {provideParent} from '../../../util';
import {DagreUtils} from './dagre-utils';
import {GraphModel} from './dagre-model';

const DEFAULT_ALIGN = 'DL';
const DEFAULT_RANKDIR = 'BT';
const DEFAULT_SEP = 15;
const DEFAULT_EDGESEP = 1;
const DEFAULT_NODESEP = 15;
const DEFAULT_RANKSEP = 15;
const DEFAULT_MARGIN = 0;
const DEFAULT_RANKER = 'network-simplex';

@Component({
  selector: 'atft-dagre-layout',
  providers: [provideParent(DagreLayoutComponent)],
  template: `
    <ng-content></ng-content>`
})
export class DagreLayoutComponent extends AbstractEmptyDirective implements AfterViewInit, OnChanges, OnDestroy, AfterContentInit {

  @Input() align = DEFAULT_ALIGN;
  @Input() rankdir = DEFAULT_RANKDIR;
  @Input() nodesep = DEFAULT_SEP;
  @Input() edgesep = DEFAULT_EDGESEP;
  @Input() ranksep = DEFAULT_SEP;
  @Input() marginx = DEFAULT_MARGIN;
  @Input() marginy = DEFAULT_MARGIN;
  @Input() ranker = DEFAULT_RANKER;

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
      edges: []
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
      align: this.align ?? DEFAULT_ALIGN,
      rankdir: this.rankdir ?? DEFAULT_RANKDIR,
      nodesep: this.nodesep ?? DEFAULT_NODESEP,
      edgesep: this.edgesep ?? DEFAULT_EDGESEP,
      ranksep: this.ranksep ?? DEFAULT_RANKSEP,
      marginx: this.marginx ?? DEFAULT_MARGIN,
      marginy: this.marginy ?? DEFAULT_MARGIN,
      ranker: this.ranker ?? DEFAULT_RANKER
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
    // console.log('DagreLayoutComponent.ngOnChanges', this.name);
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
