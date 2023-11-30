/**
 * Minimalistic Storybook 3D scene wrapper includes light, camera and orbit control.
 * Such template allows to focus on storybook models testing.
 *
 * @param content content template
 */
export const worldSceneWrapper = (content: string) => `
  <atft-map-controls style="height:100%" rotateSpeed=1 zoomSpeed=1.2 [enableDamping]="false" [autoRotate]="false">
      <atft-renderer-canvas>
          <atft-perspective-camera [zAxisUp]="true" positionX=40 [positionY]=-100
                [positionZ]=50 atft-raycaster-camera atft-raycaster-enable>
          </atft-perspective-camera>
          <atft-scene name="scene" background="#a0a0a0">
          <atft-fog color="#a0a0a0" [near]="80" [far]="500"></atft-fog>
          <atft-plane-mesh name="ground" [height]="2000" [width]="2000" materialColor="#999999" [depthWrite]="true" [castShadow]="false"
            [receiveShadow]="true" heightSegments="10" widthSegments="10" [translateZ]="-0.1">
            </atft-plane-mesh>
              <!--atft-axes-helper-- [size]=1000></atft-axes-helper-->
              <atft-hemisphere-light name="hemi-light" skyColor="#ffffff" groundColor="#ffffff"  [intensity]="0.8"
                [translateX]="-20" [translateY]="-20" [translateZ]="100">
              </atft-hemisphere-light>
              <!--<atft-directional-light color="#ffffff" [intensity]="0.7" [translateX]="20" [translateY]="-50" [translateZ]="50">
              </atft-directional-light>-->
              <atft-point-light name="point-light" [intensity]="10000" [translateX]="60" [translateY]="-120" [translateZ]="50" [castShadow]="true"></atft-point-light>
              ${content}
          </atft-scene>
      </atft-renderer-canvas>
  </atft-map-controls>
`;


