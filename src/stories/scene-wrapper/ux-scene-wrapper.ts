/**
 * Minimalistic Storybook 3D scene wrapper includes light, camera and orbit control.
 * Such template allows to focus on storybook models testing.
 *
 * @param content content template
 */
export const uxSceneWrapper = (content: string) => `
    <atft-renderer-canvas>
      <atft-orthographic-camera [positionX]=0 [positionY]=0 [positionZ]="100" [zoom]="4">
      </atft-orthographic-camera>

      <atft-scene name="scene" background="0xFFFFFF">
        <atft-ambient-light color="0xFFFFFF" [intensity]="0.4"></atft-ambient-light>

        <atft-point-light [intensity]="0.5" [distance]="1000" [translateX]=90 [translateY]=90
                          [translateZ]=90></atft-point-light>
        <atft-point-light [intensity]="0.8" [distance]="1000" [translateX]="-60" [translateY]="-60"
                          [translateZ]="50"></atft-point-light>

        ${content}

      </atft-scene>
    </atft-renderer-canvas>
`;


