/**
 * Minimalistic Storybook 3D scene wrapper includes light, camera and orbit control.
 * Such template allows to focus on storybook models testing.
 *
 * @param content content template
 */
export const darkWorldSceneWrapper = (content: string) => `
  <atft-map-controls style="height:100%" rotateSpeed=1 zoomSpeed=1.2 [enableDamping]="false" [autoRotate]="false" [autoRotateSpeed]="0.7">
      <atft-renderer-canvas>
          <atft-perspective-camera [zAxisUp]="true" positionX=40 [positionY]=-100
                [positionZ]=50 atft-raycaster-camera atft-raycaster-enable>
          </atft-perspective-camera>
          <atft-scene name="scene" background="#000000" envMapPath="assets/envmap/my">

          <atft-effect-composer>
            <atft-bloom-effect [strength]="1" [radius]="0.1" [threshold]="0.1"></atft-bloom-effect>
          </atft-effect-composer>

          <atft-plane-mesh name="ground" [height]="2000" [width]="2000" [castShadow]="false"
            [receiveShadow]="true" heightSegments="10" widthSegments="10" [translateZ]="-0.1"
            material="standard" materialColor="#000000" [depthWrite]="true">
          </atft-plane-mesh>

          <atft-hexagon-mesh [cellSize]="20" [len]=30 material="standard" materialColor="#000000" [roughness]="0.7" [metalness]="0" [envMapIntensity]="1">
          </atft-hexagon-mesh>

          <atft-hemisphere-light name="hemi-light" skyColor="#ffffff" groundColor="#ffffff"  [intensity]="0.1"
                [translateX]="-20" [translateY]="-20" [translateZ]="100">
          </atft-hemisphere-light>

          <atft-directional-light color="#ffffff" [intensity]="0.3" [translateX]="-100" [translateY]="10" [translateZ]="100">
          </atft-directional-light>
          <atft-directional-light color="#ffffff" [intensity]="0.3" [translateX]="100" [translateY]="100" [translateZ]="100">
          </atft-directional-light>
          <atft-directional-light color="#ffffff" [intensity]="0.3" [translateX]="-20" [translateY]="100" [translateZ]="50">
          </atft-directional-light>
          <atft-directional-light color="#ffffff" [intensity]="0.3" [translateX]="0" [translateY]="-100" [translateZ]="50">
          </atft-directional-light>
          <atft-directional-light color="#ffffff" [intensity]="0.3" [translateX]="100" [translateY]="-100" [translateZ]="10">
          </atft-directional-light>

          ${content}
          </atft-scene>
      </atft-renderer-canvas>
  </atft-map-controls>
`;


