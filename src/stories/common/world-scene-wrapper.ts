/**
 * Minimalistic Storybook 3D scene wrapper includes light, camera and orbit control.
 * Such template allows to focus on storybook models testing.
 *
 * @param content content template
 */
export const worldSceneWrapper = (content: string) => `
  <atft-orbit-controls style="height:100%" rotateSpeed=1 zoomSpeed=1.2
    [listeningControlElement]=mainRenderer.renderPane>
      <atft-webgl-renderer #mainRenderer>
          <atft-perspective-camera [zAxisUp]="true" positionX=20 positionY=-80
                positionZ=30 atft-raycaster-camera atft-raycaster-enable>
          </atft-perspective-camera>
          <atft-scene name="scene" background="0xa0a0a0" [fog]="true" fogColor="0xa0a0a0" fogNear="40" fogFar="500">
          <atft-plane-mesh name="ground" height="2000" width="2000" materialColor="0x999999" [depthWrite]="false" [castShadow]="false"
            [receiveShadow]="true" heightSegments="10" widthSegments="10">
            </atft-plane-mesh>
              <!--atft-axes-helper size=1000></atft-axes-helper-->
              <atft-hemisphere-light name="hemi-light" skyColor="0xffffff" groundColor="0xffffff"  intensity="0.3"
                translateX="-20" translateY="-20" translateZ="100">
              </atft-hemisphere-light>
              <!--<atft-directional-light color="0xffffff" intensity="0.7" translateX="20" translateY="-50" translateZ="50">
              </atft-directional-light>-->
              <atft-point-light name="point-light" intensity="1" translateX="20" translateY="-50" translateZ="50" [castShadow]="true"></atft-point-light>
              ${content}
          </atft-scene>
      </atft-webgl-renderer>
  </atft-orbit-controls>
`;


