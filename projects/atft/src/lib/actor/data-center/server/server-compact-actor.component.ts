import { Component, Input } from '@angular/core';
import { provideParent } from '../../../util';
import { AbstractServerActor } from './abstract-server-actor';

@Component({
  selector: 'atft-server-compact-actor',
  providers: [provideParent(ServerCompactActorComponent)],
  template: `
      <atft-empty name="server-box">

          <!-- TODO: template? -->
          <atft-empty atft-raycaster-group (mouseEnter)="onSelected()" (mouseExit)="onDeselected()" (click)="onClick()">
              <atft-box-mesh [height]="10" [width]="10" [depth]="3" material="phong" [materialColor]="color" [translateZ]="1.5"
                             atft-raycaster-group (mouseEnter)="onSelected()" (mouseExit)="onDeselected()" (click)="onClick()">
                  <atft-svg-loader #svg *ngIf="icon" [icon]="icon" overrideMaterialColor="0xffffff"
                                   material="basic" [maxX]="6" [maxY]="6" [translateZ]="1.6"
                                   [translateY]="0" [rotateZ]="(180 | deg2rad)" [rotateY]="(180 | deg2rad)">
                  </atft-svg-loader>
              </atft-box-mesh>
          </atft-empty>

          <atft-text-mesh [text]="label" [size]="2" [bevelEnabled]="false" [height]="0" [centered]="true"
                          material="basic" materialColor="0xDADADA" [translateY]="-11" [translateZ]="0.2">
          </atft-text-mesh>
          <atft-frame-mesh *ngIf="showFrame" [thickness]="1" [sizeX]="15" [sizeY]="15" [translateZ]="0.1" material="basic"
                           [materialColor]="color">
          </atft-frame-mesh>
      </atft-empty>
  `
})
export class ServerCompactActorComponent extends AbstractServerActor {

}
