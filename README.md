[![Build Status](https://api.travis-ci.com/makimenko/angular-template-for-threejs.svg?branch=master)](https://travis-ci.com/makimenko/angular-template-for-threejs)
[![Greenkeeper badge](https://badges.greenkeeper.io/makimenko/angular-template-for-threejs.svg)](https://greenkeeper.io/)
[![codecov](https://codecov.io/gh/makimenko/angular-template-for-threejs/branch/master/graph/badge.svg)](https://codecov.io/gh/makimenko/angular-template-for-threejs)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/94e8d8689ae546d7a3e077ff3b5c5192)](https://app.codacy.com/app/mihails.akimenko/angular-template-for-threejs?utm_source=github.com&utm_medium=referral&utm_content=makimenko/angular-template-for-threejs&utm_campaign=Badge_Grade_Dashboard)
[![npm version](https://badge.fury.io/js/atft.svg)](https://badge.fury.io/js/atft)

# Angular Template For Dummies

The goals of this Git repository:
- Simplify new web project development with Angular and modern 3D engine [Three.js](https://threejs.org)
- This template project can be quickly used as base instead of wasting hours of going through building instructions
- SceneComponent with basic usage of scene, camera, lights, axis helper, raytracer, renderer and OBJ/MTL model
- Demonstrated three.js examples (eg OrbitControls, ObjLoader. MtlLoader).
- Reusable code is published as public npm library: [atft](https://www.npmjs.com/package/atft)


# Demo
Click below to see demo in web browser:<br>
<a href="https://makimenko.github.io/angular-template-for-threejs/demo"><img src="https://raw.githubusercontent.com/makimenko/files/master/angular-template-for-threejs/images/demo.gif"></a>

# Usage

Clone Repository
```
git clone https://github.com/makimenko/angular-template-for-threejs.git
cd angular-template-for-threejs
```

Install Dependencies
```
npm install
```

Build and Run
```
ng build atft
ng serve --open
```

To build and watch "atft" library, please change imports in "app.module.ts" from:
```
import { AtftModule } from 'atft';
```
to:
```
import { AtftModule } from 'projects/atft/src/lib/atft.module';
```


# API Documentation
For mode details see [API documentation](https://makimenko.github.io/angular-template-for-threejs)
