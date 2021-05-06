# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.


### [1.4.23](https://github.com/makimenko/angular-template-for-threejs/compare/1.4.22...v1.4.23) (2021-05-05)

* introduce conventional commits and standard-release ([9ef6fec](https://github.com/makimenko/angular-template-for-threejs/commit/9ef6feca750eafaee3ed80128ff15c41344798b5))
* package.json & package-lock.json to reduce vulnerabilities ([b2a5568](https://github.com/makimenko/angular-template-for-threejs/commit/b2a5568389cd97706fd724489806a12fa60fccec))
* switch to karma-coverage ([#385](https://github.com/makimenko/angular-template-for-threejs/issues/385)) ([89730ac](https://github.com/makimenko/angular-template-for-threejs/commit/89730ac467642cd74cdf52882bab49396c1d8f2a))
* Improve code coverage (new unittests added)
* upgrade core-js from 3.10.1 to 3.11.0 ([74cd04b](https://github.com/makimenko/angular-template-for-threejs/commit/74cd04b31624cd255d854c0df6340c888c6b334d))
* **build:** types ([9384cb0](https://github.com/makimenko/angular-template-for-threejs/commit/9384cb0fce9b0abb3ab69835f1d2128b13f856d8))

### [1.4.22](https://github.com/makimenko/angular-template-for-threejs/compare/1.4.21...1.4.22) (2021-05-03)

- Upgraded atft:0.128.0
- Fixed raycaster bugs

### [1.4.21](https://github.com/makimenko/angular-template-for-threejs/compare/1.4.15...1.4.21) (2021-05-01)

- Improvements for [vect project](https://github.com/makimenko/vect)
- STL loader
- threejs upgrade
- strict types
- various bug fixes

### [1.4.15](https://github.com/makimenko/angular-template-for-threejs/compare/1.4.10...1.4.15) (2021-03-18)

- Upgrade three 0.126.1
- ModelActorComponent (model: user)
- AbstractSourceService, ModelService
- Bug fix: AbstractAssetService default provider

### [1.4.10](https://github.com/makimenko/angular-template-for-threejs/compare/1.4.0...1.4.10) (2021-03-02)

- Various enhancements of ATFT library for [Vect](https://github.com/makimenko/vect) project
- update three.js to 0.125
- Remove three meshline (unsupported project, failing with new three.js). Replace to LineConnector component.
- IconService (Material Design Icons, Microsoft Azure Icons, AWS Icons, Google Cloid Icons)
- Dagre Layout, Node, Edge, Composition
- Performance optimizations

### [1.4.0](https://github.com/makimenko/angular-template-for-threejs/compare/1.3.4...1.4.0) (2021-02-12)

- technical improvements

### [1.3.4](https://github.com/makimenko/angular-template-for-threejs/compare/1.3.3...1.3.4) (2020-09-21)

- Dependency upgrade (including typescript, compiler, angular, storybook)
- Disable Ivy compiler

### [1.3.3](https://github.com/makimenko/angular-template-for-threejs/compare/1.3.2...1.3.3) (2020-09-16)

- Disable Ivy compiler
- Verify release pipeline workflow (workflows/publish-on-npm.yml)
- Dependency upgrade (including typescript, compiler)

### [1.3.2](https://github.com/makimenko/angular-template-for-threejs/compare/1.3.1...1.3.2) (2020-09-16)

- Verify release pipeline workflow (workflows/publish-on-npm.yml)
- Dependency upgrade (including typescript, compiler)
- Fix library dist folder

### [1.3.1](https://github.com/makimenko/angular-template-for-threejs/compare/1.3.0...1.3.1) (2020-09-16)

- Verify release pipeline workflow (workflows/publish-on-npm.yml)
- Dependency upgrade (including typescript, compiler)

### [1.3.0](https://github.com/makimenko/angular-template-for-threejs/compare/1.2.0...1.3.0) (2020-09-16)

- Verify release pipeline workflow (workflows/publish-on-npm.yml)
- Dependency upgrade (including typescript, compiler)

### [1.2.0](https://github.com/makimenko/angular-template-for-threejs/compare/1.1.0...1.2.0) (2019-10-31)

- Support multiple renderers: CSS3DRenderer and WebGlRenderer
- New components
  - AbstractCss3dMesh
  - Css3dVideoMeshComponent
  - WorkstationActorComponent
- Adjusted "Actors" storybook

### [1.1.0](https://github.com/makimenko/angular-template-for-threejs/compare/1.0.2...1.1.0) (2019-09-27)

- New interactivity features
  - RaycasterService - allows to find objects intersections on mouse move/down. Emit object event.
  - new directives: atft-raycaster-camera, atft-raycaster-enable, atft-raycaster-group
- Performance optimizations:
  - RendererService - is responsible for the scene rendering. By default injected into all objects.
  - atft-raycaster-group - allows to group multiple hierarchical objects and emit event only on parent object (where directive is defined)
- New animation features:
  - AnimationService - is responsible for the animation frame preparation (emit animation event to all objects) and as last step - request rendering (emit render event for RendererService)
- Data Center Actor module
- Multiple new demo stories in storybook

### [1.0.2](https://github.com/makimenko/angular-template-for-threejs/compare/0.1.0...1.0.2) (2019-09-08)

* Introduced [Storybook](https://storybook.js.org) for isolated component development
* Switched from Angular directives to components
* New features: shadow, direct light, connector, plane, box meshes
* Abstractions
* Multiple demo scenes


### [0.1.0](https://github.com/makimenko/angular-template-for-threejs/compare/v0.0.3...0.1.0) (2019-04-25)
* Same as the [previous release](https://github.com/makimenko/angular-template-for-threejs/releases/tag/v0.0.3), but fixes #39, so that consumers of atft can actually use its API without warnings.

### [0.0.2](https://github.com/makimenko/angular-template-for-threejs/compare/v0.0.2...v0.0.3) (2019-04-10)

* atft library published on [NPM](https://www.npmjs.com/package/atft)

### [0.0.2](https://github.com/makimenko/angular-template-for-threejs/compare/v0.0.1...v0.0.2) (2019-04-10)

* Application and Three.js Components in a single project (as Monolith).

### [0.0.1](https://github.com/makimenko/angular-template-for-threejs/tree/v0.0.1) (2019-03-14)

* Initial version
* Integration with Travis-CI and Greenkeeper.

