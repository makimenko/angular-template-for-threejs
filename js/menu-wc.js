'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">angular-template-for-threejs documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-a5833888eaefb4cf712e3e65492f40a3"' : 'data-target="#xs-components-links-module-AppModule-a5833888eaefb4cf712e3e65492f40a3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-a5833888eaefb4cf712e3e65492f40a3"' :
                                            'id="xs-components-links-module-AppModule-a5833888eaefb4cf712e3e65492f40a3"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ThreeExamplesModule.html" data-type="entity-link">ThreeExamplesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ThreeExamplesModule-a5e2d82b5ff46271b92ed90aba037dc3"' : 'data-target="#xs-components-links-module-ThreeExamplesModule-a5e2d82b5ff46271b92ed90aba037dc3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ThreeExamplesModule-a5e2d82b5ff46271b92ed90aba037dc3"' :
                                            'id="xs-components-links-module-ThreeExamplesModule-a5e2d82b5ff46271b92ed90aba037dc3"' }>
                                            <li class="link">
                                                <a href="components/WebGLRendererComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WebGLRendererComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-ThreeExamplesModule-a5e2d82b5ff46271b92ed90aba037dc3"' : 'data-target="#xs-directives-links-module-ThreeExamplesModule-a5e2d82b5ff46271b92ed90aba037dc3"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-ThreeExamplesModule-a5e2d82b5ff46271b92ed90aba037dc3"' :
                                        'id="xs-directives-links-module-ThreeExamplesModule-a5e2d82b5ff46271b92ed90aba037dc3"' }>
                                        <li class="link">
                                            <a href="directives/AxesHelperDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AxesHelperDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ColladaLoaderDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ColladaLoaderDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/CylindermeshDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">CylindermeshDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/EmptyDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmptyDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/GridHelperDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">GridHelperDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ObjLoaderDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ObjLoaderDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ObjectLoaderDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ObjectLoaderDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/OrbitControlsDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrbitControlsDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/PerspectiveCameraDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">PerspectiveCameraDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/PointLightDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">PointLightDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/SceneDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">SceneDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/SpheremeshDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">SpheremeshDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/TorusmeshDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">TorusmeshDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-ThreeExamplesModule-a5e2d82b5ff46271b92ed90aba037dc3"' : 'data-target="#xs-pipes-links-module-ThreeExamplesModule-a5e2d82b5ff46271b92ed90aba037dc3"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-ThreeExamplesModule-a5e2d82b5ff46271b92ed90aba037dc3"' :
                                            'id="xs-pipes-links-module-ThreeExamplesModule-a5e2d82b5ff46271b92ed90aba037dc3"' }>
                                            <li class="link">
                                                <a href="pipes/Deg2RadPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Deg2RadPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/Rad2DegPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Rad2DegPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AbstractCamera.html" data-type="entity-link">AbstractCamera</a>
                            </li>
                            <li class="link">
                                <a href="classes/AbstractMesh.html" data-type="entity-link">AbstractMesh</a>
                            </li>
                            <li class="link">
                                <a href="classes/AbstractModelLoader.html" data-type="entity-link">AbstractModelLoader</a>
                            </li>
                            <li class="link">
                                <a href="classes/AbstractObject3D.html" data-type="entity-link">AbstractObject3D</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});