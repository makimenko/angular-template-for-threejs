/**
 * Test effects
 *
 * @param content content template
 */
export const effectsSceneWrapper = (content: string) => `
  <atft-orbit-controls style="height:100%" rotateSpeed=1 zoomSpeed=1.2>
      <atft-renderer-canvas>
          <atft-perspective-camera [zAxisUp]="true" positionX=40 [positionY]=-100
                [positionZ]=50 atft-raycaster-camera atft-raycaster-enable>
          </atft-perspective-camera>
          <atft-scene name="scene" [background]="background">
          ${content}

          <atft-point-light [intensity]="30000" [distance]="1000" [translateX]=90 [translateY]=90
                            [translateZ]=90></atft-point-light>
          <atft-point-light [intensity]="20000" [distance]="1000" [translateX]="-60" [translateY]="-60"
                            [translateZ]="50"></atft-point-light>

          <atft-box-mesh *ngFor="let item of [].constructor(20); let i = index"
                [height]="10" [width]="10" [depth]="10" material="phong" materialColor="#1111ff"
                [translateX]="(i*15)-150"></atft-box-mesh>


          </atft-scene>
      </atft-renderer-canvas>
  </atft-orbit-controls>
`;


