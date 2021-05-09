/**
 * Minimalistic Storybook 3D scene wrapper includes light, camera and orbit control.
 * Such template allows to focus on storybook models testing.
 *
 * @param content content template
 */
export const darkWorldSceneWrapper = (content: string) => `
  <atft-map-controls style="height:100%" rotateSpeed=1 zoomSpeed=1.2 [enableDamping]="false" [autoRotate]="false">
      <atft-renderer-canvas>
          <atft-perspective-camera [zAxisUp]="true" positionX=40 [positionY]=-100
                [positionZ]=50 atft-raycaster-camera atft-raycaster-enable>
          </atft-perspective-camera>
          <atft-scene name="scene" background="#000000">
          <atft-plane-mesh name="ground" [height]="2000" [width]="2000" materialColor="#000000" [depthWrite]="true" [castShadow]="false"
            [receiveShadow]="true" heightSegments="10" widthSegments="10" [translateZ]="-0.1">
            </atft-plane-mesh>
              <atft-hemisphere-light name="hemi-light" skyColor="#ffffff" groundColor="#ffffff"  [intensity]="0.4"
                [translateX]="-20" [translateY]="-20" [translateZ]="100">
              </atft-hemisphere-light>

              <atft-directional-light color="#ffffff" [intensity]="0.4" [translateX]="-100" [translateY]="10" [translateZ]="100">
              </atft-directional-light>
              <atft-directional-light color="#ffffff" [intensity]="0.4" [translateX]="100" [translateY]="100" [translateZ]="100">
              </atft-directional-light>
              <atft-directional-light color="#ffffff" [intensity]="0.4" [translateX]="-20" [translateY]="100" [translateZ]="50">
              </atft-directional-light>
              <atft-directional-light color="#ffffff" [intensity]="0.4" [translateX]="0" [translateY]="-100" [translateZ]="50">
              </atft-directional-light>
              <atft-directional-light color="#ffffff" [intensity]="0.4" [translateX]="100" [translateY]="-100" [translateZ]="10">
              </atft-directional-light>

              <!--<atft-box-mesh [width]="0.2" [height]="0.2" [depth]="60"></atft-box-mesh>-->

              ${content}
          </atft-scene>
      </atft-renderer-canvas>
  </atft-map-controls>
`;


