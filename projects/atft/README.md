[![Build Status](https://api.travis-ci.com/makimenko/angular-template-for-threejs.svg?branch=master)](https://travis-ci.com/makimenko/angular-template-for-threejs)
[![Greenkeeper badge](https://badges.greenkeeper.io/makimenko/angular-template-for-threejs.svg)](https://greenkeeper.io/)
[![codecov](https://codecov.io/gh/makimenko/angular-template-for-threejs/branch/master/graph/badge.svg)](https://codecov.io/gh/makimenko/angular-template-for-threejs)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/94e8d8689ae546d7a3e077ff3b5c5192)](https://app.codacy.com/app/mihails.akimenko/angular-template-for-threejs?utm_source=github.com&utm_medium=referral&utm_content=makimenko/angular-template-for-threejs&utm_campaign=Badge_Grade_Dashboard)

# ATFT (Angular Template for Threejs)

Simplify new web project development with Angular and modern 3D engine [Three.js](https://threejs.org)  

Github: [angular-template-for-threejs](https://github.com/makimenko/angular-template-for-threejs)

## Demo
Click below to see demo in Web browser:<br>
<a href="https://makimenko.github.io/angular-template-for-threejs/demo"><img src="https://raw.githubusercontent.com/makimenko/files/master/angular-template-for-threejs/images/demo.gif"></a>


## Installation
Add and install npm dependency to Angular project
```
npm i atft --save
```

## Usage
Sample of Three.js scene with OrbitControls, WebGL renderer, Grid and Axes helpers:
```
<atft-orbit-controls [rotateSpeed]=1 [zoomSpeed]=1.2 [listeningControlElement]=mainRenderer.renderPane>
  <atft-webgl-renderer #mainRenderer>

    <atft-perspective-camera [fov]=60 [near]=1 [far]=1100 positionX=20 positionY=50 positionZ=50></atft-perspective-camera>

    <atft-scene>
      <atft-axes-helper size=200></atft-axes-helper>
      <atft-grid-helper size=100 divisions=10></atft-grid-helper>
    <atft-scene>
  </atft-webgl-renderer>
</atft-orbit-controls>
```