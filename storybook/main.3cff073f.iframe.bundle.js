(self.webpackChunkangular_template_for_threejs=self.webpackChunkangular_template_for_threejs||[]).push([[179],{"./.storybook/preview.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={parameters:{layout:"fullscreen",actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},options:{storySort:{method:"alphabetical"}}}}},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("@storybook/channels"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");const pipeline=x=>x(),importers=[function(){var _ref=(0,asyncToGenerator.Z)((function*(path){if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$")("./"+pathRemainder)}));return function(_x){return _ref.apply(this,arguments)}}(),function(){var _ref2=(0,asyncToGenerator.Z)((function*(path){if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|mjs|ts|tsx))$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$")("./"+pathRemainder)}));return function(_x2){return _ref2.apply(this,arguments)}}()];function _importFn(){return(_importFn=(0,asyncToGenerator.Z)((function*(path){for(let i=0;i<importers.length;i++){const moduleExports=yield pipeline((()=>importers[i](path)));if(moduleExports)return moduleExports}}))).apply(this,arguments)}const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb;window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel,window.__STORYBOOK_CLIENT_API__=new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({storyStore:preview.storyStore}),preview.initialize({importFn:function importFn(_x3){return _importFn.apply(this,arguments)},getProjectAnnotations:()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/angular/dist/client/preview-prod.js"),__webpack_require__("./node_modules/@storybook/angular/dist/client/docs/config.js"),__webpack_require__("./node_modules/@storybook/angular/dist/client/config.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/preview.mjs"),__webpack_require__("./.storybook/preview.ts")])})},"./src/styles.scss?ngGlobalStyle":()=>{},"./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$":module=>{function webpackEmptyAsyncContext(req){return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}))}webpackEmptyAsyncContext.keys=()=>[],webpackEmptyAsyncContext.resolve=webpackEmptyAsyncContext,webpackEmptyAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$",module.exports=webpackEmptyAsyncContext},"./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./stories/all-in-one/infrastructure.stories":["./src/stories/all-in-one/infrastructure.stories.ts",3585,877,2336,6033,1829,73],"./stories/all-in-one/infrastructure.stories.ts":["./src/stories/all-in-one/infrastructure.stories.ts",3585,877,2336,6033,1829,73],"./stories/all-in-one/virtual-city.stories":["./src/stories/all-in-one/virtual-city.stories.ts",3585,877,2336,6033,1829,3823],"./stories/all-in-one/virtual-city.stories.ts":["./src/stories/all-in-one/virtual-city.stories.ts",3585,877,2336,6033,1829,3823],"./stories/animation/animate-loop.stories":["./src/stories/animation/animate-loop.stories.ts",3585,6033,654],"./stories/animation/animate-loop.stories.ts":["./src/stories/animation/animate-loop.stories.ts",3585,6033,654],"./stories/animation/animate-mixer.stories":["./src/stories/animation/animate-mixer.stories.ts",3585,6033,6480],"./stories/animation/animate-mixer.stories.ts":["./src/stories/animation/animate-mixer.stories.ts",3585,6033,6480],"./stories/animation/animate-reactive-grid.stories":["./src/stories/animation/animate-reactive-grid.stories.ts",3585,6033,876],"./stories/animation/animate-reactive-grid.stories.ts":["./src/stories/animation/animate-reactive-grid.stories.ts",3585,6033,876],"./stories/animation/connector/connector-line-animated.stories":["./src/stories/animation/connector/connector-line-animated.stories.ts",3585,6033,1465],"./stories/animation/connector/connector-line-animated.stories.ts":["./src/stories/animation/connector/connector-line-animated.stories.ts",3585,6033,1465],"./stories/animation/connector/connector-line-bloom.stories":["./src/stories/animation/connector/connector-line-bloom.stories.ts",3585,6033,1732],"./stories/animation/connector/connector-line-bloom.stories.ts":["./src/stories/animation/connector/connector-line-bloom.stories.ts",3585,6033,1732],"./stories/animation/connector/connector-line.stories":["./src/stories/animation/connector/connector-line.stories.ts",3585,6033,5827],"./stories/animation/connector/connector-line.stories.ts":["./src/stories/animation/connector/connector-line.stories.ts",3585,6033,5827],"./stories/basic/dynamic/editor.stories":["./src/stories/basic/dynamic/editor.stories.ts",3585,877,2336,6033,1829,4228],"./stories/basic/dynamic/editor.stories.ts":["./src/stories/basic/dynamic/editor.stories.ts",3585,877,2336,6033,1829,4228],"./stories/basic/dynamic/for-loop.stories":["./src/stories/basic/dynamic/for-loop.stories.ts",3585,877,2336,6033,1829,3315],"./stories/basic/dynamic/for-loop.stories.ts":["./src/stories/basic/dynamic/for-loop.stories.ts",3585,877,2336,6033,1829,3315],"./stories/basic/dynamic/ng-content.stories":["./src/stories/basic/dynamic/ng-content.stories.ts",3585,877,2336,6033,1829,378],"./stories/basic/dynamic/ng-content.stories.ts":["./src/stories/basic/dynamic/ng-content.stories.ts",3585,877,2336,6033,1829,378],"./stories/basic/dynamic/routing.stories":["./src/stories/basic/dynamic/routing.stories.ts",3585,7781,6033,3415],"./stories/basic/dynamic/routing.stories.ts":["./src/stories/basic/dynamic/routing.stories.ts",3585,7781,6033,3415],"./stories/basic/loader/loader-obj.stories":["./src/stories/basic/loader/loader-obj.stories.ts",3585,6033,5892],"./stories/basic/loader/loader-obj.stories.ts":["./src/stories/basic/loader/loader-obj.stories.ts",3585,6033,5892],"./stories/basic/loader/loader-object.stories":["./src/stories/basic/loader/loader-object.stories.ts",3585,6033,4448],"./stories/basic/loader/loader-object.stories.ts":["./src/stories/basic/loader/loader-object.stories.ts",3585,6033,4448],"./stories/basic/loader/loader-stl.stories":["./src/stories/basic/loader/loader-stl.stories.ts",3585,6033,7559],"./stories/basic/loader/loader-stl.stories.ts":["./src/stories/basic/loader/loader-stl.stories.ts",3585,6033,7559],"./stories/basic/loader/loader-svg.stories":["./src/stories/basic/loader/loader-svg.stories.ts",3585,6033,1388],"./stories/basic/loader/loader-svg.stories.ts":["./src/stories/basic/loader/loader-svg.stories.ts",3585,6033,1388],"./stories/basic/mesh/mesh-box.stories":["./src/stories/basic/mesh/mesh-box.stories.ts",3585,6033,5053],"./stories/basic/mesh/mesh-box.stories.ts":["./src/stories/basic/mesh/mesh-box.stories.ts",3585,6033,5053],"./stories/basic/mesh/mesh-server.stories":["./src/stories/basic/mesh/mesh-server.stories.ts",3585,877,2336,6033,1829,8787],"./stories/basic/mesh/mesh-server.stories.ts":["./src/stories/basic/mesh/mesh-server.stories.ts",3585,877,2336,6033,1829,8787],"./stories/basic/mesh/mesh-text.stories":["./src/stories/basic/mesh/mesh-text.stories.ts",3585,6033,4626],"./stories/basic/mesh/mesh-text.stories.ts":["./src/stories/basic/mesh/mesh-text.stories.ts",3585,6033,4626],"./stories/basic/mesh/mesh-video.stories":["./src/stories/basic/mesh/mesh-video.stories.ts",3585,6033,3021],"./stories/basic/mesh/mesh-video.stories.ts":["./src/stories/basic/mesh/mesh-video.stories.ts",3585,6033,3021],"./stories/basic/object/object-modification.stories":["./src/stories/basic/object/object-modification.stories.ts",3585,6033,7286],"./stories/basic/object/object-modification.stories.ts":["./src/stories/basic/object/object-modification.stories.ts",3585,6033,7286],"./stories/basic/object/object-raycaster.stories":["./src/stories/basic/object/object-raycaster.stories.ts",3585,6033,1632],"./stories/basic/object/object-raycaster.stories.ts":["./src/stories/basic/object/object-raycaster.stories.ts",3585,6033,1632],"./stories/dagre-layout/dagre-composition.stories":["./src/stories/dagre-layout/dagre-composition.stories.ts",3585,877,2336,6033,1829,6716],"./stories/dagre-layout/dagre-composition.stories.ts":["./src/stories/dagre-layout/dagre-composition.stories.ts",3585,877,2336,6033,1829,6716],"./stories/dagre-layout/dagre-dynamic.stories":["./src/stories/dagre-layout/dagre-dynamic.stories.ts",3585,877,2336,6033,1829,7379],"./stories/dagre-layout/dagre-dynamic.stories.ts":["./src/stories/dagre-layout/dagre-dynamic.stories.ts",3585,877,2336,6033,1829,7379],"./stories/dagre-layout/dagre-icons.stories":["./src/stories/dagre-layout/dagre-icons.stories.ts",3585,877,2336,6033,1829,4100],"./stories/dagre-layout/dagre-icons.stories.ts":["./src/stories/dagre-layout/dagre-icons.stories.ts",3585,877,2336,6033,1829,4100],"./stories/dagre-layout/dagre-loop.stories":["./src/stories/dagre-layout/dagre-loop.stories.ts",3585,877,2336,6033,1829,3702],"./stories/dagre-layout/dagre-loop.stories.ts":["./src/stories/dagre-layout/dagre-loop.stories.ts",3585,877,2336,6033,1829,3702],"./stories/dagre-layout/dagre-route.stories":["./src/stories/dagre-layout/dagre-route.stories.ts",3585,877,2336,7781,6033,1829,9994],"./stories/dagre-layout/dagre-route.stories.ts":["./src/stories/dagre-layout/dagre-route.stories.ts",3585,877,2336,7781,6033,1829,9994],"./stories/dagre-layout/dagre-simple-layout.stories":["./src/stories/dagre-layout/dagre-simple-layout.stories.ts",3585,877,2336,6033,1829,2841],"./stories/dagre-layout/dagre-simple-layout.stories.ts":["./src/stories/dagre-layout/dagre-simple-layout.stories.ts",3585,877,2336,6033,1829,2841],"./stories/effect/blur.stories":["./src/stories/effect/blur.stories.ts",3585,877,2336,6033,1829,3430],"./stories/effect/blur.stories.ts":["./src/stories/effect/blur.stories.ts",3585,877,2336,6033,1829,3430],"./stories/effect/dashed-draw.stories":["./src/stories/effect/dashed-draw.stories.ts",3585,6033,4745],"./stories/effect/dashed-draw.stories.ts":["./src/stories/effect/dashed-draw.stories.ts",3585,6033,4745],"./stories/effect/depth-of-field.stories":["./src/stories/effect/depth-of-field.stories.ts",3585,877,2336,6033,1829,3376],"./stories/effect/depth-of-field.stories.ts":["./src/stories/effect/depth-of-field.stories.ts",3585,877,2336,6033,1829,3376],"./stories/effect/dot-screen.stories":["./src/stories/effect/dot-screen.stories.ts",3585,877,2336,6033,1829,7783],"./stories/effect/dot-screen.stories.ts":["./src/stories/effect/dot-screen.stories.ts",3585,877,2336,6033,1829,7783],"./stories/effect/fog.stories":["./src/stories/effect/fog.stories.ts",3585,877,2336,6033,1829,2628],"./stories/effect/fog.stories.ts":["./src/stories/effect/fog.stories.ts",3585,877,2336,6033,1829,2628],"./stories/ux/intro.stories":["./src/stories/ux/intro.stories.ts",3585,6033,5229],"./stories/ux/intro.stories.ts":["./src/stories/ux/intro.stories.ts",3585,6033,5229],"./stories/ux/loader.stories":["./src/stories/ux/loader.stories.ts",3585,6033,4771],"./stories/ux/loader.stories.ts":["./src/stories/ux/loader.stories.ts",3585,6033,4771],"./stories/ux/text.stories":["./src/stories/ux/text.stories.ts",3585,6033,5457],"./stories/ux/text.stories.ts":["./src/stories/ux/text.stories.ts",3585,6033,5457]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"@storybook/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"@storybook/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[7021],(()=>(__webpack_exec__("./storybook-config-entry.js"),__webpack_exec__("./node_modules/zone.js/fesm2015/zone.js"),__webpack_exec__("./node_modules/@angular/compiler/fesm2022/compiler.mjs"),__webpack_exec__("./src/styles.scss?ngGlobalStyle"))));__webpack_require__.O()}]);