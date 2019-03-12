# Angular Template For Dummies

The goals of this Git repository:
- Simplify new web project development with Angular and modern 3D engine [Three.js](https://threejs.org)
- This template project can be quickly used as base instead of wasting hours of going through building instructions
- SceneComponent with basic usage of scene, camera, lights, axis helper, raytracer, renderer and collada model
- Enabled possibility to use non-moduled three.js code (eg OrbitControls and ColladaLoader). Some additional info: the things in threejs/examples/js/ haven't been transformed to support modules yet, this makes them currently unusable from within environment such as Angular, more info: [threejs issue #9562](https://github.com/mrdoob/three.js/issues/9562). But nothing is not possible and sample includes one of working workarounds.

# Demo
Click below to see demo in Web browser:<br>
<a href="https://makimenko.github.io/angular-template-for-threejs"><img src="https://raw.githubusercontent.com/makimenko/files/master/angular-template-for-threejs/images/demo.gif"></a>


# Usage

### Clone Repository
```
git clone https://github.com/makimenko/angular-template-for-threejs.git
cd angular-template-for-threejs
```

### Install Dependencies
```
npm install
```

### Build and Run
```
ng serve --open
```
