import {Component, EventEmitter, Input, Output} from '@angular/core';
import {provideParent} from '../../../util';
import {EmptyComponent} from '../../../object';

@Component({
  selector: 'atft-dagre-composition',
  providers: [provideParent(DagreCompositionComponent)],
  template: `
    <atft-plane-mesh atft-raycaster-group [width]="width" [height]="height" [materialColor]="color" (mouseEnter)="onSelected()"
                     (mouseExit)="onDeselected()">
      <atft-text-mesh [centered]="true" [text]="name" size="3" [translateY]="translateLabelY"
                      materialColor="0xE0E0E0">
      </atft-text-mesh>
    </atft-plane-mesh>
  `
})
export class DagreCompositionComponent extends EmptyComponent {

  @Input() name: string;

  private _height: number;
  @Input()
  set height(hight: number) {
    this._height = hight;
    this.translateLabelY = this._height / 2 - 5;
  }
  get height(): number {
    return this._height;
  }

  @Input() width: number;
  @Output() render = new EventEmitter<void>();
  @Output() selected = new EventEmitter<void>();
  @Output() deselected = new EventEmitter<void>();

  color = 0xA0A0A0;

  translateLabelY: number;

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
