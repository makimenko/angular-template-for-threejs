import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {provideParent} from '../../../util';
import { AbstractEmptyDirective, GridMeshComponent } from '../../../object';
import * as THREE from 'three';
import {RaycasterEmitEvent} from '../../../raycaster';


@Component({
  selector: 'atft-grid-actor',
  providers: [provideParent(GridActorComponent)],
  template: `
    <atft-grid-mesh #grid [size]="size" [iterationsX]="iterationsX" [iterationsY]="iterationsY" [offset]="offset"
                    (click)="onMouseClick($event)"
                    (mouseEnter)="onMouseEnter($event)"
                    (mouseExit)="onDeselected()"
                    [materialColor]="color"
                    atft-raycaster-group
    ></atft-grid-mesh>
  `
})
export class GridActorComponent extends AbstractEmptyDirective {

  @ViewChild('grid', {static: true})
  grid!: GridMeshComponent;

  @Input() size = 5;
  @Input() iterationsX = 20;
  @Input() iterationsY = 20;
  @Input() offset = 1.05;

  @Output() render = new EventEmitter<void>();
  @Output() gridEnter = new EventEmitter<THREE.BufferAttribute>();
  @Output() deselected = new EventEmitter<void>();
  @Output() gridClick = new EventEmitter<THREE.BufferAttribute>();


  color: string | number = '#A0A0A0';

  public onMouseEnter(event: RaycasterEmitEvent) {
    // console.log('selected', event);
    const pos = this.getLinePosition(event);
    if (pos) {
      this.gridEnter.emit(pos);
    }
  }

  public onMouseClick(event: RaycasterEmitEvent) {
    // console.log('GridActorComponent.onMouseClick');
    const pos = this.getLinePosition(event);
    if (pos) {
      // console.log('GridActorComponent.onMouseClick position', pos);
      this.gridClick.emit(pos);
    }
  }

  protected getLinePosition(event: RaycasterEmitEvent): THREE.BufferAttribute | null {
    if (event.face) {
      // console.log('Finding coordinates for face', event.face);

      const geo: any = this.grid.getObject().geometry;
      const meshPosition: THREE.BufferAttribute = geo.attributes.position;


      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(4 * 3), 3));
      const line = new THREE.Line(geometry, new THREE.LineBasicMaterial({color: 0xffffff, transparent: true}));

      const linePosition: any = line.geometry.attributes['position'];

      // console.log('Looking geometry positions', meshPosition);
      linePosition.copyAt(0, meshPosition, event.face.a);
      linePosition.copyAt(1, meshPosition, event.face.b);
      linePosition.copyAt(2, meshPosition, event.face.c);
      linePosition.copyAt(3, meshPosition, event.face.a);

      // console.log('linePosition', linePosition);
      return linePosition;
    } else {
      return null;
    }
  }

  public onDeselected() {
    // console.log('deselected');
  }


}
