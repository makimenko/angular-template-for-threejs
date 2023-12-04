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
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AtftAnimationModule.html" data-type="entity-link" >AtftAnimationModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AtftAnimationModule-5f73e1568caa8b4a57c6d26dca9f9315587deb48d972c8d39a65b778829974dd11a700d36493e47a8e73ac914bab10554f87204de2efdfa2005abf95cd44766a"' : 'data-bs-target="#xs-injectables-links-module-AtftAnimationModule-5f73e1568caa8b4a57c6d26dca9f9315587deb48d972c8d39a65b778829974dd11a700d36493e47a8e73ac914bab10554f87204de2efdfa2005abf95cd44766a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AtftAnimationModule-5f73e1568caa8b4a57c6d26dca9f9315587deb48d972c8d39a65b778829974dd11a700d36493e47a8e73ac914bab10554f87204de2efdfa2005abf95cd44766a"' :
                                        'id="xs-injectables-links-module-AtftAnimationModule-5f73e1568caa8b4a57c6d26dca9f9315587deb48d972c8d39a65b778829974dd11a700d36493e47a8e73ac914bab10554f87204de2efdfa2005abf95cd44766a"' }>
                                        <li class="link">
                                            <a href="injectables/AnimationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnimationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AtftCameraModule.html" data-type="entity-link" >AtftCameraModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AtftCameraModule-765178dfb5b9f2acb4c96468f5d69cac34c1c5d43550dd0d8bb7bad73123a2513b65698a362e27dd2a2fe1e5b198e8df62dd3c7edad466ec274cee1c7c6d1ab1"' : 'data-bs-target="#xs-components-links-module-AtftCameraModule-765178dfb5b9f2acb4c96468f5d69cac34c1c5d43550dd0d8bb7bad73123a2513b65698a362e27dd2a2fe1e5b198e8df62dd3c7edad466ec274cee1c7c6d1ab1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AtftCameraModule-765178dfb5b9f2acb4c96468f5d69cac34c1c5d43550dd0d8bb7bad73123a2513b65698a362e27dd2a2fe1e5b198e8df62dd3c7edad466ec274cee1c7c6d1ab1"' :
                                            'id="xs-components-links-module-AtftCameraModule-765178dfb5b9f2acb4c96468f5d69cac34c1c5d43550dd0d8bb7bad73123a2513b65698a362e27dd2a2fe1e5b198e8df62dd3c7edad466ec274cee1c7c6d1ab1"' }>
                                            <li class="link">
                                                <a href="components/OrthographicCameraComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrthographicCameraComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PerspectiveCameraComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PerspectiveCameraComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AtftConnectorModule.html" data-type="entity-link" >AtftConnectorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AtftConnectorModule-28dfd9d71bff38d440853036cf419b77472ab35dcd86757b604e0b731c0b293d2e0eab1175e7b63d1679ceb31c1d46d9c783b80215b2e7c769a89df1ff04be14"' : 'data-bs-target="#xs-components-links-module-AtftConnectorModule-28dfd9d71bff38d440853036cf419b77472ab35dcd86757b604e0b731c0b293d2e0eab1175e7b63d1679ceb31c1d46d9c783b80215b2e7c769a89df1ff04be14"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AtftConnectorModule-28dfd9d71bff38d440853036cf419b77472ab35dcd86757b604e0b731c0b293d2e0eab1175e7b63d1679ceb31c1d46d9c783b80215b2e7c769a89df1ff04be14"' :
                                            'id="xs-components-links-module-AtftConnectorModule-28dfd9d71bff38d440853036cf419b77472ab35dcd86757b604e0b731c0b293d2e0eab1175e7b63d1679ceb31c1d46d9c783b80215b2e7c769a89df1ff04be14"' }>
                                            <li class="link">
                                                <a href="components/LineConnectorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LineConnectorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AtftControlModule.html" data-type="entity-link" >AtftControlModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AtftControlModule-d4a4f12ed9d426d5bdc8331baec54d972af0e878ae124125dff239ffd79b46160cea8198bc2d7e6fbd5cf3ea3b435189565a26c7b68b6fa39fe80fa19a8e2c02"' : 'data-bs-target="#xs-components-links-module-AtftControlModule-d4a4f12ed9d426d5bdc8331baec54d972af0e878ae124125dff239ffd79b46160cea8198bc2d7e6fbd5cf3ea3b435189565a26c7b68b6fa39fe80fa19a8e2c02"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AtftControlModule-d4a4f12ed9d426d5bdc8331baec54d972af0e878ae124125dff239ffd79b46160cea8198bc2d7e6fbd5cf3ea3b435189565a26c7b68b6fa39fe80fa19a8e2c02"' :
                                            'id="xs-components-links-module-AtftControlModule-d4a4f12ed9d426d5bdc8331baec54d972af0e878ae124125dff239ffd79b46160cea8198bc2d7e6fbd5cf3ea3b435189565a26c7b68b6fa39fe80fa19a8e2c02"' }>
                                            <li class="link">
                                                <a href="components/MapControlsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MapControlsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrbitControlsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrbitControlsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AtftDataCenterActorModule.html" data-type="entity-link" >AtftDataCenterActorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AtftDataCenterActorModule-b861207282d54de0261a4c725aa0e5b5928a3425e6962ab2197c26463ec7c65809f1bdcf88bd828fe54b887f377d815e1d553a074bf5aaed623e65867c999110"' : 'data-bs-target="#xs-components-links-module-AtftDataCenterActorModule-b861207282d54de0261a4c725aa0e5b5928a3425e6962ab2197c26463ec7c65809f1bdcf88bd828fe54b887f377d815e1d553a074bf5aaed623e65867c999110"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AtftDataCenterActorModule-b861207282d54de0261a4c725aa0e5b5928a3425e6962ab2197c26463ec7c65809f1bdcf88bd828fe54b887f377d815e1d553a074bf5aaed623e65867c999110"' :
                                            'id="xs-components-links-module-AtftDataCenterActorModule-b861207282d54de0261a4c725aa0e5b5928a3425e6962ab2197c26463ec7c65809f1bdcf88bd828fe54b887f377d815e1d553a074bf5aaed623e65867c999110"' }>
                                            <li class="link">
                                                <a href="components/DagreCompositionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DagreCompositionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DagreEdgeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DagreEdgeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DagreLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DagreLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DagreNodeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DagreNodeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DagreYamlParserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DagreYamlParserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GridActorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GridActorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LayerActorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayerActorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModelActorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModelActorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ServerBarrelActorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ServerBarrelActorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ServerCompactActorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ServerCompactActorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ServerIconActorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ServerIconActorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ServerStandActorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ServerStandActorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WorkstationActorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkstationActorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AtftDataCenterActorModule-b861207282d54de0261a4c725aa0e5b5928a3425e6962ab2197c26463ec7c65809f1bdcf88bd828fe54b887f377d815e1d553a074bf5aaed623e65867c999110"' : 'data-bs-target="#xs-injectables-links-module-AtftDataCenterActorModule-b861207282d54de0261a4c725aa0e5b5928a3425e6962ab2197c26463ec7c65809f1bdcf88bd828fe54b887f377d815e1d553a074bf5aaed623e65867c999110"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AtftDataCenterActorModule-b861207282d54de0261a4c725aa0e5b5928a3425e6962ab2197c26463ec7c65809f1bdcf88bd828fe54b887f377d815e1d553a074bf5aaed623e65867c999110"' :
                                        'id="xs-injectables-links-module-AtftDataCenterActorModule-b861207282d54de0261a4c725aa0e5b5928a3425e6962ab2197c26463ec7c65809f1bdcf88bd828fe54b887f377d815e1d553a074bf5aaed623e65867c999110"' }>
                                        <li class="link">
                                            <a href="injectables/ActorRepositoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActorRepositoryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AtftEffectModule.html" data-type="entity-link" >AtftEffectModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AtftEffectModule-9b321ce67b8a21283042ab44691aadb6fd0e88b171d0c834bf0cc95d61c226267ffb3e980405f20dca52c4d8e20c40c87319ab9dd6da4085f2dba53432b546df"' : 'data-bs-target="#xs-components-links-module-AtftEffectModule-9b321ce67b8a21283042ab44691aadb6fd0e88b171d0c834bf0cc95d61c226267ffb3e980405f20dca52c4d8e20c40c87319ab9dd6da4085f2dba53432b546df"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AtftEffectModule-9b321ce67b8a21283042ab44691aadb6fd0e88b171d0c834bf0cc95d61c226267ffb3e980405f20dca52c4d8e20c40c87319ab9dd6da4085f2dba53432b546df"' :
                                            'id="xs-components-links-module-AtftEffectModule-9b321ce67b8a21283042ab44691aadb6fd0e88b171d0c834bf0cc95d61c226267ffb3e980405f20dca52c4d8e20c40c87319ab9dd6da4085f2dba53432b546df"' }>
                                            <li class="link">
                                                <a href="components/BlurComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlurComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DofComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DofComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DotScreenComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DotScreenComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EffectComposerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EffectComposerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-AtftEffectModule-9b321ce67b8a21283042ab44691aadb6fd0e88b171d0c834bf0cc95d61c226267ffb3e980405f20dca52c4d8e20c40c87319ab9dd6da4085f2dba53432b546df"' : 'data-bs-target="#xs-directives-links-module-AtftEffectModule-9b321ce67b8a21283042ab44691aadb6fd0e88b171d0c834bf0cc95d61c226267ffb3e980405f20dca52c4d8e20c40c87319ab9dd6da4085f2dba53432b546df"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AtftEffectModule-9b321ce67b8a21283042ab44691aadb6fd0e88b171d0c834bf0cc95d61c226267ffb3e980405f20dca52c4d8e20c40c87319ab9dd6da4085f2dba53432b546df"' :
                                        'id="xs-directives-links-module-AtftEffectModule-9b321ce67b8a21283042ab44691aadb6fd0e88b171d0c834bf0cc95d61c226267ffb3e980405f20dca52c4d8e20c40c87319ab9dd6da4085f2dba53432b546df"' }>
                                        <li class="link">
                                            <a href="directives/DashedDrawDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashedDrawDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AtftHelperModule.html" data-type="entity-link" >AtftHelperModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AtftHelperModule-eed32d5350e7797eeb94321bbfe70354ec45ea88f9cc94ed9ad13d94ec552c0403b3eb42be1bbdcf0b447d969b4fad0b6eb528cabf898b3b18c227130829b760"' : 'data-bs-target="#xs-components-links-module-AtftHelperModule-eed32d5350e7797eeb94321bbfe70354ec45ea88f9cc94ed9ad13d94ec552c0403b3eb42be1bbdcf0b447d969b4fad0b6eb528cabf898b3b18c227130829b760"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AtftHelperModule-eed32d5350e7797eeb94321bbfe70354ec45ea88f9cc94ed9ad13d94ec552c0403b3eb42be1bbdcf0b447d969b4fad0b6eb528cabf898b3b18c227130829b760"' :
                                            'id="xs-components-links-module-AtftHelperModule-eed32d5350e7797eeb94321bbfe70354ec45ea88f9cc94ed9ad13d94ec552c0403b3eb42be1bbdcf0b447d969b4fad0b6eb528cabf898b3b18c227130829b760"' }>
                                            <li class="link">
                                                <a href="components/AxesHelperComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AxesHelperComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmptyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmptyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GridHelperComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GridHelperComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AtftLightModule.html" data-type="entity-link" >AtftLightModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AtftLightModule-66a504bd8a7e489064edd3107eab2e2fcd37e3bed6266aa932ca02261c01828f6fda0549f3cf2d2b75f5b0258f71d29945d57a3361a5979de5b6ead0e562e788"' : 'data-bs-target="#xs-components-links-module-AtftLightModule-66a504bd8a7e489064edd3107eab2e2fcd37e3bed6266aa932ca02261c01828f6fda0549f3cf2d2b75f5b0258f71d29945d57a3361a5979de5b6ead0e562e788"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AtftLightModule-66a504bd8a7e489064edd3107eab2e2fcd37e3bed6266aa932ca02261c01828f6fda0549f3cf2d2b75f5b0258f71d29945d57a3361a5979de5b6ead0e562e788"' :
                                            'id="xs-components-links-module-AtftLightModule-66a504bd8a7e489064edd3107eab2e2fcd37e3bed6266aa932ca02261c01828f6fda0549f3cf2d2b75f5b0258f71d29945d57a3361a5979de5b6ead0e562e788"' }>
                                            <li class="link">
                                                <a href="components/AmbientLightComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AmbientLightComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DirectionalLightComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DirectionalLightComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HemisphereLightComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HemisphereLightComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PointLightComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PointLightComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AtftLoaderModule.html" data-type="entity-link" >AtftLoaderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AtftLoaderModule-e1b7808c054ff7d07b5f44a8d9d5853dcccabd6f03f9e84f65995dc3233052ee9994f1667b930785fc095fdefded08ea4e7496b416a52bbd5d61fc572656e410"' : 'data-bs-target="#xs-components-links-module-AtftLoaderModule-e1b7808c054ff7d07b5f44a8d9d5853dcccabd6f03f9e84f65995dc3233052ee9994f1667b930785fc095fdefded08ea4e7496b416a52bbd5d61fc572656e410"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AtftLoaderModule-e1b7808c054ff7d07b5f44a8d9d5853dcccabd6f03f9e84f65995dc3233052ee9994f1667b930785fc095fdefded08ea4e7496b416a52bbd5d61fc572656e410"' :
                                            'id="xs-components-links-module-AtftLoaderModule-e1b7808c054ff7d07b5f44a8d9d5853dcccabd6f03f9e84f65995dc3233052ee9994f1667b930785fc095fdefded08ea4e7496b416a52bbd5d61fc572656e410"' }>
                                            <li class="link">
                                                <a href="components/ObjLoaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ObjLoaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ObjectLoaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ObjectLoaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SVGLoaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SVGLoaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StlLoaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StlLoaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AtftMeshModule.html" data-type="entity-link" >AtftMeshModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AtftMeshModule-2a3f63dc0e68002f31057cd007a65f706a5efd30c9a6392749fe17825a6aa99a13e7d85a42d5456b65760776d798df6c732d6df7eca970ee7551cae1c852f57a"' : 'data-bs-target="#xs-components-links-module-AtftMeshModule-2a3f63dc0e68002f31057cd007a65f706a5efd30c9a6392749fe17825a6aa99a13e7d85a42d5456b65760776d798df6c732d6df7eca970ee7551cae1c852f57a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AtftMeshModule-2a3f63dc0e68002f31057cd007a65f706a5efd30c9a6392749fe17825a6aa99a13e7d85a42d5456b65760776d798df6c732d6df7eca970ee7551cae1c852f57a"' :
                                            'id="xs-components-links-module-AtftMeshModule-2a3f63dc0e68002f31057cd007a65f706a5efd30c9a6392749fe17825a6aa99a13e7d85a42d5456b65760776d798df6c732d6df7eca970ee7551cae1c852f57a"' }>
                                            <li class="link">
                                                <a href="components/BoxMeshComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BoxMeshComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CylinderMeshComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CylinderMeshComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FrameMeshComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FrameMeshComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GridMeshComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GridMeshComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlaneMeshComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlaneMeshComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SphereMeshComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SphereMeshComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TorusMeshComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TorusMeshComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VideoMeshComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VideoMeshComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AtftModule.html" data-type="entity-link" >AtftModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AtftObjectModule.html" data-type="entity-link" >AtftObjectModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AtftObjectModule-8c7a8a888b27f611a4215bd097177401bffed632793aba0c1b346dadea9b636b095c76e3992bdb4079561ac5e0dd933b30938ac77cdcc5f24d368d632994925d"' : 'data-bs-target="#xs-components-links-module-AtftObjectModule-8c7a8a888b27f611a4215bd097177401bffed632793aba0c1b346dadea9b636b095c76e3992bdb4079561ac5e0dd933b30938ac77cdcc5f24d368d632994925d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AtftObjectModule-8c7a8a888b27f611a4215bd097177401bffed632793aba0c1b346dadea9b636b095c76e3992bdb4079561ac5e0dd933b30938ac77cdcc5f24d368d632994925d"' :
                                            'id="xs-components-links-module-AtftObjectModule-8c7a8a888b27f611a4215bd097177401bffed632793aba0c1b346dadea9b636b095c76e3992bdb4079561ac5e0dd933b30938ac77cdcc5f24d368d632994925d"' }>
                                            <li class="link">
                                                <a href="components/ContentProjectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContentProjectionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SceneComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SceneComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AtftObjectModule-8c7a8a888b27f611a4215bd097177401bffed632793aba0c1b346dadea9b636b095c76e3992bdb4079561ac5e0dd933b30938ac77cdcc5f24d368d632994925d"' : 'data-bs-target="#xs-injectables-links-module-AtftObjectModule-8c7a8a888b27f611a4215bd097177401bffed632793aba0c1b346dadea9b636b095c76e3992bdb4079561ac5e0dd933b30938ac77cdcc5f24d368d632994925d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AtftObjectModule-8c7a8a888b27f611a4215bd097177401bffed632793aba0c1b346dadea9b636b095c76e3992bdb4079561ac5e0dd933b30938ac77cdcc5f24d368d632994925d"' :
                                        'id="xs-injectables-links-module-AtftObjectModule-8c7a8a888b27f611a4215bd097177401bffed632793aba0c1b346dadea9b636b095c76e3992bdb4079561ac5e0dd933b30938ac77cdcc5f24d368d632994925d"' }>
                                        <li class="link">
                                            <a href="injectables/FontService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FontService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/IconService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ModelService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModelService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ObjLoaderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ObjLoaderService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SvgLoaderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SvgLoaderService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AtftPipeModule.html" data-type="entity-link" >AtftPipeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-AtftPipeModule-025abc1b47da9b36a41cdabf1fe140216e4d3862c1eacedbe115e40f817a1c21db531770a50024e31eee26a480af738c270556d5c9c3183639919fa503ab608e"' : 'data-bs-target="#xs-pipes-links-module-AtftPipeModule-025abc1b47da9b36a41cdabf1fe140216e4d3862c1eacedbe115e40f817a1c21db531770a50024e31eee26a480af738c270556d5c9c3183639919fa503ab608e"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AtftPipeModule-025abc1b47da9b36a41cdabf1fe140216e4d3862c1eacedbe115e40f817a1c21db531770a50024e31eee26a480af738c270556d5c9c3183639919fa503ab608e"' :
                                            'id="xs-pipes-links-module-AtftPipeModule-025abc1b47da9b36a41cdabf1fe140216e4d3862c1eacedbe115e40f817a1c21db531770a50024e31eee26a480af738c270556d5c9c3183639919fa503ab608e"' }>
                                            <li class="link">
                                                <a href="pipes/Deg2RadPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Deg2RadPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/Rad2DegPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Rad2DegPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AtftRaycasterModule.html" data-type="entity-link" >AtftRaycasterModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-AtftRaycasterModule-091da01aaf7a9273b99ba2e785d3e1211e3e850c3fcb08720cc119cc1352678e5f592f4674abf6bac7d35d3692633a37424152cc833521ed5946c3ad6cc0076d"' : 'data-bs-target="#xs-directives-links-module-AtftRaycasterModule-091da01aaf7a9273b99ba2e785d3e1211e3e850c3fcb08720cc119cc1352678e5f592f4674abf6bac7d35d3692633a37424152cc833521ed5946c3ad6cc0076d"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AtftRaycasterModule-091da01aaf7a9273b99ba2e785d3e1211e3e850c3fcb08720cc119cc1352678e5f592f4674abf6bac7d35d3692633a37424152cc833521ed5946c3ad6cc0076d"' :
                                        'id="xs-directives-links-module-AtftRaycasterModule-091da01aaf7a9273b99ba2e785d3e1211e3e850c3fcb08720cc119cc1352678e5f592f4674abf6bac7d35d3692633a37424152cc833521ed5946c3ad6cc0076d"' }>
                                        <li class="link">
                                            <a href="directives/RaycasterCameraDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RaycasterCameraDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/RaycasterEnableDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RaycasterEnableDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/RaycasterGroupDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RaycasterGroupDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AtftRaycasterModule-091da01aaf7a9273b99ba2e785d3e1211e3e850c3fcb08720cc119cc1352678e5f592f4674abf6bac7d35d3692633a37424152cc833521ed5946c3ad6cc0076d"' : 'data-bs-target="#xs-injectables-links-module-AtftRaycasterModule-091da01aaf7a9273b99ba2e785d3e1211e3e850c3fcb08720cc119cc1352678e5f592f4674abf6bac7d35d3692633a37424152cc833521ed5946c3ad6cc0076d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AtftRaycasterModule-091da01aaf7a9273b99ba2e785d3e1211e3e850c3fcb08720cc119cc1352678e5f592f4674abf6bac7d35d3692633a37424152cc833521ed5946c3ad6cc0076d"' :
                                        'id="xs-injectables-links-module-AtftRaycasterModule-091da01aaf7a9273b99ba2e785d3e1211e3e850c3fcb08720cc119cc1352678e5f592f4674abf6bac7d35d3692633a37424152cc833521ed5946c3ad6cc0076d"' }>
                                        <li class="link">
                                            <a href="injectables/RaycasterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RaycasterService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AtftRendererModule.html" data-type="entity-link" >AtftRendererModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AtftRendererModule-fb4d53b8caf43a33d9533d4e433375b877383ea998382b3d59e12d725c607c77cdadd1985e09ed5f1f32a1be054967794f7461a21ea4b02165fa82eb5db1cac4"' : 'data-bs-target="#xs-components-links-module-AtftRendererModule-fb4d53b8caf43a33d9533d4e433375b877383ea998382b3d59e12d725c607c77cdadd1985e09ed5f1f32a1be054967794f7461a21ea4b02165fa82eb5db1cac4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AtftRendererModule-fb4d53b8caf43a33d9533d4e433375b877383ea998382b3d59e12d725c607c77cdadd1985e09ed5f1f32a1be054967794f7461a21ea4b02165fa82eb5db1cac4"' :
                                            'id="xs-components-links-module-AtftRendererModule-fb4d53b8caf43a33d9533d4e433375b877383ea998382b3d59e12d725c607c77cdadd1985e09ed5f1f32a1be054967794f7461a21ea4b02165fa82eb5db1cac4"' }>
                                            <li class="link">
                                                <a href="components/RendererCanvasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RendererCanvasComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AtftRendererModule-fb4d53b8caf43a33d9533d4e433375b877383ea998382b3d59e12d725c607c77cdadd1985e09ed5f1f32a1be054967794f7461a21ea4b02165fa82eb5db1cac4"' : 'data-bs-target="#xs-injectables-links-module-AtftRendererModule-fb4d53b8caf43a33d9533d4e433375b877383ea998382b3d59e12d725c607c77cdadd1985e09ed5f1f32a1be054967794f7461a21ea4b02165fa82eb5db1cac4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AtftRendererModule-fb4d53b8caf43a33d9533d4e433375b877383ea998382b3d59e12d725c607c77cdadd1985e09ed5f1f32a1be054967794f7461a21ea4b02165fa82eb5db1cac4"' :
                                        'id="xs-injectables-links-module-AtftRendererModule-fb4d53b8caf43a33d9533d4e433375b877383ea998382b3d59e12d725c607c77cdadd1985e09ed5f1f32a1be054967794f7461a21ea4b02165fa82eb5db1cac4"' }>
                                        <li class="link">
                                            <a href="injectables/BloomService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BloomService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RendererService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RendererService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AtftStatsModule.html" data-type="entity-link" >AtftStatsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-AtftStatsModule-712964f4e520a348de576b0fa24058f64ec8fc44ed00fc9be00471cc9a3647b3f0f8c6efb4fa0f7b08fbe6b0c2e2a10252c4dfa8ec3c43a502deee467102a9db"' : 'data-bs-target="#xs-directives-links-module-AtftStatsModule-712964f4e520a348de576b0fa24058f64ec8fc44ed00fc9be00471cc9a3647b3f0f8c6efb4fa0f7b08fbe6b0c2e2a10252c4dfa8ec3c43a502deee467102a9db"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AtftStatsModule-712964f4e520a348de576b0fa24058f64ec8fc44ed00fc9be00471cc9a3647b3f0f8c6efb4fa0f7b08fbe6b0c2e2a10252c4dfa8ec3c43a502deee467102a9db"' :
                                        'id="xs-directives-links-module-AtftStatsModule-712964f4e520a348de576b0fa24058f64ec8fc44ed00fc9be00471cc9a3647b3f0f8c6efb4fa0f7b08fbe6b0c2e2a10252c4dfa8ec3c43a502deee467102a9db"' }>
                                        <li class="link">
                                            <a href="directives/StatsAutoShowDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatsAutoShowDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AtftStatsModule-712964f4e520a348de576b0fa24058f64ec8fc44ed00fc9be00471cc9a3647b3f0f8c6efb4fa0f7b08fbe6b0c2e2a10252c4dfa8ec3c43a502deee467102a9db"' : 'data-bs-target="#xs-injectables-links-module-AtftStatsModule-712964f4e520a348de576b0fa24058f64ec8fc44ed00fc9be00471cc9a3647b3f0f8c6efb4fa0f7b08fbe6b0c2e2a10252c4dfa8ec3c43a502deee467102a9db"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AtftStatsModule-712964f4e520a348de576b0fa24058f64ec8fc44ed00fc9be00471cc9a3647b3f0f8c6efb4fa0f7b08fbe6b0c2e2a10252c4dfa8ec3c43a502deee467102a9db"' :
                                        'id="xs-injectables-links-module-AtftStatsModule-712964f4e520a348de576b0fa24058f64ec8fc44ed00fc9be00471cc9a3647b3f0f8c6efb4fa0f7b08fbe6b0c2e2a10252c4dfa8ec3c43a502deee467102a9db"' }>
                                        <li class="link">
                                            <a href="injectables/StatsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AtftTextModule.html" data-type="entity-link" >AtftTextModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AtftTextModule-23af2a9f1ea32651bcfc166db4533635ff9c800f382184b619f2b11cba0c4f3f37f27a64ca246288f0835e21bf809c94544484e58772bc6ac4b04e75269be443"' : 'data-bs-target="#xs-components-links-module-AtftTextModule-23af2a9f1ea32651bcfc166db4533635ff9c800f382184b619f2b11cba0c4f3f37f27a64ca246288f0835e21bf809c94544484e58772bc6ac4b04e75269be443"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AtftTextModule-23af2a9f1ea32651bcfc166db4533635ff9c800f382184b619f2b11cba0c4f3f37f27a64ca246288f0835e21bf809c94544484e58772bc6ac4b04e75269be443"' :
                                            'id="xs-components-links-module-AtftTextModule-23af2a9f1ea32651bcfc166db4533635ff9c800f382184b619f2b11cba0c4f3f37f27a64ca246288f0835e21bf809c94544484e58772bc6ac4b04e75269be443"' }>
                                            <li class="link">
                                                <a href="components/TextMeshComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TextMeshComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UxActorModule.html" data-type="entity-link" >UxActorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-UxActorModule-1a2f2768ed974cac8468188baea7802519deb7232644863e817d192371f017353feca1166d3b5246669d7d3bf12a32707fb75908c755d9714301df04c7059eb1"' : 'data-bs-target="#xs-components-links-module-UxActorModule-1a2f2768ed974cac8468188baea7802519deb7232644863e817d192371f017353feca1166d3b5246669d7d3bf12a32707fb75908c755d9714301df04c7059eb1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UxActorModule-1a2f2768ed974cac8468188baea7802519deb7232644863e817d192371f017353feca1166d3b5246669d7d3bf12a32707fb75908c755d9714301df04c7059eb1"' :
                                            'id="xs-components-links-module-UxActorModule-1a2f2768ed974cac8468188baea7802519deb7232644863e817d192371f017353feca1166d3b5246669d7d3bf12a32707fb75908c755d9714301df04c7059eb1"' }>
                                            <li class="link">
                                                <a href="components/LoaderActorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoaderActorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TextActorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TextActorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/DagreCompositionComponent.html" data-type="entity-link" >DagreCompositionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DagreEdgeComponent.html" data-type="entity-link" >DagreEdgeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DagreLayoutComponent.html" data-type="entity-link" >DagreLayoutComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DagreNodeComponent.html" data-type="entity-link" >DagreNodeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DagreYamlParserComponent.html" data-type="entity-link" >DagreYamlParserComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoaderActorComponent.html" data-type="entity-link" >LoaderActorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ModelActorComponent.html" data-type="entity-link" >ModelActorComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#directives-links"' :
                                'data-bs-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/AbstractCamera.html" data-type="entity-link" >AbstractCamera</a>
                                </li>
                                <li class="link">
                                    <a href="directives/AbstractComposeEffect.html" data-type="entity-link" >AbstractComposeEffect</a>
                                </li>
                                <li class="link">
                                    <a href="directives/AbstractConnector.html" data-type="entity-link" >AbstractConnector</a>
                                </li>
                                <li class="link">
                                    <a href="directives/AbstractEmptyDirective.html" data-type="entity-link" >AbstractEmptyDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/AbstractLazyObject3D.html" data-type="entity-link" >AbstractLazyObject3D</a>
                                </li>
                                <li class="link">
                                    <a href="directives/AbstractMesh.html" data-type="entity-link" >AbstractMesh</a>
                                </li>
                                <li class="link">
                                    <a href="directives/AbstractModelLoader.html" data-type="entity-link" >AbstractModelLoader</a>
                                </li>
                                <li class="link">
                                    <a href="directives/AbstractObject3D.html" data-type="entity-link" >AbstractObject3D</a>
                                </li>
                                <li class="link">
                                    <a href="directives/AbstractOrbitControls.html" data-type="entity-link" >AbstractOrbitControls</a>
                                </li>
                                <li class="link">
                                    <a href="directives/AbstractServerActor.html" data-type="entity-link" >AbstractServerActor</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AbstractCacheService.html" data-type="entity-link" >AbstractCacheService</a>
                            </li>
                            <li class="link">
                                <a href="classes/DagreUtils.html" data-type="entity-link" >DagreUtils</a>
                            </li>
                            <li class="link">
                                <a href="classes/SVGLoader.html" data-type="entity-link" >SVGLoader</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AbstractAssetService.html" data-type="entity-link" >AbstractAssetService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ActorRepositoryService.html" data-type="entity-link" >ActorRepositoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FontService.html" data-type="entity-link" >FontService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/IconService.html" data-type="entity-link" >IconService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ModelService.html" data-type="entity-link" >ModelService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ObjLoaderService.html" data-type="entity-link" >ObjLoaderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SvgLoaderService.html" data-type="entity-link" >SvgLoaderService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/BaseAssetSource.html" data-type="entity-link" >BaseAssetSource</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BaseInfo.html" data-type="entity-link" >BaseInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Composition.html" data-type="entity-link" >Composition</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Edge.html" data-type="entity-link" >Edge</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GraphModel.html" data-type="entity-link" >GraphModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IconSource.html" data-type="entity-link" >IconSource</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NearestIntersection.html" data-type="entity-link" >NearestIntersection</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Node.html" data-type="entity-link" >Node</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RaycasterEmitEvent.html" data-type="entity-link" >RaycasterEmitEvent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
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
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});