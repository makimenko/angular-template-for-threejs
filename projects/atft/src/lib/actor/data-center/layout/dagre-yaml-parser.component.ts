import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  Input,
  OnChanges,
  Optional,
  SimpleChanges,
  SkipSelf,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {AbstractEmptyDirective, AbstractObject3D} from '../../../object';
import {RendererService} from '../../../renderer';
import {provideParent} from '../../../util';
import * as yaml from 'yaml';
import {GraphModel} from './dagre-utils';
import {ServerStandActorComponent} from '../server';
import {DagreNodeComponent} from './dagre-node.component';

@Component({
  selector: 'atft-dagre-yaml-parser',
  providers: [provideParent(DagreYamlParserComponent)],
  template: `
    <template #container></template>`
})
export class DagreYamlParserComponent extends AbstractEmptyDirective implements OnChanges, AfterViewInit {

  @Input() yaml;

  @ViewChild('container', {read: ViewContainerRef}) container;

  private instances = [];

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>,
    protected resolver: ComponentFactoryResolver
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
    console.log('DagreYamlParserComponent.parseAndCreate');
    this.destroyAll();
    const model: GraphModel = yaml.parse(this.yaml);

    console.log('DagreYamlParserComponent.parseAndCreate yaml', model);
    if (model && model.nodes && model.nodes.length > 0) {

      model.nodes.forEach(i => this.createNode(i));
    }
  }

  protected createNode(node) {
    console.log('DagreYamlParserComponent.createNode', node);
    const nodeFactory = this.resolver.resolveComponentFactory(DagreNodeComponent);
    const nodeRef = this.container.createComponent(nodeFactory);
    nodeRef.instance.name = node.name;
    this.instances.push(nodeRef);

    const serverFactory = this.resolver.resolveComponentFactory(ServerStandActorComponent);
    const serverRef = nodeRef.instance.container.createComponent(serverFactory);
    serverRef.instance.name = node.name;
    serverRef.instance.label = (node.label ? node.label : node.name);
    this.instances.push(serverRef);
  }

  protected destroyAll() {
    console.log('DagreYamlParserComponent.destroyAll');
    this.instances.forEach(i => {
      console.log('DagreYamlParserComponent destroy', i);
      i.destroy();
    });

    this.instances = [];
  }

}
