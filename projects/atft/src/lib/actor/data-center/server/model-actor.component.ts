import {Component, Input, Optional, SkipSelf} from '@angular/core';
import {provideParent} from '../../../util';
import {AbstractServerActor} from './abstract-server-actor';
import {AbstractObject3D, IconService, ModelService} from '../../../object';
import {RendererService} from '../../../renderer';

@Component({
  selector: 'atft-model-actor',
  providers: [provideParent(ModelActorComponent)],
  template: `
    <atft-empty>

      <atft-empty atft-raycaster-group (mouseEnter)="onSelected()" (mouseExit)="onDeselected()" (click)="onClick()">
        <atft-obj-loader *ngIf="modelPath" [model]="modelPath">
        </atft-obj-loader>
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
export class ModelActorComponent extends AbstractServerActor {

  @Input()
  set model(model: string) {
    const iconProvider = this.modelService.getSource(model);
    this.modelPath = iconProvider.url;
  }

  get model(): string {
    return this.model;
  }

  public modelPath: string;

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>,
    protected modelService: ModelService
  ) {
    super(rendererService, parent);
  }


}
