import {Component} from '@angular/core';
import {axesSceneWrapper} from '../scene-wrapper/axes-scene-wrapper';
import {AnimationService} from '../../../projects/atft/src/lib/animation';

@Component({
  template: axesSceneWrapper(`
  <atft-sphere-mesh [radius]="2" [widthSegments]="10" [hightSegments]="20" material="lamb" materialColor="0x00ff00"
    #a translateY="50" translateX="-10" [translateZ]="translateZ">
  </atft-sphere-mesh>
  <atft-sphere-mesh [radius]="2" [widthSegments]="10" [hightSegments]="20" material="lamb" materialColor="0x00ff00"
    #b translateY="-50" translateX="10" translateZ="+10">
  </atft-sphere-mesh>

  <atft-mesh-line-connector [source]="a" [target]="b" materialColor="0xff0000"
  [animated]="true"
  >
  </atft-mesh-line-connector>
  `)
})
export class StorybookMeshLineAnimationComponent {

  constructor(private animationService: AnimationService) {
    this.animationService.start();
  }

}
