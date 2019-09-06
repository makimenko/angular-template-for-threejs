/**
 * Default Storybook 3D scene wrapper includes light, camera, orbit controls, Z axus up, grid and axis helpers.
 * Such template allows to focus on storybook inputs/knobs and actions testing.
 *
 * @param content content template
 */
export const defaultSceneWrapper = (content: string) => `
      <atft-orbit-controls style="height:100%" rotateSpeed=1 zoomSpeed=1.2
        [listeningControlElement]=mainRenderer.renderPane (render)="mainRenderer.render()">
          <atft-webgl-renderer #mainRenderer>
              <atft-perspective-camera (render)="mainRenderer.render()" [zAxisUp]="true" positionX=50 positionY=-20
                                       positionZ=50></atft-perspective-camera>
              <atft-scene>
                  <atft-axes-helper size=200></atft-axes-helper>
                  <atft-grid-helper [size]=200 [divisions]=10 [rotateX]="90 | deg2rad" (render)="mainRenderer.render()"></atft-grid-helper>
                  <atft-point-light color="white" intensity="0.5" distance="1000" translateX=90 translateY=90
                                    translateZ=90></atft-point-light>
                  <atft-point-light color="white" intensity="0.8" distance="1000" [translateX]="-60" [translateY]="-60"
                                    [translateZ]="50"></atft-point-light>
                  ${content}
              </atft-scene>
          </atft-webgl-renderer>
      </atft-orbit-controls>
`;


