"use strict";(self.webpackChunkangular_template_for_threejs=self.webpackChunkangular_template_for_threejs||[]).push([[4745],{"./src/stories/effect/dashed-draw.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DashedDraw:()=>DashedDraw,__namedExportsOrder:()=>__namedExportsOrder,default:()=>dashed_draw_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),atft_module=__webpack_require__("./projects/atft/src/lib/atft.module.ts"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let StorybookDashedDrawComponent=class StorybookDashedDrawComponent{};var content;StorybookDashedDrawComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-storybook",template:(content='\n    <atft-text-mesh\n        atft-dashed-draw materialColor="#00EE00" dashColor="#00FF00"\n        [initialOpacity]="0.0" [targetOpacity]="0.1"\n        text="Hello world"\n    ></atft-text-mesh>\n\n    <atft-sphere-mesh\n        atft-dashed-draw materialColor="#0000FF" dashColor="#0000FF"\n        [targetOpacity]="0.1"\n        [radius]="10" [heightSegments]="10" [widthSegments]="10"\n        [translateY]="20"\n    ></atft-sphere-mesh>\n\n    <atft-cylinder-mesh\n        atft-dashed-draw materialColor="#0000FF" dashColor="#0000FF"\n        [initialOpacity]="0.5" [hideDash]="true"\n        [height]="20" [heightSegments]="20" [radialSegments]="20"\n        [radiusBottom]="2" [radiusTop]="5"\n        [translateY]="20" [translateX]="20"\n    ></atft-cylinder-mesh>\n  ',`\n<atft-orbit-controls style="height:100%" rotateSpeed=1 zoomSpeed=1.2>\n  <atft-renderer-canvas>\n      <atft-perspective-camera [zAxisUp]="true" positionX=50 [positionY]=-20 [positionZ]=50></atft-perspective-camera>\n      <atft-scene atft-stats-auto-show>\n          <atft-point-light [intensity]="30000" [distance]="100" [translateX]=90 [translateY]=90\n                            [translateZ]=90></atft-point-light>\n          <atft-point-light [intensity]="20000" [distance]="1000" [translateX]="-60" [translateY]="-60"\n                            [translateZ]="50"></atft-point-light>\n          ${content}\n      </atft-scene>\n  </atft-renderer-canvas>\n</atft-orbit-controls>\n`)})],StorybookDashedDrawComponent);const dashed_draw_stories={title:"Effects/Dashed Draw",component:StorybookDashedDrawComponent,decorators:[(0,dist.moduleMetadata)({imports:[atft_module.p]})]},DashedDraw={};DashedDraw.parameters={...DashedDraw.parameters,docs:{...DashedDraw.parameters?.docs,source:{originalSource:"{}",...DashedDraw.parameters?.docs?.source}}};const __namedExportsOrder=["DashedDraw"]}}]);