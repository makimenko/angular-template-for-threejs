"use strict";(self.webpackChunkangular_template_for_threejs=self.webpackChunkangular_template_for_threejs||[]).push([[7379],{"./src/stories/dagre-layout/dagre-dynamic.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DynamicYAML:()=>DynamicYAML,default:()=>__WEBPACK_DEFAULT_EXPORT__});var tslib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_projects_atft_src_lib_actor_data_center__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./projects/atft/src/lib/actor/data-center/atft-data-center-actor.module.ts"),_projects_atft_src_lib_atft_module__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./projects/atft/src/lib/atft.module.ts"),_scene_wrapper_world_scene_wrapper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/stories/scene-wrapper/world-scene-wrapper.ts"),_projects_atft_src_lib_animation__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/atft/src/lib/animation/animation.service.ts");let StorybookLoopComponent=class StorybookLoopComponent{constructor(animationService){this.animationService=animationService,this.animationService.start()}static#_=this.ctorParameters=()=>[{type:_projects_atft_src_lib_animation__WEBPACK_IMPORTED_MODULE_1__.Y}];static#_2=this.propDecorators={yaml:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}]}};StorybookLoopComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_3__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({selector:"app-storybook",template:(0,_scene_wrapper_world_scene_wrapper__WEBPACK_IMPORTED_MODULE_4__.A)('\n    <atft-dagre-layout>\n      <atft-dagre-yaml-parser [yaml]="yaml" svgLocation="https://raw.githubusercontent.com/material-icons/material-icons/master/svg/">\n      </atft-dagre-yaml-parser>\n    </atft-dagre-layout>\n')})],StorybookLoopComponent);const __WEBPACK_DEFAULT_EXPORT__={title:"Dagre Layout/Dynamic YAML",component:StorybookLoopComponent,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_projects_atft_src_lib_atft_module__WEBPACK_IMPORTED_MODULE_5__.p,_projects_atft_src_lib_actor_data_center__WEBPACK_IMPORTED_MODULE_6__.F]})]},DynamicYAML={args:{yaml:"compositions:\n  - name: data\n    label: Data Layer\n    composition: backend\n  - name: backend\n    label: Backend\n    border: frame\nnodes:\n  - name: user\n    model: user\n  - name: workstation\n    type: workstation\n  - name: spa\n    type: compact\n    icon: connected_tv\n  - name: api\n    composition: backend\n    icon: video_settings\n  - name: db1\n    label: PostgreSQL\n    composition: data\n    type: barrel\n  - name: db2\n    label: MongoDB\n    composition: data\nedges:\n  - from: user\n    to: workstation\n  - from: workstation\n    to: spa\n  - from: spa\n    to: api\n    type: sequence\n  - from: api\n    to: db2\n    type: association\n  - from: api\n    to: db1\n    type: message\n    color: 0xff0000\n"}}},"./src/stories/scene-wrapper/world-scene-wrapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>worldSceneWrapper});const worldSceneWrapper=content=>`\n  <atft-map-controls style="height:100%" rotateSpeed=1 zoomSpeed=1.2 [enableDamping]="false" [autoRotate]="false">\n      <atft-renderer-canvas>\n          <atft-perspective-camera [zAxisUp]="true" positionX=40 [positionY]=-100\n                [positionZ]=50 atft-raycaster-camera atft-raycaster-enable>\n          </atft-perspective-camera>\n          <atft-scene name="scene" background="#a0a0a0">\n          <atft-fog color="#a0a0a0" [near]="80" [far]="500"></atft-fog>\n          <atft-plane-mesh name="ground" [height]="2000" [width]="2000" materialColor="#999999" [depthWrite]="true" [castShadow]="false"\n            [receiveShadow]="true" heightSegments="10" widthSegments="10" [translateZ]="-0.1">\n            </atft-plane-mesh>\n              \x3c!--atft-axes-helper-- [size]=1000></atft-axes-helper--\x3e\n              <atft-hemisphere-light name="hemi-light" skyColor="#ffffff" groundColor="#ffffff"  [intensity]="0.8"\n                [translateX]="-20" [translateY]="-20" [translateZ]="100">\n              </atft-hemisphere-light>\n              \x3c!--<atft-directional-light color="#ffffff" [intensity]="0.7" [translateX]="20" [translateY]="-50" [translateZ]="50">\n              </atft-directional-light>--\x3e\n              <atft-point-light name="point-light" [intensity]="10000" [translateX]="60" [translateY]="-120" [translateZ]="50" [castShadow]="true"></atft-point-light>\n              ${content}\n          </atft-scene>\n      </atft-renderer-canvas>\n  </atft-map-controls>\n`}}]);