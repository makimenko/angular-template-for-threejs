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
          <atft-scene name="scene" background="#000000" envMapPath="assets/envmap/my">

          <atft-effect-composer>
            <atft-bloom-effect [strength]="2" [radius]="0.1" [threshold]="0.1"></atft-bloom-effect>
          </atft-effect-composer>

<!--
          <atft-plane-mesh name="ground" [height]="2000" [width]="2000" materialColor="#000000" [depthWrite]="true" [castShadow]="false"
            [receiveShadow]="true" heightSegments="10" widthSegments="10" [translateZ]="-0.1">
            </atft-plane-mesh>
-->
            <atft-rounded-box-mesh materialColor="#000000" [width]="2000" [height]="2000" [depth]="0.01" translateZ="-0.3" translateY="0" radius0="0"></atft-rounded-box-mesh>

            <atft-hexagon-mesh [cellSize]="20" [len]=20 materialColor="#0A0A0A"></atft-hexagon-mesh>

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
              ${content}
          </atft-scene>
      </atft-renderer-canvas>
  </atft-map-controls>
`;


