import {AfterViewInit, Component, Optional, SkipSelf} from '@angular/core';
import {EmptyComponent} from '../../../object/helper';
import {provideParent} from '../../../util';
import * as THREE from 'three';
import {GraphModel, YamlGraphUtils} from './dagra-utils';
import {RendererService} from '../../../renderer';
import {AbstractObject3D} from '../../../object';


@Component({
  selector: 'atft-dagra-layout',
  providers: [provideParent(DagraLayoutComponent)],
  template: `

  `
})
export class DagraLayoutComponent extends EmptyComponent implements AfterViewInit {

  graph: GraphModel;

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>
  ) {
    super(rendererService, parent);
    this.graph = {
      nodes: [],
      edges: []
    };

  }

  public addChild(object: THREE.Object3D): void {
    super.addChild(object);
    console.log('DagraLayoutComponent.addChild', object);
    this.graph.nodes.push({
      id: object.uuid,
      label: '?'
    });
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();

    console.log('DagraLayoutComponent.ngAfterViewInit: graph', this.graph);
    const g = YamlGraphUtils.jsonToGraph(this.graph);
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

  find(uuid: string) {
    return this.object.getObjectByProperty('uuid', uuid);
  }

}
