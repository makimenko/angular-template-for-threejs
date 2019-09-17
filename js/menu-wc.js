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
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
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
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AtftCameraModule.html" data-type="entity-link">AtftCameraModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AtftCameraModule-eadfade3496728a8acb44e1d25f6d474"' : 'data-target="#xs-components-links-module-AtftCameraModule-eadfade3496728a8acb44e1d25f6d474"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AtftCameraModule-eadfade3496728a8acb44e1d25f6d474"' :
                                            'id="xs-components-links-module-AtftCameraModule-eadfade3496728a8acb44e1d25f6d474"' }>
                                            <li class="link">
                                                <a href="components/PerspectiveCameraComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PerspectiveCameraComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AtftConnectorModule.html" data-type="entity-link">AtftConnectorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AtftConnectorModule-92163d119a173e049dba469d3e00a8aa"' : 'data-target="#xs-components-links-module-AtftConnectorModule-92163d119a173e049dba469d3e00a8aa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AtftConnectorModule-92163d119a173e049dba469d3e00a8aa"' :
                                            'id="xs-components-links-module-AtftConnectorModule-92163d119a173e049dba469d3e00a8aa"' }>
                                            <li class="link">
                                                <a href="components/LineConnectorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LineConnectorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MeshLineConnectorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MeshLineConnectorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AtftControlModule.html" data-type="entity-link">AtftControlModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AtftControlModule-c7883a1fb3de195e4e7527dac053c42b"' : 'data-target="#xs-components-links-module-AtftControlModule-c7883a1fb3de195e4e7527dac053c42b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AtftControlModule-c7883a1fb3de195e4e7527dac053c42b"' :
                                            'id="xs-components-links-module-AtftControlModule-c7883a1fb3de195e4e7527dac053c42b"' }>
                                            <li class="link">
                                                <a href="components/OrbitControlsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrbitControlsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AtftHelperModule.html" data-type="entity-link">AtftHelperModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AtftHelperModule-897b2e781bcd9b7dbdc9f9e01f2f70d6"' : 'data-target="#xs-components-links-module-AtftHelperModule-897b2e781bcd9b7dbdc9f9e01f2f70d6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AtftHelperModule-897b2e781bcd9b7dbdc9f9e01f2f70d6"' :
                                            'id="xs-components-links-module-AtftHelperModule-897b2e781bcd9b7dbdc9f9e01f2f70d6"' }>
                                            <li class="link">
                                                <a href="components/AxesHelperComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AxesHelperComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmptyComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmptyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GridHelperComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GridHelperComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AtftLightModule.html" data-type="entity-link">AtftLightModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AtftLightModule-df4bdfa6bad752d8f08ddf87241dd779"' : 'data-target="#xs-components-links-module-AtftLightModule-df4bdfa6bad752d8f08ddf87241dd779"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AtftLightModule-df4bdfa6bad752d8f08ddf87241dd779"' :
                                            'id="xs-components-links-module-AtftLightModule-df4bdfa6bad752d8f08ddf87241dd779"' }>
                                            <li class="link">
                                                <a href="components/DirectionalLightComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DirectionalLightComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HemisphereLightComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HemisphereLightComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PointLightComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PointLightComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AtftLoaderModule.html" data-type="entity-link">AtftLoaderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AtftLoaderModule-793aa217b31a288a859f2002ce7fddec"' : 'data-target="#xs-components-links-module-AtftLoaderModule-793aa217b31a288a859f2002ce7fddec"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AtftLoaderModule-793aa217b31a288a859f2002ce7fddec"' :
                                            'id="xs-components-links-module-AtftLoaderModule-793aa217b31a288a859f2002ce7fddec"' }>
                                            <li class="link">
                                                <a href="components/ObjLoaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ObjLoaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ObjectLoaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ObjectLoaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SVGLoaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SVGLoaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AtftMeshModule.html" data-type="entity-link">AtftMeshModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AtftMeshModule-79fe001f7afbde0c89cb7167ae260ede"' : 'data-target="#xs-components-links-module-AtftMeshModule-79fe001f7afbde0c89cb7167ae260ede"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AtftMeshModule-79fe001f7afbde0c89cb7167ae260ede"' :
                                            'id="xs-components-links-module-AtftMeshModule-79fe001f7afbde0c89cb7167ae260ede"' }>
                                            <li class="link">
                                                <a href="components/BoxMeshComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BoxMeshComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CylinderMeshComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CylinderMeshComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FrameMeshComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FrameMeshComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlaneMeshComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PlaneMeshComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SphereMeshComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SphereMeshComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TorusMeshComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TorusMeshComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AtftModule.html" data-type="entity-link">AtftModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AtftObjectModule.html" data-type="entity-link">AtftObjectModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AtftObjectModule-4c2c4c670e24aac491b38527e8c504c7"' : 'data-target="#xs-components-links-module-AtftObjectModule-4c2c4c670e24aac491b38527e8c504c7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AtftObjectModule-4c2c4c670e24aac491b38527e8c504c7"' :
                                            'id="xs-components-links-module-AtftObjectModule-4c2c4c670e24aac491b38527e8c504c7"' }>
                                            <li class="link">
                                                <a href="components/SceneComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SceneComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AtftPipeModule.html" data-type="entity-link">AtftPipeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AtftPipeModule-4003a34063e62ddedcc597cd0b3ac821"' : 'data-target="#xs-pipes-links-module-AtftPipeModule-4003a34063e62ddedcc597cd0b3ac821"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AtftPipeModule-4003a34063e62ddedcc597cd0b3ac821"' :
                                            'id="xs-pipes-links-module-AtftPipeModule-4003a34063e62ddedcc597cd0b3ac821"' }>
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
                            <li class="link">
                                <a href="modules/AtftRendererModule.html" data-type="entity-link">AtftRendererModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AtftRendererModule-e3bb7b1ac1f99120b654361495cc263e"' : 'data-target="#xs-components-links-module-AtftRendererModule-e3bb7b1ac1f99120b654361495cc263e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AtftRendererModule-e3bb7b1ac1f99120b654361495cc263e"' :
                                            'id="xs-components-links-module-AtftRendererModule-e3bb7b1ac1f99120b654361495cc263e"' }>
                                            <li class="link">
                                                <a href="components/WebGLRendererComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WebGLRendererComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AtftTextModule.html" data-type="entity-link">AtftTextModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AtftTextModule-42c55fe225cfcab92b5400e606075114"' : 'data-target="#xs-components-links-module-AtftTextModule-42c55fe225cfcab92b5400e606075114"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AtftTextModule-42c55fe225cfcab92b5400e606075114"' :
                                            'id="xs-components-links-module-AtftTextModule-42c55fe225cfcab92b5400e606075114"' }>
                                            <li class="link">
                                                <a href="components/TextMeshComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TextMeshComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DataCenterActorModule.html" data-type="entity-link">DataCenterActorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DataCenterActorModule-f36ca6ba5f941e2340d1d9c9a21cd2b9"' : 'data-target="#xs-components-links-module-DataCenterActorModule-f36ca6ba5f941e2340d1d9c9a21cd2b9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DataCenterActorModule-f36ca6ba5f941e2340d1d9c9a21cd2b9"' :
                                            'id="xs-components-links-module-DataCenterActorModule-f36ca6ba5f941e2340d1d9c9a21cd2b9"' }>
                                            <li class="link">
                                                <a href="components/LayerActorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LayerActorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ServerActorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ServerActorComponent</a>
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
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AbstractCamera.html" data-type="entity-link">AbstractCamera</a>
                            </li>
                            <li class="link">
                                <a href="classes/AbstractConnector.html" data-type="entity-link">AbstractConnector</a>
                            </li>
                            <li class="link">
                                <a href="classes/AbstractLazyObject3D.html" data-type="entity-link">AbstractLazyObject3D</a>
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
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
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