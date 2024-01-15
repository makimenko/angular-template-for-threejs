"use strict";(self.webpackChunkangular_template_for_threejs=self.webpackChunkangular_template_for_threejs||[]).push([[6716],{"./src/stories/scene-wrapper/world-scene-wrapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>worldSceneWrapper});const worldSceneWrapper=content=>`\n  <atft-map-controls style="height:100%" rotateSpeed=1 zoomSpeed=1.2 [enableDamping]="false" [autoRotate]="false">\n      <atft-renderer-canvas>\n          <atft-perspective-camera [zAxisUp]="true" positionX=40 [positionY]=-100\n                [positionZ]=50 atft-raycaster-camera atft-raycaster-enable>\n          </atft-perspective-camera>\n          <atft-scene name="scene" background="#a0a0a0">\n          <atft-fog color="#a0a0a0" [near]="80" [far]="500"></atft-fog>\n          <atft-plane-mesh name="ground" [height]="2000" [width]="2000" materialColor="#999999" [depthWrite]="true" [castShadow]="false"\n            [receiveShadow]="true" heightSegments="10" widthSegments="10" [translateZ]="-0.1">\n            </atft-plane-mesh>\n              \x3c!--atft-axes-helper-- [size]=1000></atft-axes-helper--\x3e\n              <atft-hemisphere-light name="hemi-light" skyColor="#ffffff" groundColor="#ffffff"  [intensity]="0.8"\n                [translateX]="-20" [translateY]="-20" [translateZ]="100">\n              </atft-hemisphere-light>\n              \x3c!--<atft-directional-light color="#ffffff" [intensity]="0.7" [translateX]="20" [translateY]="-50" [translateZ]="50">\n              </atft-directional-light>--\x3e\n              <atft-point-light name="point-light" [intensity]="10000" [translateX]="60" [translateY]="-120" [translateZ]="50" [castShadow]="true"></atft-point-light>\n              ${content}\n          </atft-scene>\n      </atft-renderer-canvas>\n  </atft-map-controls>\n`},"./src/stories/dagre-layout/dagre-composition.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Sample:()=>Sample,Sample2:()=>Sample2,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_projects_atft_src_lib_actor_data_center__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./projects/atft/src/lib/actor/data-center/atft-data-center-actor.module.ts"),_projects_atft_src_lib_atft_module__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./projects/atft/src/lib/atft.module.ts"),_scene_wrapper_world_scene_wrapper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/stories/scene-wrapper/world-scene-wrapper.ts"),_projects_atft_src_lib_animation__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/atft/src/lib/animation/animation.service.ts");let StorybookDagreCompositionComponent=class StorybookDagreCompositionComponent{constructor(animationService){this.animationService=animationService,this.animationService.start()}static#_=this.ctorParameters=()=>[{type:_projects_atft_src_lib_animation__WEBPACK_IMPORTED_MODULE_1__.Y}]};StorybookDagreCompositionComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({selector:"app-storybook",template:(0,_scene_wrapper_world_scene_wrapper__WEBPACK_IMPORTED_MODULE_4__.A)('\n    <atft-dagre-layout [align]="align" [rankdir]="rankdir" [ranker]="ranker"\n      [nodesep]="nodesep" [edgesep]="edgesep" [ranksep]="ranksep"\n      [marginx]="marginx" [marginy]="marginy">\n\n      <atft-dagre-composition name="presentation" label="Presentation tier"></atft-dagre-composition>\n      <atft-dagre-composition name="application" label="Application tier"></atft-dagre-composition>\n      <atft-dagre-composition name="data" label="Data tier" border="frame"></atft-dagre-composition>\n\n      <atft-dagre-node name="spa" composition="presentation">\n        <atft-server-compact-actor label="spa"></atft-server-compact-actor>\n      </atft-dagre-node>\n\n      <atft-dagre-node name="api" composition="application">\n        <atft-server-stand-actor label="api" icon="video_settings"\n        ></atft-server-stand-actor>\n      </atft-dagre-node>\n\n      <atft-dagre-node name="db1" composition="data">\n        <atft-server-barrel-actor label="PostgreSQL"></atft-server-barrel-actor>\n      </atft-dagre-node>\n\n      <atft-dagre-node name="db2" composition="data">\n        <atft-server-barrel-actor label="MongoDB"></atft-server-barrel-actor>\n      </atft-dagre-node>\n\n      <atft-dagre-edge from="spa" to="api"></atft-dagre-edge>\n      <atft-dagre-edge from="api" to="db1"></atft-dagre-edge>\n      <atft-dagre-edge from="api" to="db2"></atft-dagre-edge>\n\n    </atft-dagre-layout>\n\n')})],StorybookDagreCompositionComponent);const __WEBPACK_DEFAULT_EXPORT__={title:"Dagre Layout/Composition",component:StorybookDagreCompositionComponent,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_projects_atft_src_lib_atft_module__WEBPACK_IMPORTED_MODULE_5__.p,_projects_atft_src_lib_actor_data_center__WEBPACK_IMPORTED_MODULE_6__.F]})],argTypes:{align:{description:"Alignment for rank nodes. Can be UL, UR, DL, or DR, where U = up, D = down, L = left, and R = right.",options:["UL","UR","DL","DR"],control:{type:"select"}},rankdir:{description:"Direction for rank nodes. Can be TB, BT, LR, or RL, where V = top, B = bottom, L = left, and R = right.",options:["TB","BT","LR","RL"],control:{type:"select"}},ranker:{description:"Type of algorithm to assigns a rank to each node in the input graph. Possible values: network-simplex, tight-tree or longest-path",options:["network-simplex","tight-tree","longest-path"],control:{type:"select"}}}},Sample={args:{align:"DR",rankdir:"TB",nodesep:20,edgesep:1,ranksep:20,marginx:0,marginy:0,ranker:"network-simplex"}},Sample2={args:{align:"UL",rankdir:"LR",nodesep:40,edgesep:1,ranksep:20,marginx:0,marginy:0,ranker:"network-simplex"}};Sample.parameters={...Sample.parameters,docs:{...Sample.parameters?.docs,source:{originalSource:"{\n  args: {\n    align: 'DR',\n    rankdir: 'TB',\n    nodesep: 20,\n    edgesep: 1,\n    ranksep: 20,\n    marginx: 0,\n    marginy: 0,\n    ranker: 'network-simplex'\n  }\n}",...Sample.parameters?.docs?.source}}},Sample2.parameters={...Sample2.parameters,docs:{...Sample2.parameters?.docs,source:{originalSource:"{\n  args: {\n    align: 'UL',\n    rankdir: 'LR',\n    nodesep: 40,\n    edgesep: 1,\n    ranksep: 20,\n    marginx: 0,\n    marginy: 0,\n    ranker: 'network-simplex'\n  }\n}",...Sample2.parameters?.docs?.source}}};const __namedExportsOrder=["Sample","Sample2"]}}]);