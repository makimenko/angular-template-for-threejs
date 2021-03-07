import {Component} from '@angular/core';
import {provideParent} from '../../../util';
import {AbstractServerActor} from './abstract-server-actor';

const modelPath = 'https://raw.githubusercontent.com/makimenko/files/master/angular-template-for-threejs/model/Human';

@Component({
  selector: 'atft-user-actor',
  providers: [provideParent(UserActorComponent)],
  template: `
    <atft-empty name="server-box">

      <atft-empty atft-raycaster-group (mouseEnter)="onSelected()" (mouseExit)="onDeselected()" (click)="onClick()">
        <atft-obj-loader
          model="${modelPath}/Human.obj"

          resourcePath="${modelPath}/">
        </atft-obj-loader>
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
export class UserActorComponent extends AbstractServerActor {
// material="${modelPath}/Human.mtl"

}
