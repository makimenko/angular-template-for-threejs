import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {AbstractObject3D} from '../../../object/abstract-object-3d';
import {EmptyComponent} from '../../../object/helper';

@Component({
  selector: 'atft-server-actor',
  providers: [{provide: AbstractObject3D, useExisting: forwardRef(() => ServerActorComponent)}],
  template: `
      <atft-empty name="server-box" atft-raycaster-group (mouseEnter)="onSelected()" (mouseExit)="onDeselected()" (mouseDown)="onClick()">
          <atft-box-mesh height="10" width="10" depth="14" material="x" [materialColor]="color" [translateZ]="7">
              <atft-svg-loader [model]="('./assets/svg/'+svgName)" overrideMaterialColor="0xffffff"
                               material="basic" maxX="8" maxY="8" [translateZ]="0"
                               translateY="-5.1" [rotateX]="(90 | deg2rad)" [rotateZ]="(180 | deg2rad)">
              </atft-svg-loader>
          </atft-box-mesh>
          <atft-text-mesh [text]="label" [size]="2" [bevelEnabled]="false" height="0" [centered]="true"
                          material="basic" materialColor="0xDADADA" [translateY]="-12" [translateZ]="0.2">
          </atft-text-mesh>
          <atft-frame-mesh [thickness]="2" [sizeX]="15" [sizeY]="15" [translateZ]="0.5" material="basic" [materialColor]="color">
          </atft-frame-mesh>
      </atft-empty>
  `
})
export class ServerActorComponent extends EmptyComponent {

  @Input()
  label: string;

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
    // console.log('ServerActorComponent.onSelected');
    this.color = 0xfff0f0;
  }

  public onDeselected() {
    // console.log('ServerActorComponent.onDeselected');
    this.color = 0xffffff;
  }

  public onClick() {
    // console.log('ServerActorComponent.onClick');
    this.color = 0xffa0a0;
  }
}
