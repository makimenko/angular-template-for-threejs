# Changelog (`atft` library)
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [[1.2.0] - 2019.10.31](https://github.com/makimenko/angular-template-for-threejs/releases/tag/1.2.0)
### Added
- Support of multiple renderers: CSS3DRenderer and WebGlRenderer
- New components
  - AbstractCss3dMesh
  - Css3dVideoMeshComponent
  - WorkstationActorComponent
### Changed
- Deprecate `ObjLoaderComponent`'s `texturePath` input attribute in favor of `resourcePath` (following [Three.js' lead in this commit](https://github.com/mrdoob/three.js/commit/963bcc8144224f248f6d4687d95d3b191c0712df)).<br>
  From now on use `<atft-obj-loader model="..." resourcePath="..." />`)
- Adjusted "Actors" storybook

![Showcase Gif](https://user-images.githubusercontent.com/11466819/67981241-e311d980-fc28-11e9-82b3-a7f281132558.gif)

## [[1.1.0] - 2019-09-27](https://github.com/makimenko/angular-template-for-threejs/releases/tag/1.1.0)
### Added
- Interactivity features:
  - RaycasterService - allows to find objects intersections on mouse move/down. Emit object event.
  - Directives: atft-raycaster-camera, atft-raycaster-enable, atft-raycaster-group
- Performance optimizations:
  - RendererService - is responsible for the scene rendering. By default injected into all objects.
  - atft-raycaster-group - allows to group multiple hierarchical objects and emit event only on parent object (where directive is defined)
- Animation features:
  - AnimationService - is responsible for the animation frame preparation (emit animation event to all objects) and as last step - request rendering (emit render event for RendererService)
- Data Center Actor module
- Multiple new demo stories in storybook

Install from NPM: https://www.npmjs.com/package/atft

[![Showcase Gif](https://user-images.githubusercontent.com/11466819/65801227-479ccd00-e181-11e9-8da8-e93ccb1047c6.gif)](https://user-images.githubusercontent.com/11466819/65801227-479ccd00-e181-11e9-8da8-e93ccb1047c6.gif)

## [[1.0.2] - 2019-09-07](https://github.com/makimenko/angular-template-for-threejs/releases/tag/1.0.2)
### Added
- Integrate Storybook.js for isolated component exploration and development
- New demo scenes
- New components for
  - shadow
  - direct light
  - connector
  - plane
  - box meshes
### Changed
- Switch from Angular directives to components
- New abstractions

## [[0.1.0] - 2019-04-18](https://github.com/makimenko/angular-template-for-threejs/releases/tag/v0.1.0)
Same as [0.0.3], see [0.0.3] for the reasons it was yanked.

## [0.0.3] - 2019-04-18 [YANKED]
Yanked due to patch version increase not adhering to semver. Also, due to the tag `v0.0.3` already having been used for [0.0.2], which is confusing. From now on, `atft` library versions will match Git tags and GitHub releases.
### Added
- atft library: exposition of atft's public API by [@makimenko] fixing [issue #39](https://github.com/makimenko/angular-template-for-threejs/issues/39)

## [[0.0.2] - 2019-04-10](https://github.com/makimenko/angular-template-for-threejs/releases/tag/v0.0.3)
### Added
- atft library by [@makimenko] separating the Three.js bindings from the example code in `app.component.{html|ts|...}<br>
  It is published on NPM: https://www.npmjs.com/package/atft

# Changelog (example project)
Since the example project is not meant to be used as a dependency, we will always leave it at version [0.0.0].

## [0.0.0]
Initial and "continuously updated" version.
