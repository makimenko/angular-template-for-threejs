import {Component, forwardRef} from '@angular/core';
import {AbstractObject3D} from '../../../object/abstract-object-3d';
import {AbstractServerActor} from './abstract-server-actor';

@Component({
  selector: 'atft-server-icon-actor',
  providers: [{provide: AbstractObject3D, useExisting: forwardRef(() => ServerIconActorComponent)}],
  template: `
      <atft-empty name="server-box">

          <!-- TODO: template? -->
          <atft-empty atft-raycaster-group (mouseEnter)="onSelected()" (mouseExit)="onDeselected()" (mouseDown)="onClick()">
              <atft-svg-loader *ngIf="svgName" [model]="('./assets/svg/'+svgName)" overrideMaterialColor="0xffffff"
                               material="basic" maxX="15" maxY="15" [translateZ]="0.1"
                               translateY="0" [rotateZ]="(180 | deg2rad)">
              </atft-svg-loader>

          </atft-empty>

          <atft-text-mesh [text]="label" [size]="2" [bevelEnabled]="false" height="0" [centered]="true"
                          material="basic" materialColor="0xDADADA" [translateY]="-11" [translateZ]="0.2">
          </atft-text-mesh>

      </atft-empty>
  `
})
export class ServerIconActorComponent extends AbstractServerActor {

}
