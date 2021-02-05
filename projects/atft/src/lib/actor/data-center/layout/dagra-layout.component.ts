import {AfterViewInit, Component, Input, OnChanges, Optional, SimpleChanges, SkipSelf} from '@angular/core';
import {EmptyComponent} from '../../../object/helper';
import {provideParent} from '../../../util';
import * as THREE from 'three';
import {DagraUtils, GraphModel} from './dagra-utils';
import {RendererService} from '../../../renderer';
import {AbstractObject3D} from '../../../object';


@Component({
  selector: 'atft-dagra-layout',
  providers: [provideParent(DagraLayoutComponent)],
  template: `

  `
})
export class DagraLayoutComponent extends EmptyComponent implements AfterViewInit, OnChanges {

  @Input() align = 'DR';
  @Input() rankdir = 'TB';

  protected graph: GraphModel;


  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>
  ) {
    super(rendererService, parent);
    this.graph = {
      layout: {},
      nodes: [],
      edges: []
    };
  }

  public addChild(object: AbstractObject3D<any>): void {
    super.addChild(object);
    console.log('DagraLayoutComponent.addChild', object);
    this.graph.nodes.push({
      id: object.getObject().uuid,
      label: '?'
    });
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
    this.layout();
  }

  public layout() {
    console.log('DagraLayoutComponent.layout');

    this.graph.layout.align = this.align;
    this.graph.layout.rankdir = this.rankdir;

    const g = DagraUtils.jsonToGraph(this.graph);
    console.log('DagraLayoutComponent.ngAfterViewInit: g', g);

    g.nodes().forEach((uuid) => {
      console.log('Node ' + uuid + ': ' + JSON.stringify(g.node(uuid)));
      const object = this.find(uuid);

      if (object) {
        const node = g.node(uuid);
        object.position.x = node.x;
        object.position.y = node.y;
      } else {
        console.warn('Object not found by uuid', uuid);
      }
    });

    this.rendererService.render();
  }

  protected find(uuid: string): THREE.Object3D {
    return this.object.getObjectByProperty('uuid', uuid);
  }


  public ngOnChanges(changes: SimpleChanges) {
    // console.log('AbstractObject3D.ngOnChanges', this.name);
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
