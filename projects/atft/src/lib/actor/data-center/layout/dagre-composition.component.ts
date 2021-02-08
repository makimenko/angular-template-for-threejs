import { Component, EventEmitter, Injector, Input, OnDestroy, OnInit, Optional, Output, SkipSelf } from '@angular/core';
import * as dagre from 'dagre';
import { AbstractEmptyDirective, AbstractObject3D } from '../../../object';
import { RendererService } from '../../../renderer';
import { provideParent } from '../../../util';
import { DagreLayoutComponent } from './dagre-layout.component';

@Component({
  selector: 'atft-dagre-composition',
  providers: [provideParent(DagreCompositionComponent)],
  template: `
    <atft-plane-mesh atft-raycaster-group [width]="width" [height]="height" [materialColor]="color" (mouseEnter)="onSelected()"
                     (mouseExit)="onDeselected()">
      <atft-text-mesh [centered]="true" [text]="label" size="3" [translateY]="translateLabelY"
                      materialColor="0xE0E0E0">
      </atft-text-mesh>
    </atft-plane-mesh>
  `
})
export class DagreCompositionComponent extends AbstractEmptyDirective implements OnInit, OnDestroy {

  @Input() label: string;

  private _height: number;
  @Input()
  set height(height: number) {
    this._height = height;
    this.translateLabelY = this._height / 2 - 3;
  }

  get height(): number {
    return this._height;
  }

  @Input() width: number;
  @Output() render = new EventEmitter<void>();
  @Output() selected = new EventEmitter<void>();
  @Output() deselected = new EventEmitter<void>();

  public color = 0xA0A0A0;
  public translateLabelY: number;
  protected dagreLayout: DagreLayoutComponent;

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>,
    protected injector: Injector
  ) {
    super(rendererService, parent);

    this.dagreLayout = this.injector.get<DagreLayoutComponent>(DagreLayoutComponent);
    if (!this.dagreLayout) {
      console.warn('DagreCompositionComponent.constructor: atft-dagre-layout not found!');
    }

    this.syncGraph = this.syncGraph.bind(this);
    this.dagreLayout.updated.subscribe(this.syncGraph);
  }

  public onSelected() {
    this.color = 0xA4A4A4;
  }

  public onDeselected() {
    this.color = 0xA0A0A0;
  }

  public onClick() {
    this.color = 0xA0A0A0;
  }

  public ngOnInit() {
    super.ngOnInit();
    this.addNode();
  }

  protected addNode() {
    if (this.dagreLayout && this.dagreLayout.getGraphModel()) {
      // console.log('DagreCompositionComponent.addNode', this.name);

      // Register as layout children
      this.dagreLayout.getChildren().push(this);

      // Create Graph Node
      this.dagreLayout.getGraphModel().nodes.push({
        name: this.name,
        label: this.name
      });

      // Update Graph Layout
      this.dagreLayout.refreshLayout();
    }
  }


  ngOnDestroy() {
    super.ngOnDestroy();
    this.removeNode();
  }

  protected removeNode() {
    if (this.dagreLayout && this.dagreLayout.getGraphModel()) {
      // console.log('DagreCompositionComponent.removeNode', this.name);

      // Remove from layout
      this.dagreLayout.removeChildByName(this.name);

      // Remove from model
      this.dagreLayout.getGraphModel().nodes = this.dagreLayout.getGraphModel().nodes.filter(i => i.name !== this.name);

      // Update Graph Layout
      this.dagreLayout.refreshLayout();
    }
  }

  protected syncGraphNodes(g: dagre.graphlib.Graph) {
    console.log('DagreCompositionComponent.syncGraphNodes');
    g.nodes().forEach((name) => {
      // console.log('Node ' + name + ': ' + JSON.stringify(g.node(name)));
      if (name === this.name) {
        const node = g.node(name);

        console.log('DagreCompositionComponent.layout: Update position node', node);
        this.translateX = node.x;
        this.translateY = node.y;
        this.applyTranslation();

        this.width = node.width;
        this.height = node.height;
      }
    });
  }

  protected syncGraph() {
    console.log('DagreCompositionComponent.update');
    this.syncGraphNodes(this.dagreLayout.getGraph());
  }


}
