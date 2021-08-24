import {Component, Injector, Input, OnDestroy, OnInit, Optional, SkipSelf, ViewChild, ViewContainerRef} from '@angular/core';
import * as dagre from 'dagre';
import {AbstractEmptyDirective, AbstractObject3D} from '../../../object';
import {RendererService} from '../../../renderer';
import {provideParent} from '../../../util';
import {DagreLayoutComponent} from './dagre-layout.component';
import {Subscription} from 'rxjs';

@Component({
  selector: 'atft-dagre-node',
  providers: [provideParent(DagreNodeComponent)],
  template: '<template #container></template><ng-content></ng-content>'
})
export class DagreNodeComponent extends AbstractEmptyDirective implements OnInit, OnDestroy {

  @Input() composition: string;

  @Input() translateZ = 0;

  @ViewChild('container', {read: ViewContainerRef, static: true}) container;

  protected dagreLayout: DagreLayoutComponent;
  protected graphUpdated: Subscription;

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>,
    protected injector: Injector
  ) {
    super(rendererService, parent);
    // console.log('DagreNodeComponent.constructor');

    this.dagreLayout = this.injector.get<DagreLayoutComponent>(DagreLayoutComponent);
    if (!this.dagreLayout) {
      console.warn('DagreNodeComponent.constructor: atft-dagre-layout not found!');
    }

    this.syncGraph = this.syncGraph.bind(this);
    this.graphUpdated = this.dagreLayout.updated.subscribe(this.syncGraph);
  }

  ngOnInit() {
    super.ngOnInit();
    this.addNode();
  }

  protected addNode() {
    // console.log('DagreNodeComponent.addNode', this.name);
    if (this.dagreLayout && this.dagreLayout.getGraphModel()) {

      // Register as layout children
      this.dagreLayout.getChildren().push(this);

      // Create Graph Node
      this.dagreLayout.getGraphModel().nodes.push({
        name: this.name,
        label: this.name,
        composition: this.composition
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
      // console.log('DagreNodeComponent.removeNode', this.name);

      // Unsubscribe from graph update events
      this.graphUpdated?.unsubscribe();

      // Remove from layout
      this.dagreLayout.removeChildByName(this.name);

      // Remove from model
      this.dagreLayout.getGraphModel().nodes = this.dagreLayout.getGraphModel().nodes.filter(i => i.name !== this.name);

      // Update Graph Layout
      this.dagreLayout.refreshLayout();
    }
  }

  protected syncGraphNodes(g: dagre.graphlib.Graph) {
    // console.log('DagreNodeComponent.syncGraphNodes');
    g.nodes().forEach((name) => {
      // console.log('Node ' + name + ': ' + JSON.stringify(g.node(name)));
      if (name === this.name) {
        const node = g.node(name);
        // console.log('DagreLayoutComponent.layout: Update position', node);
        this.translateX = node.x;
        this.translateY = node.y;
        this.applyTranslation();
      }
    });
  }

  protected syncGraph() {
    // console.log('DagreNodeComponent.syncGraph');
    if (this.object) {
      this.syncGraphNodes(this.dagreLayout.getGraph());
    }
  }


}
