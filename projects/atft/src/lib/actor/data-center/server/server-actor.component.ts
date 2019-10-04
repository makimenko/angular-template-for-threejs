import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {AbstractObject3D} from '../../../object/abstract-object-3d';
import {EmptyComponent} from '../../../object/helper';

@Component({
  selector: 'atft-server-actor',
  providers: [{provide: AbstractObject3D, useExisting: forwardRef(() => ServerActorComponent)}],
  template: `
      <ng-template #stand>
          <atft-box-mesh height="10" width="10" depth="14" material="phong" [materialColor]="color" [translateZ]="7"
                         atft-raycaster-group (mouseEnter)="onSelected()" (mouseExit)="onDeselected()" (mouseDown)="onClick()">
              <atft-svg-loader *ngIf="svgName" [model]="('./assets/svg/'+svgName)" overrideMaterialColor="0xffffff"
                               material="basic" maxX="8" maxY="8" [translateZ]="0"
                               translateY="-5.1" [rotateX]="(90 | deg2rad)" [rotateZ]="(180 | deg2rad)">
              </atft-svg-loader>
          </atft-box-mesh>
      </ng-template>

      <ng-template #compact>
          <atft-box-mesh height="10" width="10" depth="3" material="phong" [materialColor]="color" [translateZ]="1.5"
                         atft-raycaster-group (mouseEnter)="onSelected()" (mouseExit)="onDeselected()" (mouseDown)="onClick()">
              <atft-svg-loader *ngIf="svgName" [model]="('./assets/svg/'+svgName)" overrideMaterialColor="0xffffff"
                               material="basic" maxX="6" maxY="6" [translateZ]="1.6"
                               translateY="0" [rotateZ]="(180 | deg2rad)">
              </atft-svg-loader>
          </atft-box-mesh>
      </ng-template>

      <ng-template #barrel>
          <atft-empty atft-raycaster-group (mouseEnter)="onSelected()" (mouseExit)="onDeselected()" (mouseDown)="onClick()">
              <atft-svg-loader *ngIf="svgName" [model]="('./assets/svg/'+svgName)" overrideMaterialColor="0xffffff"
                               material="basic" maxX="6" maxY="6" translateZ="12.1" [rotateZ]="(180 | deg2rad)">
              </atft-svg-loader>

              <atft-cylinder-mesh *ngFor="let z of [1, 5.5, 10]"
                                  height="4" radiusTop="6" radiusBottom="6" [radialSegments]="30" [openEnded]="false"
                                  material="phong" [materialColor]="color" [translateZ]="z" [rotateX]="(90 | deg2rad)">

              </atft-cylinder-mesh>
          </atft-empty>
      </ng-template>

      <atft-empty name="server-box">
          <ng-container [ngSwitch]="serverType">
              <ng-container *ngSwitchCase="'compact'">
                  <ng-container *ngTemplateOutlet="compact"></ng-container>
              </ng-container>
              <ng-container *ngSwitchCase="'barrel'">
                  <ng-container *ngTemplateOutlet="barrel"></ng-container>
              </ng-container>
              <ng-container *ngSwitchDefault>
                  <ng-container *ngTemplateOutlet="stand"></ng-container>
              </ng-container>
          </ng-container>
          <atft-text-mesh [text]="label" [size]="2" [bevelEnabled]="false" height="0" [centered]="true"
                          material="basic" materialColor="0xDADADA" [translateY]="-12" [translateZ]="0.2">
          </atft-text-mesh>
          <atft-frame-mesh *ngIf="showFrame" [thickness]="2" [sizeX]="15" [sizeY]="15" [translateZ]="0.5" material="basic"
                           [materialColor]="color">
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
  svgName: string;

  color = 0xffffff;

  @Input()
  serverType = 'standard';

  @Input()
  showFrame = true;

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
