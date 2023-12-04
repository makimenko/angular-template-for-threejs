"use strict";(self.webpackChunkangular_template_for_threejs=self.webpackChunkangular_template_for_threejs||[]).push([[3415],{"./src/stories/basic/dynamic/routing.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Routing:()=>Routing,default:()=>__WEBPACK_DEFAULT_EXPORT__});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_projects_atft_src_lib_atft_module__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./projects/atft/src/lib/atft.module.ts"),_angular_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_scene_wrapper_world_scene_wrapper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/stories/scene-wrapper/world-scene-wrapper.ts"),_projects_atft_src_lib_object_helper__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./projects/atft/src/lib/object/helper/empty.component.ts"),_projects_atft_src_lib_util__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./projects/atft/src/lib/util/provide-parent.ts"),_projects_atft_src_lib_renderer__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./projects/atft/src/lib/renderer/renderer.service.ts"),_projects_atft_src_lib_object__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./projects/atft/src/lib/object/abstract-object-3d.ts");let MainComponent=class MainComponent{constructor(router){this.router=router}chooseFirst(){console.log("Choose first"),this.router.navigate(["first"])}chooseSecond(){console.log("Choose second"),this.router.navigate(["second"])}static#_=this.ctorParameters=()=>[{type:_angular_router__WEBPACK_IMPORTED_MODULE_1__.F0}]};MainComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({template:(0,_scene_wrapper_world_scene_wrapper__WEBPACK_IMPORTED_MODULE_4__.A)('\n    <atft-empty name="main">\n      <atft-empty name="selector">\n        <atft-box-mesh name="box1" atft-raycaster-group (click)="chooseFirst()" [height]="20" [width]="20" [depth]="20" [translateZ]="10">\n        </atft-box-mesh>\n        <atft-box-mesh name="box2" atft-raycaster-group (click)="chooseSecond()" [height]="20" [width]="20" [depth]="20" [translateZ]="10" [translateX]="30">\n        </atft-box-mesh>\n      </atft-empty>\n      <router-outlet></router-outlet>\n    </atft-empty>\n')})],MainComponent);let FirstPageComponent=class FirstPageComponent extends _projects_atft_src_lib_object_helper__WEBPACK_IMPORTED_MODULE_5__.T{constructor(rendererService,parent){super(rendererService,parent),this.rendererService=rendererService,this.parent=parent,console.log("FirstPageComponent.constructor",parent)}static#_=this.ctorParameters=()=>[{type:_projects_atft_src_lib_renderer__WEBPACK_IMPORTED_MODULE_6__.y},{type:_projects_atft_src_lib_object__WEBPACK_IMPORTED_MODULE_7__.l,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_3__.SkipSelf},{type:_angular_core__WEBPACK_IMPORTED_MODULE_3__.Optional}]}]};FirstPageComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({selector:"app-first-page",providers:[(0,_projects_atft_src_lib_util__WEBPACK_IMPORTED_MODULE_8__.T)(FirstPageComponent)],template:'\n    <atft-box-mesh name="first-box" [height]="10" [width]="10" [depth]="10" [translateZ]="30">\n    </atft-box-mesh>\n  '})],FirstPageComponent);let SecondPageComponent=class SecondPageComponent extends _projects_atft_src_lib_object_helper__WEBPACK_IMPORTED_MODULE_5__.T{constructor(rendererService,parent){super(rendererService,parent),this.rendererService=rendererService,this.parent=parent,console.log("SecondPageComponent.constructor",parent)}static#_=this.ctorParameters=()=>[{type:_projects_atft_src_lib_renderer__WEBPACK_IMPORTED_MODULE_6__.y},{type:_projects_atft_src_lib_object__WEBPACK_IMPORTED_MODULE_7__.l,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_3__.SkipSelf},{type:_angular_core__WEBPACK_IMPORTED_MODULE_3__.Optional}]}]};SecondPageComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({selector:"app-second-page",providers:[(0,_projects_atft_src_lib_util__WEBPACK_IMPORTED_MODULE_8__.T)(SecondPageComponent)],template:'\n    <atft-box-mesh name="second-box" [height]="10" [width]="10" [depth]="10" [translateZ]="30" [translateX]="30">\n    </atft-box-mesh>\n  '})],SecondPageComponent);const routes=[{path:"",redirectTo:"/first",pathMatch:"full"},{path:"first",component:FirstPageComponent},{path:"second",component:SecondPageComponent},{path:"**",redirectTo:"first"}];let StoryRoutingModule=class StoryRoutingModule{};StoryRoutingModule=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({imports:[_angular_router__WEBPACK_IMPORTED_MODULE_1__.Bz.forChild(routes)],exports:[_angular_router__WEBPACK_IMPORTED_MODULE_1__.Bz]})],StoryRoutingModule);let StoryModule=class StoryModule{};StoryModule=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({declarations:[MainComponent,FirstPageComponent,SecondPageComponent],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,StoryRoutingModule,_projects_atft_src_lib_atft_module__WEBPACK_IMPORTED_MODULE_10__.p],providers:[{provide:_angular_common__WEBPACK_IMPORTED_MODULE_9__.APP_BASE_HREF,useValue:"/"}],bootstrap:[MainComponent]})],StoryModule);const __WEBPACK_DEFAULT_EXPORT__={title:"Basic/Dynamic/Routing",component:MainComponent,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[StoryModule]})],argTypes:{}},Routing={args:{}}},"./src/stories/scene-wrapper/world-scene-wrapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>worldSceneWrapper});const worldSceneWrapper=content=>`\n  <atft-map-controls style="height:100%" rotateSpeed=1 zoomSpeed=1.2 [enableDamping]="false" [autoRotate]="false">\n      <atft-renderer-canvas>\n          <atft-perspective-camera [zAxisUp]="true" positionX=40 [positionY]=-100\n                [positionZ]=50 atft-raycaster-camera atft-raycaster-enable>\n          </atft-perspective-camera>\n          <atft-scene name="scene" background="#a0a0a0">\n          <atft-fog color="#a0a0a0" [near]="80" [far]="500"></atft-fog>\n          <atft-plane-mesh name="ground" [height]="2000" [width]="2000" materialColor="#999999" [depthWrite]="true" [castShadow]="false"\n            [receiveShadow]="true" heightSegments="10" widthSegments="10" [translateZ]="-0.1">\n            </atft-plane-mesh>\n              \x3c!--atft-axes-helper-- [size]=1000></atft-axes-helper--\x3e\n              <atft-hemisphere-light name="hemi-light" skyColor="#ffffff" groundColor="#ffffff"  [intensity]="0.8"\n                [translateX]="-20" [translateY]="-20" [translateZ]="100">\n              </atft-hemisphere-light>\n              \x3c!--<atft-directional-light color="#ffffff" [intensity]="0.7" [translateX]="20" [translateY]="-50" [translateZ]="50">\n              </atft-directional-light>--\x3e\n              <atft-point-light name="point-light" [intensity]="10000" [translateX]="60" [translateY]="-120" [translateZ]="50" [castShadow]="true"></atft-point-light>\n              ${content}\n          </atft-scene>\n      </atft-renderer-canvas>\n  </atft-map-controls>\n`}}]);