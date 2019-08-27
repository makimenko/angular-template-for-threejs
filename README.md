[![Build Status](https://api.travis-ci.com/makimenko/angular-template-for-threejs.svg?branch=master)](https://travis-ci.com/makimenko/angular-template-for-threejs)
[![Greenkeeper badge](https://badges.greenkeeper.io/makimenko/angular-template-for-threejs.svg)](https://greenkeeper.io/)
[![codecov](https://codecov.io/gh/makimenko/angular-template-for-threejs/branch/master/graph/badge.svg)](https://codecov.io/gh/makimenko/angular-template-for-threejs)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/94e8d8689ae546d7a3e077ff3b5c5192)](https://app.codacy.com/app/mihails.akimenko/angular-template-for-threejs?utm_source=github.com&utm_medium=referral&utm_content=makimenko/angular-template-for-threejs&utm_campaign=Badge_Grade_Dashboard)
[![npm version](https://badge.fury.io/js/atft.svg)](https://badge.fury.io/js/atft)

# Angular Template For Dummies: atft library + full demo

Leverage [Three.js](https://threejs.org) in your Angular app using simple components:

```html
<atft-orbit-controls [rotateSpeed]=1 [zoomSpeed]=1.2>
  <atft-webgl-renderer>
    <atft-perspective-camera
      [fov]=60 [near]=1 [far]=1100
      positionX=20 positionY=50 positionZ=50>
    </atft-perspective-camera>
    <atft-scene>
      <atft-axes-helper size=200></atft-axes-helper>
      <atft-grid-helper size=100 divisions=10></atft-grid-helper>
    </atft-scene>
  </atft-webgl-renderer>
</atft-orbit-controls>
```

- [**atft library**](https://www.npmjs.com/package/atft): Reusable Angular library giving you all the Three.js bindings
  - SceneComponent with basic usage of scene, camera, lights, axis helper, raytracer, renderer
  - Integrated Three.js examples as components (e.g. OrbitControls, OBJLoader. MTLLoader)
- [**_this_ template repository**](https://github.com/makimenko/angular-template-for-threejs): Template and demo showing how to use atft. Use it as a template for _your project_ to get quickly started!

## Full Demo

Click below to see demo in web browser:<br>
<a href="https://makimenko.github.io/angular-template-for-threejs/demo"><img src="https://raw.githubusercontent.com/makimenko/files/master/angular-template-for-threejs/images/demo.gif"></a>

Demo source: <https://github.com/makimenko/angular-template-for-threejs>

## Usage

1. `git clone https://github.com/makimenko/angular-template-for-threejs.git`
2. `npm install`
3. `ng build atft`<br>
   Build the `atft` library, must only be run once.
4. `ng serve --open`

To build and watch "atft" library, please change imports in "app.module.ts" from:
```typescript
import { AtftModule } from 'atft';
```
to:
```typescript
import { AtftModule } from 'projects/atft/src/lib/atft.module';
```

## Storybook

Visually explore provided Angular components with [Storybook.js](https://storybook.js.org/): `npm run storybook`

## API Documentation

For mode details see [API documentation](https://makimenko.github.io/angular-template-for-threejs)

## Testing

- Watch mode (preferred for development): `npm test`
- Non-watch mode: `npm test -- --watch=false`

## Contributors (sorted alphabetically)

- [<img src="https://avatars0.githubusercontent.com/u/1827709?s=20"> ComFreek](https://github.com/ComFreek)
- [<img src="https://avatars1.githubusercontent.com/u/11466819?s=20"> Mihails Akimenko](https://github.com/makimenko)
