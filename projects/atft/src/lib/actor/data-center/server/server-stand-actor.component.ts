import {Component, Optional, SkipSelf} from '@angular/core';
import { provideParent } from '../../../util';
import { AbstractServerActor } from './abstract-server-actor';
import {RendererService} from '../../../renderer';
import {AbstractObject3D, ModelService} from '../../../object';
import {ThemeComponent} from '../theme';

@Component({
  selector: 'atft-server-stand-actor',
  providers: [provideParent(ServerStandActorComponent)],
  template: `
    <atft-empty name="server-box">

      <!-- TODO: template? -->

      <ng-template #standard>
        <atft-empty atft-raycaster-group (mouseEnter)="onSelected()" (mouseExit)="onDeselected()" (click)="onClick()">
          <atft-box-mesh [height]="10" [width]="10" [depth]="14" material="phong" [materialColor]="color" [translateZ]="7"
                         atft-raycaster-group (mouseEnter)="onSelected()" (mouseExit)="onDeselected()" (click)="onClick()">
            <atft-svg-loader *ngIf="icon" [icon]="icon" overrideMaterialColor="#ffffff"
                             material="basic" [maxX]="8" [maxY]="8" [translateZ]="0"
                             [translateY]="-5.1" [rotateX]="(90 | deg2rad)" [rotateZ]="(180 | deg2rad)" [rotateY]="(180 | deg2rad)">
            </atft-svg-loader>
          </atft-box-mesh>
        </atft-empty>

        <atft-text-mesh [text]="label" [size]="2" [bevelEnabled]="false" [height]="0" [centered]="true"
                        material="basic" materialColor="#DADADA" [translateY]="-11" [translateZ]="0.1"
                        [depthWrite]="true">
        </atft-text-mesh>
        <atft-frame-mesh *ngIf="showFrame" [thickness]="1" [sizeX]="15" [sizeY]="15" [translateZ]="0.2" material="basic"
                         [depthWrite]="true" [materialColor]="color">
        </atft-frame-mesh>
      </ng-template>


      <div *ngIf="theme && theme.raised else standard">
        <atft-rounded-box-mesh materialColor="#000000" [width]="25" [height]="25" [depth]="7" translateZ="0" radius0="0.9"
                               material="standard" [roughness]="0.1" [metalness]="0.5">
        </atft-rounded-box-mesh>

        <atft-text-mesh [text]="label" [size]="2" [bevelEnabled]="true" [height]="0.1" [centered]="true"
                        material="standard" materialColor="#FFFFFF" [translateY]="-7" [translateZ]="3.7"
                        [roughness]="0.2" [metalness]="1" [envMapIntensity]="0"
                        [depthWrite]="true">
        </atft-text-mesh>
      </div>


    </atft-empty>
  `
})
export class ServerStandActorComponent extends AbstractServerActor {

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>,
    @SkipSelf() @Optional() protected theme: ThemeComponent,
    protected modelService: ModelService
  ) {
    super(rendererService, parent);
  }


}
