import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Input,
  OnChanges,
  Optional,
  Output,
  SimpleChanges,
  SkipSelf,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import * as yaml from 'yaml';
import {AbstractEmptyDirective, AbstractObject3D} from '../../../object';
import {RendererService} from '../../../renderer';
import {provideParent} from '../../../util';
import {DagreCompositionComponent} from './dagre-composition.component';
import {DagreEdgeComponent} from './dagre-edge.component';
import {Composition, Edge, GraphModel, Node} from './dagre-model';
import {DagreNodeComponent} from './dagre-node.component';
import {ActorRepositoryService} from '../service';


function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

@Component({
  selector: 'atft-dagre-yaml-parser',
  providers: [provideParent(DagreYamlParserComponent)],
  template: `
    <template #container></template>`
})
export class DagreYamlParserComponent extends AbstractEmptyDirective implements OnChanges, AfterViewInit {

  @Input() yaml;

  @Output() status = new EventEmitter<boolean>();

  @ViewChild('container', {read: ViewContainerRef}) container;

  private instances = [];

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>,
    protected resolver: ComponentFactoryResolver,
    protected actorRepository: ActorRepositoryService
  ) {
    super(rendererService, parent);
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
    this.parseAndCreate();
  }

  public ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);
    // console.log('DagreYamlParserComponent.ngOnChanges', this.name);

    if (!this.object) {
      return;
    }

    if (['yaml'].some(propName => propName in changes)) {
      this.parseAndCreate();
    }
  }

  public parseAndCreate() {
    // console.log('DagreYamlParserComponent.parseAndCreate');
    try {
      this.destroyAll();
      const model: GraphModel = yaml.parse(this.yaml);

      // console.log('DagreYamlParserComponent.parseAndCreate yaml', model);
      if (model && model.nodes && model.nodes.length > 0) {

        model.compositions?.forEach(i => this.createComposition(i));
        model.nodes?.forEach(i => this.createNode(i));
        model.edges?.forEach(i => this.createEdge(i));
      }
      this.status.emit(true);
    } catch (e) {
      console.warn('DagreYamlParserComponent.parseAndCreate failed', e);
      this.status.emit(false);
      throw e;
    }
  }

  protected getNodeComponent(id: string) {
    return this.actorRepository.getComponentFactory(id);
  }

  protected createNode(node: Node) {
    // console.log('DagreYamlParserComponent.createNode', node);
    const nodeFactory = this.resolver.resolveComponentFactory(DagreNodeComponent);
    const nodeRef = this.container.createComponent(nodeFactory);
    nodeRef.instance.name = node.name;
    nodeRef.instance.composition = node.composition;
    this.instances.push(nodeRef);

    const serverFactory = this.getNodeComponent((node.model ? 'model' : node.type));
    const serverRef = nodeRef.instance.container.createComponent(serverFactory);
    serverRef.instance.name = node.name;
    serverRef.instance.label = (node.label ? node.label : node.name);
    serverRef.instance.icon = node.icon;
    serverRef.instance.model = node.model;

    this.instances.push(serverRef);
  }


  protected createEdge(edge: Edge) {
    // console.log('DagreYamlParserComponent.createEdge', edge);
    const factory = this.resolver.resolveComponentFactory(DagreEdgeComponent);
    const edgeRef = this.container.createComponent(factory);
    edgeRef.instance.from = edge.from;
    edgeRef.instance.to = edge.to;
    if (edge.type) {
      edgeRef.instance.type = edge.type;
    }
    if (edge.color) {
      edgeRef.instance.materialColor = edge.color;
    }

    this.instances.push(edgeRef);
  }


  protected destroyAll() {
    // console.log('DagreYamlParserComponent.destroyAll');
    this.instances.forEach(i => {
      // console.log('DagreYamlParserComponent destroy', i);
      i.destroy();
    });
    this.instances = [];
  }


  private createComposition(composition: Composition) {
    // console.log('DagreYamlParserComponent.createComposition', node);
    const factory = this.resolver.resolveComponentFactory(DagreCompositionComponent);
    const compositionRef = this.container.createComponent(factory);
    compositionRef.instance.name = composition.name;
    compositionRef.instance.label = (composition.label ? composition.label : composition.name);
    compositionRef.instance.composition = composition.composition;
    compositionRef.instance.border = composition.border;

    this.instances.push(compositionRef);
  }

}
