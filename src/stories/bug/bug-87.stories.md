# Description

GitHub link to the issue: [#87](https://github.com/makimenko/angular-template-for-threejs/issues/87)<br>  
AbstractObject3D in the ng-content is not visible for parent. As result it's not added to the scene.

# Steps

StorybookWrapperComponent:

```typescript
@Component({
  selector: 'app-storybook-wrapper',
  template: `
      <atft-orbit-controls rotateSpeed=1 zoomSpeed=1.2 [listeningControlElement]=mainRenderer.renderPane>
          <atft-webgl-renderer #mainRenderer>
              <atft-perspective-camera positionX=10 positionY=50 positionZ=50></atft-perspective-camera>
              <atft-scene>
                  <atft-axes-helper size=200></atft-axes-helper>
                  <atft-grid-helper size=100 divisions=10></atft-grid-helper>
                  <atft-point-light color="white" intensity="0.9" distance="1000" translateX=50 translateY=50
                                    translateZ=50></atft-point-light>
                  <!-- Why it's not working? -->
                  <ng-content></ng-content>
              </atft-scene>
          </atft-webgl-renderer>
      </atft-orbit-controls>
  `
})
class StorybookWrapperComponent {

}
```

StorybookEmbeddedComponent:

```typescript
@Component({
  selector: 'app-storybook-embedded',
  providers: [{provide: AbstractObject3D, useExisting: forwardRef(() => StorybookEmbeddedComponent)}],
  template: `
      <app-storybook-wrapper>
          <atft-cylinder-mesh [radiusTop]="2" [radiusBottom]="3" [height]="10" [radialSegments]="36" [heightSegments]="1"
                              material="lamb" materialColor="0xff0000" [translateZ]="10">
          </atft-cylinder-mesh>
      </app-storybook-wrapper>
  `
})
class StorybookEmbeddedComponent extends EmptyComponent {
  // TODO: Why @ContentChildren is not woring, with ng-content?
}
```

The application starts from: StorybookEmbeddedComponent

# Actual
atft-cylinder-mesh not added to the scene

# Expected
atft-cylinder-mesh should be added to the scene
