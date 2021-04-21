import { Component } from '@angular/core';
import { provideParent } from '../../../util';
import { AbstractServerActor } from './abstract-server-actor';

@Component({
  selector: 'atft-server-barrel-actor',
  providers: [provideParent(ServerBarrelActorComponent)],
  template: `
    <atft-empty name="server-box">

      <!-- TODO: template? -->
      <atft-empty atft-raycaster-group (mouseEnter)="onSelected()" (mouseExit)="onDeselected()" (click)="onClick()">
        <atft-svg-loader *ngIf="icon" [icon]="icon" overrideMaterialColor="#ffffff"
                         material="basic" [maxX]="6" [maxY]="6" [translateZ]="13.1" [rotateZ]="(180 | deg2rad)" [rotateY]="(180 | deg2rad)">
        </atft-svg-loader>

        <atft-cylinder-mesh *ngFor="let z of [2, 6.5, 11]"
                            [height]="4" [radiusTop]="6" [radiusBottom]="6" [radialSegments]="30" [openEnded]="false"
                            material="phong" [materialColor]="color" [translateZ]="z" [rotateX]="(90 | deg2rad)">
        </atft-cylinder-mesh>
      </atft-empty>

      <atft-text-mesh [text]="label" [size]="2" [bevelEnabled]="false" [height]="0" [centered]="true"
                      [material]="'basic'" [materialColor]="'0xDADADA'" [translateY]="-11" [translateZ]="0.2">
      </atft-text-mesh>
      <atft-frame-mesh *ngIf="showFrame" [thickness]="1" [sizeX]="15" [sizeY]="15" [translateZ]="0.1" material="basic"
                       [materialColor]="color">
      </atft-frame-mesh>
    </atft-empty>
  `
})
export class ServerBarrelActorComponent extends AbstractServerActor {

}
