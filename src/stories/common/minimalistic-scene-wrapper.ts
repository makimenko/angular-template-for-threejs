/**
 * Minimalistic Storybook 3D scene wrapper includes light, camera and orbit controls.
 * Such template allows to focus on storybook models testing.
 *
 * @param content content template
 */
export const minimalisticSceneWrapper = (content: string) => `
  <atft-orbit-controls style="height:100%" rotateSpeed=1 zoomSpeed=1.2
    [listeningControlElement]=mainRenderer.renderPane (render)="mainRenderer.render()">
      <atft-webgl-renderer #mainRenderer>
          <atft-perspective-camera (render)="mainRenderer.render()" [zAxisUp]="true" positionX=150 positionY=50
                                   positionZ=50></atft-perspective-camera>
          <atft-scene>
              <atft-point-light intensity="0.5" distance="1000" translateX=90 translateY=90
                                translateZ=90></atft-point-light>
              <atft-point-light intensity="0.7" distance="1000" [translateX]="-60" [translateY]="-60"
                                [translateZ]="50"></atft-point-light>
              ${content}
          </atft-scene>
      </atft-webgl-renderer>
  </atft-orbit-controls>
`;


