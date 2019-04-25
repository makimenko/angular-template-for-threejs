[GitHub repo](https://github.com/makimenko/angular-template-for-threejs) ┃ [![Build Status](https://api.travis-ci.com/makimenko/angular-template-for-threejs.svg?branch=master)](https://travis-ci.com/makimenko/angular-template-for-threejs)
[![Greenkeeper badge](https://badges.greenkeeper.io/makimenko/angular-template-for-threejs.svg)](https://greenkeeper.io/)
[![codecov](https://codecov.io/gh/makimenko/angular-template-for-threejs/branch/master/graph/badge.svg)](https://codecov.io/gh/makimenko/angular-template-for-threejs)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/94e8d8689ae546d7a3e077ff3b5c5192)](https://app.codacy.com/app/mihails.akimenko/angular-template-for-threejs?utm_source=github.com&utm_medium=referral&utm_content=makimenko/angular-template-for-threejs&utm_campaign=Badge_Grade_Dashboard)

# ATFT (Angular Template for Threejs) Library

Leverage [Three.js](https://threejs.org) in your Angular app using simple directives:

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

<!-- Result: ![Animated gif showing the result of the code above](https://raw.githubusercontent.com/makimenko/files/master/angular-template-for-threejs/images/grid.gif) -->

## Full Demo

Click below to see demo in web browser:<br>
<a href="https://makimenko.github.io/angular-template-for-threejs/demo"><img src="https://raw.githubusercontent.com/makimenko/files/master/angular-template-for-threejs/images/demo.gif"></a>

Demo source: <https://github.com/makimenko/angular-template-for-threejs>

## Installation

1. `npm i atft three --save`
2. In the module you want to use ATFT (e.g. `app.module.ts`), import atft:
   ```typescript
   import { AtftModule } from 'atft';
   ...
     imports: [
       ...
       AtftModule
     ]
    ...
    ```

## API Documentation & Usage

- Check out the [demo source](https://github.com/makimenko/angular-template-for-threejs/tree/master/src/app) for sample usage
- For more details see [API documentation](https://makimenko.github.io/angular-template-for-threejs)

## Contributors (sorted alphabetically)

- [<img src="https://avatars0.githubusercontent.com/u/1827709?s=20"> ComFreek](https://github.com/ComFreek)
- [<img src="https://avatars1.githubusercontent.com/u/11466819?s=20"> Mihails Akimenko](https://github.com/makimenko)