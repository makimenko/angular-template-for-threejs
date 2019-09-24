import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {AbstractObject3D} from '../../../object/abstract-object-3d';
import {EmptyComponent} from '../../../object/helper';

@Component({
  selector: 'atft-server-actor',
  providers: [{provide: AbstractObject3D, useExisting: forwardRef(() => ServerActorComponent)}],
  template: `
      <atft-empty atft-raycaster-group (mouseEnter)="onSelected()" (mouseExit)="onDeselected()" (mouseDown)="onClick()"
                  (render)="render.emit()">
          <atft-box-mesh height="10" width="10" depth="14" material="x" [materialColor]="color" [translateZ]="7">
              <atft-svg-loader (render)="render.emit()" [model]="('./assets/svg/'+svgName)" overrideMaterialColor="0xffffff"
                               material="basic" maxX="8" maxY="8" [translateZ]="7" [depthWrite]="false"
                               translateY="-5.1" [rotateX]="(90 | deg2rad)" [rotateZ]="(180 | deg2rad)">
              </atft-svg-loader>
          </atft-box-mesh>
          <atft-text-mesh [text]="name" [size]="2" [bevelEnabled]="false" height="0" [centered]="true" (render)="render.emit()"
                          material="basic" materialColor="0xDADADA" [translateY]="-12" [translateZ]="0.2">
          </atft-text-mesh>
          <atft-frame-mesh [thickness]="2" [sizeX]="15" [sizeY]="15" [translateZ]="0.5" material="basic" [materialColor]="color"
                           (render)="render.emit()">
          </atft-frame-mesh>
      </atft-empty>
  `
})
export class ServerActorComponent extends EmptyComponent {

  @Input()
  name: string;

  @Output()
  render = new EventEmitter<void>();

  @Output()
  selected = new EventEmitter<void>();

  @Output()
  deselected = new EventEmitter<void>();

  @Input()
  svgName = 'grid-world.svg';

  color = 0xffffff;

  public onSelected() {
    this.color = 0xfff0f0;
  }

  public onDeselected() {
    this.color = 0xffffff;
  }

  public onClick() {
    this.color = 0xffa0a0;
  }
}
