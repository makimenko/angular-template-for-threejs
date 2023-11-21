import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  SkipSelf,
  ViewRef
} from '@angular/core';
import * as dagre from 'dagre';
import {AbstractEmptyDirective, AbstractObject3D} from '../../../object';
import {RendererService} from '../../../renderer';
import {provideParent} from '../../../util';
import {DagreLayoutComponent} from './dagre-layout.component';
import {Subscription} from 'rxjs';

@Component({
  selector: 'atft-dagre-composition',
  providers: [provideParent(DagreCompositionComponent)],
  template: `
    <atft-plane-mesh *ngIf="border!=='frame'" atft-raycaster-group [width]="width" [height]="height" [materialColor]="color"
                     [depthWrite]="true"
                     (mouseEnter)="onSelected()"
                     (mouseExit)="onDeselected()">
      <atft-text-mesh [centered]="true" [text]="label" [size]="3" [translateY]="translateLabelY"
                      materialColor="#E0E0E0">
      </atft-text-mesh>
    </atft-plane-mesh>

    <atft-frame-mesh *ngIf="border==='frame'" [sizeX]="width" [sizeY]="height" [thickness]="2" [materialColor]="color"
                     [depthWrite]="true"
                     atft-raycaster-group (mouseEnter)="onSelected()" (mouseExit)="onDeselected()">
      <atft-text-mesh [centered]="true" [text]="label" [size]="3" [translateY]="translateLabelY"
                      materialColor="#E0E0E0">
      </atft-text-mesh>
    </atft-frame-mesh>

  `
})
export class DagreCompositionComponent extends AbstractEmptyDirective implements OnInit, OnDestroy {

  @Input() label!: string;

  @Input() border = 'plane';

  private _height!: number;

  @Input()
  set height(height: number) {
    this._height = height;
    this.translateLabelY = this._height / 2 - 3;
    if (!(this.cdRef as ViewRef).destroyed) {
      this.cdRef.detectChanges()
    }
  }

  get height(): number {
    return this._height;
  }

  @Input() width!: number;
  @Output() render = new EventEmitter<void>();
  @Output() selected = new EventEmitter<void>();
  @Output() deselected = new EventEmitter<void>();

  @Input() composition!: string;

  public color: string | number = '#A0A0A0';
  public translateLabelY: number = 0;
  protected dagreLayout: DagreLayoutComponent;
  protected graphUpdated: Subscription;

  constructor(
    protected override rendererService: RendererService,
    @SkipSelf() @Optional() protected override parent: AbstractObject3D<any>,
    protected injector: Injector,
    private cdRef: ChangeDetectorRef
  ) {
    super(rendererService, parent);

    this.dagreLayout = this.injector.get<DagreLayoutComponent>(DagreLayoutComponent);
    if (!this.dagreLayout) {
      console.warn('DagreCompositionComponent.constructor: atft-dagre-layout not found!');
    }

    this.syncGraph = this.syncGraph.bind(this);
    this.graphUpdated = this.dagreLayout.updated.subscribe(this.syncGraph);
  }

  public onSelected() {
    this.color = '#A4A4A4';
  }

  public onDeselected() {
    this.color = '#A0A0A0';
  }

  public onClick() {
    this.color = '#A0A0A0';
  }

  public override ngOnInit() {
    super.ngOnInit();
    this.addNode();
  }


  protected addNode() {
    if (this.dagreLayout && this.dagreLayout.getGraphModel()) {
      // console.log('DagreCompositionComponent.addNode', this.name);

      // Register as layout children
      this.dagreLayout.getChildren().push(this);

      // Create Graph Node
      this.dagreLayout.getGraphModel().nodes?.push({
        name: this.name,
        label: this.label,
        composition: this.composition
      });

      // Update Graph Layout
      this.dagreLayout.refreshLayout();
    }
  }


  override ngOnDestroy() {
    super.ngOnDestroy();
    this.removeNode();
  }


  protected removeNode() {
    if (this.dagreLayout && this.dagreLayout.getGraphModel()) {
      // console.log('DagreCompositionComponent.removeNode', this.name);

      // Unsubscribe from graph update events
      this.graphUpdated?.unsubscribe();

      // Remove from layout
      this.dagreLayout.removeChildByName(this.name);

      // Remove from model
      this.dagreLayout.getGraphModel().nodes = this.dagreLayout.getGraphModel().nodes?.filter(i => i.name !== this.name);

      // Update Graph Layout
      this.dagreLayout.refreshLayout();
    }
  }

  protected syncGraphNodes(g: dagre.graphlib.Graph) {
    // console.log('DagreCompositionComponent.syncGraphNodes');
    g.nodes().forEach((name) => {
      // console.log('Node ' + name + ': ' + JSON.stringify(g.node(name)));
      if (name === this.name) {
        const node = g.node(name);

        // console.log('DagreCompositionComponent.layout: Update position node', node);
        this.translateX = node.x;
        this.translateY = node.y;
        this.applyTranslation();

        this.width = node.width;
        this.height = node.height;
      }
    });
  }

  protected syncGraph() {
    // console.log('DagreCompositionComponent.update');
    if (this.object) {
      this.syncGraphNodes(this.dagreLayout.getGraph());
    }
  }


}
