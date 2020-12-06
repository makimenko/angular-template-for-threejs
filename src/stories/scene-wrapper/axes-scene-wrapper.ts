/**
 * Default Storybook 3D scene wrapper includes light, camera, orbit control, Z axus up, grid and axis helper.
 * Such template allows to focus on storybook inputs/knobs and actions testing.
 *
 * @param content content template
 */
export const axesSceneWrapper = (content: string) => `
<atft-orbit-controls style="height:100%" rotateSpeed=1 zoomSpeed=1.2>
  <atft-renderer-canvas>
      <atft-perspective-camera [zAxisUp]="true" positionX=50 positionY=-20 positionZ=50></atft-perspective-camera>
      <atft-scene atft-stats-auto-show>
          <atft-axes-helper size=200></atft-axes-helper>
          <atft-grid-helper [size]=200 [divisions]=10 [rotateX]="90 | deg2rad"></atft-grid-helper>
          <atft-point-light intensity="0.5" distance="1000" translateX=90 translateY=90
                            translateZ=90></atft-point-light>
          <atft-point-light intensity="0.8" distance="1000" [translateX]="-60" [translateY]="-60"
                            [translateZ]="50"></atft-point-light>
          ${content}
      </atft-scene>
  </atft-renderer-canvas>
</atft-orbit-controls>
`;


