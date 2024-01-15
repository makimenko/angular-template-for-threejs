"use strict";(self.webpackChunkangular_template_for_threejs=self.webpackChunkangular_template_for_threejs||[]).push([[876],{"./src/stories/scene-wrapper/world-scene-wrapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>worldSceneWrapper});const worldSceneWrapper=content=>`\n  <atft-map-controls style="height:100%" rotateSpeed=1 zoomSpeed=1.2 [enableDamping]="false" [autoRotate]="false">\n      <atft-renderer-canvas>\n          <atft-perspective-camera [zAxisUp]="true" positionX=40 [positionY]=-100\n                [positionZ]=50 atft-raycaster-camera atft-raycaster-enable>\n          </atft-perspective-camera>\n          <atft-scene name="scene" background="#a0a0a0">\n          <atft-fog color="#a0a0a0" [near]="80" [far]="500"></atft-fog>\n          <atft-plane-mesh name="ground" [height]="2000" [width]="2000" materialColor="#999999" [depthWrite]="true" [castShadow]="false"\n            [receiveShadow]="true" heightSegments="10" widthSegments="10" [translateZ]="-0.1">\n            </atft-plane-mesh>\n              \x3c!--atft-axes-helper-- [size]=1000></atft-axes-helper--\x3e\n              <atft-hemisphere-light name="hemi-light" skyColor="#ffffff" groundColor="#ffffff"  [intensity]="0.8"\n                [translateX]="-20" [translateY]="-20" [translateZ]="100">\n              </atft-hemisphere-light>\n              \x3c!--<atft-directional-light color="#ffffff" [intensity]="0.7" [translateX]="20" [translateY]="-50" [translateZ]="50">\n              </atft-directional-light>--\x3e\n              <atft-point-light name="point-light" [intensity]="10000" [translateX]="60" [translateY]="-120" [translateZ]="50" [castShadow]="true"></atft-point-light>\n              ${content}\n          </atft-scene>\n      </atft-renderer-canvas>\n  </atft-map-controls>\n`},"./src/stories/animation/animate-reactive-grid.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var tslib__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_projects_atft_src_lib_atft_module__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./projects/atft/src/lib/atft.module.ts"),_angular_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_projects_atft_src_lib_object_mesh_box_mesh_component__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./projects/atft/src/lib/object/mesh/box-mesh.component.ts"),_projects_atft_src_lib_animation_animation_service__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/atft/src/lib/animation/animation.service.ts"),three__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/three/build/three.module.js"),_scene_wrapper_world_scene_wrapper__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/stories/scene-wrapper/world-scene-wrapper.ts");let StorybookReactiveGridComponent=class StorybookReactiveGridComponent{constructor(animationService){this.animationService=animationService,this.mixers=new Map,this.clock=new three__WEBPACK_IMPORTED_MODULE_1__.SUY;const mouseOverKeyFrame=new three__WEBPACK_IMPORTED_MODULE_1__.yC1(".position",[0,.2,.5],[0,0,0,0,0,1.5,0,0,1.4],three__WEBPACK_IMPORTED_MODULE_1__.pIN);this.mouseOverClip=new three__WEBPACK_IMPORTED_MODULE_1__.m7l("Mouse over",.5,[mouseOverKeyFrame])}mouseEnter(event){const boxComponent=event.component;if(boxComponent){const mixer=this.mixers.get(boxComponent.name);if(!mixer)return;const existing=mixer.existingAction(this.mouseOverClip);if(existing)existing.isRunning()||existing.reset();else{const clipAction=mixer.clipAction(this.mouseOverClip);clipAction.loop=three__WEBPACK_IMPORTED_MODULE_1__.uEv,clipAction.repetitions=2,clipAction.play()}}}mouseExit(){}createMixers(){this.boxes.forEach((i=>this.mixers.set(i.name,new three__WEBPACK_IMPORTED_MODULE_1__.Xcj(i.getObject()))))}playAppearForAll(){this.mixers.forEach((i=>{const duration=Math.random(),appearKeyFrame=new three__WEBPACK_IMPORTED_MODULE_1__.yC1(".position",[0,duration],[0,0,-5,0,0,0],three__WEBPACK_IMPORTED_MODULE_1__.NMF),appearClip=new three__WEBPACK_IMPORTED_MODULE_1__.m7l("Appear",duration,[appearKeyFrame]),clipAction=i.clipAction(appearClip);clipAction.loop=three__WEBPACK_IMPORTED_MODULE_1__.jAl,clipAction.play()}))}ngAfterViewInit(){this.createMixers(),this.playAppearForAll(),this.animate=this.animate.bind(this),this.animation=this.animationService.animate.subscribe(this.animate),this.animationService.start()}animate(){if(this.mixers&&this.mixers.size>0){const delta=this.clock.getDelta();this.mixers.forEach((i=>{i.update(delta)}))}}ngOnDestroy(){this.animation?.unsubscribe()}static#_=this.ctorParameters=()=>[{type:_projects_atft_src_lib_animation_animation_service__WEBPACK_IMPORTED_MODULE_2__.Y}];static#_2=this.propDecorators={boxes:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChildren,args:[_projects_atft_src_lib_object_mesh_box_mesh_component__WEBPACK_IMPORTED_MODULE_4__.T]}]}};StorybookReactiveGridComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_5__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({selector:"app-storybook",template:(0,_scene_wrapper_world_scene_wrapper__WEBPACK_IMPORTED_MODULE_6__.A)('\n  <div *ngFor="let item of [].constructor(10); let x = index">\n    <div *ngFor="let item of [].constructor(10); let y = index">\n        <atft-empty [translateX]="(x*10.3)-50" [translateY]="(y*10.3)-50" [translateZ]="5">\n            <atft-box-mesh [height]="10" [width]="10" [depth]="0.2" materialColor="#dadaff"\n            atft-raycaster-group (mouseEnter)="mouseEnter($event)" (mouseExit)="mouseExit($event)"\n            [name]="\'obj\'+x+\'_\'+y">\n            </atft-box-mesh>\n        </atft-empty>\n    </div>\n  </div>\n  ')})],StorybookReactiveGridComponent);const __WEBPACK_DEFAULT_EXPORT__={title:"Animate/Reactive Grid",component:StorybookReactiveGridComponent,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_projects_atft_src_lib_atft_module__WEBPACK_IMPORTED_MODULE_7__.p]})],argTypes:{}},Default={args:{}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);