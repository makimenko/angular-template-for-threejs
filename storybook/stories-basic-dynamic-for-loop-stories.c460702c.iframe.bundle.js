"use strict";(self.webpackChunkangular_template_for_threejs=self.webpackChunkangular_template_for_threejs||[]).push([[3315],{"./src/stories/scene-wrapper/axes-scene-wrapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>axesSceneWrapper});const axesSceneWrapper=content=>`\n<atft-orbit-controls style="height:100%" rotateSpeed=1 zoomSpeed=1.2>\n  <atft-renderer-canvas>\n      <atft-perspective-camera [zAxisUp]="true" positionX=50 [positionY]=-20 [positionZ]=50></atft-perspective-camera>\n      <atft-scene atft-stats-auto-show>\n          <atft-axes-helper [size]=200></atft-axes-helper>\n          <atft-grid-helper [size]=100 [divisions]=10 [rotateX]="90 | deg2rad"></atft-grid-helper>\n          <atft-point-light [intensity]=10000 [distance]="1000" [translateX]=90 [translateY]=90\n                            [translateZ]=90></atft-point-light>\n          <atft-point-light [intensity]="50000" [distance]="1000" [translateX]="-60" [translateY]="-60"\n                            [translateZ]="50"></atft-point-light>\n          ${content}\n      </atft-scene>\n  </atft-renderer-canvas>\n</atft-orbit-controls>\n`},"./src/stories/basic/dynamic/for-loop.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ForLoop:()=>ForLoop,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_projects_atft_src_lib_atft_module__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./projects/atft/src/lib/atft.module.ts"),_scene_wrapper_axes_scene_wrapper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/scene-wrapper/axes-scene-wrapper.ts"),_projects_atft_src_lib_actor_data_center__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./projects/atft/src/lib/actor/data-center/atft-data-center-actor.module.ts");let StorybookDynamicComponent=class StorybookDynamicComponent{fakeArray(length){if(length>=0){const arr=new Array(length);for(let i=0;i<arr.length;i++)arr[i]=10*i;return arr}return[]}};StorybookDynamicComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({selector:"app-storybook",template:(0,_scene_wrapper_axes_scene_wrapper__WEBPACK_IMPORTED_MODULE_3__.P)('\n      <atft-empty name="emptyObj">\n        <div>\n            <atft-sphere-mesh *ngFor="let x of fakeArray(numObjects)" [radius]="4" [translateY]="x" name="dynamicObj"\n                widthSegments="64" heightSegments="64">\n            </atft-sphere-mesh>\n        </div>\n      </atft-empty>\n  ')})],StorybookDynamicComponent);const __WEBPACK_DEFAULT_EXPORT__={title:"Basic/Dynamic/For Loop",component:StorybookDynamicComponent,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_projects_atft_src_lib_atft_module__WEBPACK_IMPORTED_MODULE_4__.p,_projects_atft_src_lib_actor_data_center__WEBPACK_IMPORTED_MODULE_5__.F]})],argTypes:{numObjects:{control:{type:"range",min:0,max:5,step:1}}}},ForLoop={args:{numObjects:2}};ForLoop.parameters={...ForLoop.parameters,docs:{...ForLoop.parameters?.docs,source:{originalSource:"{\n  args: {\n    numObjects: 2\n  }\n}",...ForLoop.parameters?.docs?.source}}};const __namedExportsOrder=["ForLoop"]}}]);