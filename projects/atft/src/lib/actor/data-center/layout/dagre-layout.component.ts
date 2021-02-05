import {AfterViewInit, Component, Input, OnChanges, Optional, SimpleChanges, SkipSelf} from '@angular/core';
import {EmptyComponent} from '../../../object/helper';
import {provideParent} from '../../../util';
import {DagreUtils, GraphModel} from './dagre-utils';
import {RendererService} from '../../../renderer';
import {AbstractObject3D} from '../../../object';


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
    this.graphModel.nodes.push({
      id: object.getObject().uuid,
      label: '?'
    });
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

    this.rendererService.render();
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
