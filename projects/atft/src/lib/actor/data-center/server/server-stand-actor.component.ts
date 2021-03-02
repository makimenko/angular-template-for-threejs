import {Component, EventEmitter, Output} from '@angular/core';
import { provideParent } from '../../../util';
import { AbstractServerActor } from './abstract-server-actor';

@Component({
  selector: 'atft-server-stand-actor',
  providers: [provideParent(ServerStandActorComponent)],
  template: `
    <atft-empty name="server-box">

      <!-- TODO: template? -->
      <atft-empty atft-raycaster-group (mouseEnter)="onSelected()" (mouseExit)="onDeselected()" (click)="onClick()">
        <atft-box-mesh height="10" width="10" depth="14" material="phong" [materialColor]="color" [translateZ]="7"
                       atft-raycaster-group (mouseEnter)="onSelected()" (mouseExit)="onDeselected()" (click)="onClick()">
          <atft-svg-loader *ngIf="icon" [icon]="icon" overrideMaterialColor="0xffffff"
                           material="basic" maxX="8" maxY="8" [translateZ]="0"
                           translateY="-5.1" [rotateX]="(90 | deg2rad)" [rotateZ]="(180 | deg2rad)" [rotateY]="(180 | deg2rad)">
          </atft-svg-loader>
        </atft-box-mesh>
      </atft-empty>

      <atft-text-mesh [text]="label" [size]="2" [bevelEnabled]="false" height="0" [centered]="true"
                      material="basic" materialColor="0xDADADA" [translateY]="-11" [translateZ]="0.1"
      [depthWrite]="false">
      </atft-text-mesh>
      <atft-frame-mesh *ngIf="showFrame" [thickness]="1" [sizeX]="15" [sizeY]="15" [translateZ]="0" material="basic"
                       [depthWrite]="false" [materialColor]="color">
      </atft-frame-mesh>
    </atft-empty>
  `
})
export class ServerStandActorComponent extends AbstractServerActor {


}
