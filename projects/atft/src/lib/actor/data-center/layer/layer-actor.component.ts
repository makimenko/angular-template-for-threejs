import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractEmptyDirective } from '../../../object';
import { EmptyComponent } from '../../../object/helper';
import { provideParent } from '../../../util';


@Component({
  selector: 'atft-layer-actor',
  providers: [provideParent(LayerActorComponent)],
  template: `
    <atft-plane-mesh atft-raycaster-group [width]="width" [height]="height" [materialColor]="color" (mouseEnter)="onSelected()"
                     (mouseExit)="onDeselected()">
      <atft-text-mesh [centered]="true" [text]="label" [size]="5" [translateX]="translateLabelX" [rotateZ]="(90 | deg2rad)"
                      materialColor="0xE0E0E0">
      </atft-text-mesh>
    </atft-plane-mesh>
  `
})
export class LayerActorComponent extends AbstractEmptyDirective {
  @Input() label: string;

  @Input()
  set width(width: number) {
    this._width = width;
    this.translateLabelX = this._width / 2 - 10;
  }

  get width(): number {
    return this._width;
  }

  private _width: number;

  @Input() height: number;

  @Output() render = new EventEmitter<void>();
  @Output() selected = new EventEmitter<void>();
  @Output() deselected = new EventEmitter<void>();

  color = '0xA0A0A0';

  translateLabelX: number;

  public onSelected() {
    this.color = '0xA4A4A4';
  }

  public onDeselected() {
    this.color = '0xA0A0A0';
  }

  public onClick() {
    this.color = '0xA0A0A0';
  }

}
