import {Component, Input, OnChanges, OnDestroy, Optional, SimpleChanges, SkipSelf} from '@angular/core';
import {Subscription} from 'rxjs';
import * as THREE from 'three';
import {AnimationService} from '../../animation';
import {RendererService} from '../../renderer/renderer.service';
import {provideParent} from '../../util';
import {AbstractObject3D} from '../abstract-object-3d';
import {AbstractConnector} from './abstract-connector';
import {Line2} from 'three/examples/jsm/lines/Line2';
import {LineGeometry} from 'three/examples/jsm/lines/LineGeometry';
import {LineMaterial} from 'three/examples/jsm/lines/LineMaterial';

export enum LineType {
  dashed = 'dash',
  solid = 'solid'
}

@Component({
  selector: 'atft-line-connector',
  providers: [provideParent(LineConnectorComponent)],
  template: '<ng-content></ng-content>'
})
export class LineConnectorComponent extends AbstractConnector<Line2> implements OnDestroy, OnChanges {

  @Input() materialColor = 0xFFFFFF;
  @Input() solid = false;
  @Input() lineWidth = 2;
  @Input() dashSize = 3;
  @Input() gapSize = 0.5;
  @Input() opacity = 1;
  @Input() lineType: LineType = LineType.dashed;

  @Input() animated = true;
  protected animation!: Subscription;
  protected time = 0;
  protected timeScale = 5;
  protected clock = new THREE.Clock();

  protected line!: Line2;
  private matLine!: LineMaterial;

  constructor(
    protected override rendererService: RendererService,
    @SkipSelf() @Optional() protected override parent: AbstractObject3D<any>,
    protected animationService: AnimationService,
  ) {
    super(rendererService, parent);
  }

  public createLineMesh(): Line2 {
    const positions = this.getPositions();
    const geometry = new LineGeometry();
    geometry.setPositions(positions);

    this.matLine = new LineMaterial({
      // wrong type in three@types def color?: number;
      // color: parseInt(Number(this.materialColor).toString(), 10),
      color: this.materialColor,
      linewidth: this.lineWidth,
      vertexColors: false,
      dashed: !this.solid,
      dashSize: this.dashSize,
      dashOffset: 0,
      gapSize: this.gapSize,
      opacity: this.opacity,
      transparent: this.opacity < 1,
      depthWrite: true
    });
    this.matLine.resolution.set(window.innerWidth, window.innerHeight);
    if (!this.solid) {
      this.matLine.defines['USE_DASH'] = '';
    }

    this.line = new Line2(geometry, this.matLine);
    this.line.computeLineDistances();

    if (this.animated) {
      this.animate = this.animate.bind(this);
      this.animation = this.animationService.animate.subscribe(this.animate);
    }

    return this.line;
  }

  updateLineGeometry(): void {
    const positions = this.getPositions();
    this.line.geometry.dispose();
    this.line.geometry.setPositions(positions);
    this.line.computeLineDistances();
  }

  protected getPositions(): number[] {
    if (!this.source || !this.target) {
      throw new Error('AbstractConnector: source or target inputs are missing!');
    }

    const source = this.source.getObject().position;
    const target = this.target.getObject().position;

    const positions = [];
    positions.push(source.x, source.y, source.z);
    positions.push(target.x, target.y, target.z);
    return positions;
  }


  override ngOnDestroy() {
    super.ngOnDestroy();
    if (this.animation) {
      this.animation.unsubscribe();
    }
  }

  private animate() {
    // console.log('LineConnectorComponent.animate');
    const material: any = this.line?.material;
    if (this.line?.material) {
      // console.log('LineConnectorComponent.animate do');
      this.time += this.clock.getDelta();
      // material.uniforms.time.value = -1 * this.time * this.timeScale;
      material.dashOffset = -1 * this.time * this.timeScale;
      this.line.computeLineDistances();
    }
  }


  public override ngOnChanges(changes: SimpleChanges) {
    if (!this.object) {
      return;
    }
    super.ngOnChanges(changes);

    let modified = false;

    if (['materialColor'].some(propName => propName in changes)) {
      console.log('Changed color to', this.materialColor);
      this.line.material.color = new THREE.Color(this.materialColor);
      this.line.material.needsUpdate = true;
      modified = true;
    }

    if (modified) {
      this.changed.emit();
      this.rendererService.render();
    }

  }

}
