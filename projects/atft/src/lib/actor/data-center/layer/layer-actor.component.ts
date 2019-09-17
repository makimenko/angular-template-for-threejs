import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {AbstractObject3D} from '../../../object/abstract-object-3d';
import {EmptyComponent} from '../../../object/helper';


@Component({
  selector: 'atft-layer-actor',
  providers: [{provide: AbstractObject3D, useExisting: forwardRef(() => LayerActorComponent)}],
  template: `
      <atft-plane-mesh [width]="width" [height]="height" [materialColor]="color"
                       (mouseEnter)="onSelected()" (mouseExit)="onDeselected()"
      >
          <atft-text-mesh [centered]="true" [text]="name" size="5" translateX="40" [rotateZ]="(90 | deg2rad)"
                          materialColor="0xE0E0E0" (render)="render.emit()"
                          (mouseEnter)="onSelected()" (mouseExit)="onDeselected()"
          >
          </atft-text-mesh>
      </atft-plane-mesh>
  `
})
export class LayerActorComponent extends EmptyComponent {
  @Input() name: string;
  @Input() width: number;
  @Input() height: number;

  @Output() render = new EventEmitter<void>();
  @Output() selected = new EventEmitter<void>();
  @Output() deselected = new EventEmitter<void>();

  color = 0xA0A0A0;

  public onSelected() {
    this.color = 0xA4A4A4;
  }

  public onDeselected() {
    this.color = 0xA0A0A0;
  }

  public onClick() {
    this.color = 0xA0A0A0;
  }
}
