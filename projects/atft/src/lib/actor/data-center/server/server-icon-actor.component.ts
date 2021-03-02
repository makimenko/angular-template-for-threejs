import {Component} from '@angular/core';
import {provideParent} from '../../../util';
import {AbstractServerActor} from './abstract-server-actor';

@Component({
  selector: 'atft-server-icon-actor',
  providers: [provideParent(ServerIconActorComponent)],
  template: `
    <atft-empty name="server-box">

      <atft-empty atft-raycaster-group (mouseEnter)="onSelected()" (mouseExit)="onDeselected()" (click)="onClick()">
        <atft-svg-loader #svg *ngIf="icon" [icon]="icon" overrideMaterialColor="0xffffff" [translateZ]="0.1"
                         material="basic" maxX="13" maxY="13"
                         translateY="0" [rotateZ]="(180 | deg2rad)" [rotateY]="(180 | deg2rad)">
        </atft-svg-loader>
      </atft-empty>

      <atft-text-mesh [text]="label" [size]="2" [bevelEnabled]="false" height="0" [centered]="true"
                      material="basic" materialColor="0xDADADA" [translateY]="-11" [translateZ]="0.2">
      </atft-text-mesh>
      <atft-frame-mesh *ngIf="showFrame" [thickness]="1" [sizeX]="15" [sizeY]="15" [translateZ]="0.1" material="basic"
                       [materialColor]="color">
      </atft-frame-mesh>

    </atft-empty>
  `
})
export class ServerIconActorComponent extends AbstractServerActor {

}
