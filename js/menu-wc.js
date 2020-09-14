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
                                <a href="modules/AtftAnimationModule.html" data-type="entity-link">AtftAnimationModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AtftAnimationModule-3871bd38fdce111c2a4f7e9477ac3126"' : 'data-target="#xs-injectables-links-module-AtftAnimationModule-3871bd38fdce111c2a4f7e9477ac3126"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AtftAnimationModule-3871bd38fdce111c2a4f7e9477ac3126"' :
                                        'id="xs-injectables-links-module-AtftAnimationModule-3871bd38fdce111c2a4f7e9477ac3126"' }>
                                        <li class="link">
                                            <a href="injectables/AnimationService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AnimationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AtftCameraModule.html" data-type="entity-link">AtftCameraModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AtftCameraModule-19bb764eea3999aafda9501485265af3"' : 'data-target="#xs-components-links-module-AtftCameraModule-19bb764eea3999aafda9501485265af3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AtftCameraModule-19bb764eea3999aafda9501485265af3"' :
                                            'id="xs-components-links-module-AtftCameraModule-19bb764eea3999aafda9501485265af3"' }>
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
                                            'data-target="#components-links-module-AtftControlModule-3afee76d2d250957682fb39e4445f948"' : 'data-target="#xs-components-links-module-AtftControlModule-3afee76d2d250957682fb39e4445f948"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AtftControlModule-3afee76d2d250957682fb39e4445f948"' :
                                            'id="xs-components-links-module-AtftControlModule-3afee76d2d250957682fb39e4445f948"' }>
                                            <li class="link">
                                                <a href="components/MapControlsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MapControlsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrbitControlsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrbitControlsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AtftDataCenterActorModule.html" data-type="entity-link">AtftDataCenterActorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AtftDataCenterActorModule-6520758d1dee02aaea530a682b19ee4f"' : 'data-target="#xs-components-links-module-AtftDataCenterActorModule-6520758d1dee02aaea530a682b19ee4f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AtftDataCenterActorModule-6520758d1dee02aaea530a682b19ee4f"' :
                                            'id="xs-components-links-module-AtftDataCenterActorModule-6520758d1dee02aaea530a682b19ee4f"' }>
                                            <li class="link">
                                                <a href="components/LayerActorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LayerActorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ServerBarrelActorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ServerBarrelActorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ServerCompactActorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ServerCompactActorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ServerIconActorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ServerIconActorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ServerStandActorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ServerStandActorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WorkstationActorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WorkstationActorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AtftEffectModule.html" data-type="entity-link">AtftEffectModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-AtftEffectModule-32c5bed331f5fee650143dadb770cbf2"' : 'data-target="#xs-directives-links-module-AtftEffectModule-32c5bed331f5fee650143dadb770cbf2"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AtftEffectModule-32c5bed331f5fee650143dadb770cbf2"' :
                                        'id="xs-directives-links-module-AtftEffectModule-32c5bed331f5fee650143dadb770cbf2"' }>
                                        <li class="link">
                                            <a href="directives/DashedDrawDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashedDrawDirective</a>
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
                                            'data-target="#components-links-module-AtftMeshModule-05e90afaa8abf844a4fca6dd0abe28a0"' : 'data-target="#xs-components-links-module-AtftMeshModule-05e90afaa8abf844a4fca6dd0abe28a0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AtftMeshModule-05e90afaa8abf844a4fca6dd0abe28a0"' :
                                            'id="xs-components-links-module-AtftMeshModule-05e90afaa8abf844a4fca6dd0abe28a0"' }>
                                            <li class="link">
                                                <a href="components/BoxMeshComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BoxMeshComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Css3dVideoMeshComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Css3dVideoMeshComponent</a>
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
                                                <a href="components/GridMeshComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GridMeshComponent</a>
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
                                            'data-target="#components-links-module-AtftObjectModule-267f2313f893f3dc3342aaa865de775b"' : 'data-target="#xs-components-links-module-AtftObjectModule-267f2313f893f3dc3342aaa865de775b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AtftObjectModule-267f2313f893f3dc3342aaa865de775b"' :
                                            'id="xs-components-links-module-AtftObjectModule-267f2313f893f3dc3342aaa865de775b"' }>
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
                                <a href="modules/AtftRaycasterModule.html" data-type="entity-link">AtftRaycasterModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-AtftRaycasterModule-262664f314841e4ed6368ad8dd430536"' : 'data-target="#xs-directives-links-module-AtftRaycasterModule-262664f314841e4ed6368ad8dd430536"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AtftRaycasterModule-262664f314841e4ed6368ad8dd430536"' :
                                        'id="xs-directives-links-module-AtftRaycasterModule-262664f314841e4ed6368ad8dd430536"' }>
                                        <li class="link">
                                            <a href="directives/RaycasterCameraDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">RaycasterCameraDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/RaycasterEnableDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">RaycasterEnableDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/RaycasterGroupDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">RaycasterGroupDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AtftRaycasterModule-262664f314841e4ed6368ad8dd430536"' : 'data-target="#xs-injectables-links-module-AtftRaycasterModule-262664f314841e4ed6368ad8dd430536"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AtftRaycasterModule-262664f314841e4ed6368ad8dd430536"' :
                                        'id="xs-injectables-links-module-AtftRaycasterModule-262664f314841e4ed6368ad8dd430536"' }>
                                        <li class="link">
                                            <a href="injectables/RaycasterService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>RaycasterService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AtftRendererModule.html" data-type="entity-link">AtftRendererModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AtftRendererModule-55de6574f17affcd8897305977418009"' : 'data-target="#xs-components-links-module-AtftRendererModule-55de6574f17affcd8897305977418009"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AtftRendererModule-55de6574f17affcd8897305977418009"' :
                                            'id="xs-components-links-module-AtftRendererModule-55de6574f17affcd8897305977418009"' }>
                                            <li class="link">
                                                <a href="components/RendererCanvasComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RendererCanvasComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AtftRendererModule-55de6574f17affcd8897305977418009"' : 'data-target="#xs-injectables-links-module-AtftRendererModule-55de6574f17affcd8897305977418009"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AtftRendererModule-55de6574f17affcd8897305977418009"' :
                                        'id="xs-injectables-links-module-AtftRendererModule-55de6574f17affcd8897305977418009"' }>
                                        <li class="link">
                                            <a href="injectables/RendererService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>RendererService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AtftStatsModule.html" data-type="entity-link">AtftStatsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-AtftStatsModule-8a3fcb79fd9c2283d221410f21c8a95b"' : 'data-target="#xs-directives-links-module-AtftStatsModule-8a3fcb79fd9c2283d221410f21c8a95b"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AtftStatsModule-8a3fcb79fd9c2283d221410f21c8a95b"' :
                                        'id="xs-directives-links-module-AtftStatsModule-8a3fcb79fd9c2283d221410f21c8a95b"' }>
                                        <li class="link">
                                            <a href="directives/StatsAutoShowDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">StatsAutoShowDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AtftStatsModule-8a3fcb79fd9c2283d221410f21c8a95b"' : 'data-target="#xs-injectables-links-module-AtftStatsModule-8a3fcb79fd9c2283d221410f21c8a95b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AtftStatsModule-8a3fcb79fd9c2283d221410f21c8a95b"' :
                                        'id="xs-injectables-links-module-AtftStatsModule-8a3fcb79fd9c2283d221410f21c8a95b"' }>
                                        <li class="link">
                                            <a href="injectables/StatsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>StatsService</a>
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
                                <a href="classes/AbstractServerActor.html" data-type="entity-link">AbstractServerActor</a>
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
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
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