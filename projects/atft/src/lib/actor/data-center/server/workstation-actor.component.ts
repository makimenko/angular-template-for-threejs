import {Component, Input} from '@angular/core';
import {provideParent} from '../../../util';
import {AbstractServerActor} from './abstract-server-actor';

@Component({
  selector: 'atft-workstation-actor',
  providers: [provideParent(WorkstationActorComponent)],
  template: `
    <atft-empty name="server-box">

      <!-- TODO: template? -->
      <atft-empty atft-raycaster-group (mouseEnter)="onSelected()" (mouseExit)="onDeselected()" (click)="onClick()">
        <atft-box-mesh [height]="10" [width]="10" [depth]="0.5" material="phong" [materialColor]="color" [translateZ]="0.5">
        </atft-box-mesh>
        <atft-box-mesh [height]="12.25" [width]="21" [depth]="1" [materialColor]="color" material="phong"
                       [rotateX]="(80 | deg2rad)" [translateZ]="7">

          <atft-video-mesh *ngIf="videoSrc" [height]="11.25" [width]="20" [translateZ]="0.6" [videoSrc]="videoSrc">
          </atft-video-mesh>
          <atft-box-mesh *ngIf="!videoSrc" [height]="11.25" [width]="20" [depth]="0" [translateZ]="0.6" materialColor="#ffffff"
                         [depthWrite]="false">
          </atft-box-mesh>

        </atft-box-mesh>
      </atft-empty>

      <atft-text-mesh [text]="label" [size]="2" [bevelEnabled]="false" [height]="0" [centered]="true"
                      material="basic" materialColor="#DADADA" [translateY]="-11" [translateZ]="0.2">
      </atft-text-mesh>
      <atft-frame-mesh *ngIf="showFrame" [thickness]="1" [sizeX]="15" [sizeY]="15" [translateZ]="0.1" material="basic"
                       [materialColor]="color">
      </atft-frame-mesh>
    </atft-empty>
  `
})
export class WorkstationActorComponent extends AbstractServerActor {

  @Input()
  videoSrc = 'https://raw.githubusercontent.com/makimenko/files/master/angular-template-for-threejs/videos/ui/retro_futuristic_ui_360p.mp4';

}
