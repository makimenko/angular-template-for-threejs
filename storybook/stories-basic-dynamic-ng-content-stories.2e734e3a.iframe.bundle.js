"use strict";(self.webpackChunkangular_template_for_threejs=self.webpackChunkangular_template_for_threejs||[]).push([[378],{"./src/stories/basic/dynamic/ng-content.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NgContent:()=>NgContent,default:()=>__WEBPACK_DEFAULT_EXPORT__});var StorybookWrapperComponent_1,StorybookEmbeddedComponent_1,tslib__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_projects_atft_src_lib_atft_module__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./projects/atft/src/lib/atft.module.ts"),_projects_atft_src_lib_object_abstract_object_3d__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./projects/atft/src/lib/object/abstract-object-3d.ts"),_projects_atft_src_lib_object_helper__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./projects/atft/src/lib/object/helper/empty.component.ts"),_projects_atft_src_lib_renderer__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/atft/src/lib/renderer/renderer.service.ts"),_projects_atft_src_lib_util__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./projects/atft/src/lib/util/provide-parent.ts"),_projects_atft_src_lib_object_content_projection_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/atft/src/lib/object/content-projection.component.ts"),_projects_atft_src_lib_actor_data_center__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./projects/atft/src/lib/actor/data-center/atft-data-center-actor.module.ts");let StorybookWrapperComponent=class StorybookWrapperComponent extends _projects_atft_src_lib_object_content_projection_component__WEBPACK_IMPORTED_MODULE_1__.H{static#_=StorybookWrapperComponent_1=this;constructor(rendererService,parent){super(rendererService,parent),this.rendererService=rendererService,this.parent=parent,console.log("StorybookWrapperComponent.constructor",parent)}static#_2=this.ctorParameters=()=>[{type:_projects_atft_src_lib_renderer__WEBPACK_IMPORTED_MODULE_2__.y},{type:_projects_atft_src_lib_object_abstract_object_3d__WEBPACK_IMPORTED_MODULE_3__.l,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_4__.SkipSelf},{type:_angular_core__WEBPACK_IMPORTED_MODULE_4__.Optional}]}]};StorybookWrapperComponent=StorybookWrapperComponent_1=(0,tslib__WEBPACK_IMPORTED_MODULE_5__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({selector:"app-storybook-wrapper",providers:[(0,_projects_atft_src_lib_util__WEBPACK_IMPORTED_MODULE_6__.T)(StorybookWrapperComponent_1)],template:'\n    <atft-orbit-controls rotateSpeed=1 zoomSpeed=1.2>\n      <atft-renderer-canvas>\n        <atft-perspective-camera positionX=10 [positionY]=50 [positionZ]=50></atft-perspective-camera>\n        <atft-scene #contentProjection>\n          <atft-axes-helper [size]=200></atft-axes-helper>\n          <atft-grid-helper [size]=100 [divisions]=10></atft-grid-helper>\n          <atft-point-light [intensity]="0.9" [distance]="1000" [translateX]=50 [translateY]=50\n                            [translateZ]=50></atft-point-light>\n          \x3c!-- Why it\'s not working? --\x3e\n          <ng-content></ng-content>\n        </atft-scene>\n      </atft-renderer-canvas>\n    </atft-orbit-controls>\n  '})],StorybookWrapperComponent);let StorybookEmbeddedComponent=class StorybookEmbeddedComponent extends _projects_atft_src_lib_object_helper__WEBPACK_IMPORTED_MODULE_7__.T{static#_=StorybookEmbeddedComponent_1=this;constructor(rendererService,parent){super(rendererService,parent),this.rendererService=rendererService,this.parent=parent,console.log("StorybookEmbeddedComponent.constructor",parent)}static#_2=this.ctorParameters=()=>[{type:_projects_atft_src_lib_renderer__WEBPACK_IMPORTED_MODULE_2__.y},{type:_projects_atft_src_lib_object_abstract_object_3d__WEBPACK_IMPORTED_MODULE_3__.l,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_4__.SkipSelf},{type:_angular_core__WEBPACK_IMPORTED_MODULE_4__.Optional}]}]};StorybookEmbeddedComponent=StorybookEmbeddedComponent_1=(0,tslib__WEBPACK_IMPORTED_MODULE_5__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({selector:"app-storybook-embedded",providers:[(0,_projects_atft_src_lib_util__WEBPACK_IMPORTED_MODULE_6__.T)(StorybookEmbeddedComponent_1)],template:'\n    <app-storybook-wrapper>\n      <atft-cylinder-mesh [radiusTop]="2" [radiusBottom]="3" [height]="10" [radialSegments]="36" [heightSegments]="1"\n                          material="lamb" materialColor="#ff0000" [translateZ]="10">\n      </atft-cylinder-mesh>\n    </app-storybook-wrapper>\n  '})],StorybookEmbeddedComponent);const __WEBPACK_DEFAULT_EXPORT__={title:"Basic/Dynamic/Ng Content",component:StorybookEmbeddedComponent,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_projects_atft_src_lib_atft_module__WEBPACK_IMPORTED_MODULE_8__.p,_projects_atft_src_lib_actor_data_center__WEBPACK_IMPORTED_MODULE_9__.F],declarations:[StorybookEmbeddedComponent,StorybookWrapperComponent]})],argTypes:{}},NgContent={args:{}}}}]);