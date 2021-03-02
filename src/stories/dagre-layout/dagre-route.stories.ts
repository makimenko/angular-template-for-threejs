import {Component, NgModule, Optional, SkipSelf} from '@angular/core';
import {moduleMetadata} from '@storybook/angular';
import {AtftDataCenterActorModule} from '../../../projects/atft/src/lib/actor/data-center';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {worldSceneWrapper} from '../scene-wrapper/world-scene-wrapper';
import {AnimationService} from '../../../projects/atft/src/lib/animation';
import {provideParent} from '../../../projects/atft/src/lib/util';
import {AbstractObject3D, EmptyComponent} from '../../../projects/atft/src/lib/object';
import {RendererService} from '../../../projects/atft/src/lib/renderer';
import {Router, RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';


// ======================================================================
@Component({
  template: worldSceneWrapper(`
    <atft-dagre-layout>
        <atft-dagre-node name="spa">
            <atft-server-stand-actor label="spa" (actorClick)="showSpaDetails()"></atft-server-stand-actor>
        </atft-dagre-node>
        <atft-dagre-node name="api">
            <atft-server-stand-actor label="api" (actorClick)="showApiDetails()"></atft-server-stand-actor>
        </atft-dagre-node>

        <atft-dagre-edge from="spa" to="api"></atft-dagre-edge>

        <router-outlet></router-outlet>
    </atft-dagre-layout>
`)
})
class StorybookRouterMainComponent {

  constructor(
    private animationService: AnimationService,
    private router: Router
  ) {
    this.animationService.start();
  }

  public showSpaDetails() {
    console.log('*****************************');
    this.router.navigate(['spaDetails']);
  }

  public showApiDetails() {
    console.log('*****************************');
    this.router.navigate(['apiDetails']);
  }


}


@Component({
  selector: 'app-spa-details-page',
  providers: [provideParent(SpaDetailsPageComponent)],
  template: `
    <atft-dagre-node name="ad">
      <atft-server-compact-actor label="Active Directory"></atft-server-compact-actor>
    </atft-dagre-node>
    <atft-dagre-edge from="spa" to="ad"></atft-dagre-edge>
  `
})
class SpaDetailsPageComponent extends EmptyComponent {

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>
  ) {
    super(rendererService, parent);
    console.log('SpaDetailsPageComponent.constructor', parent);
  }

}


@Component({
  selector: 'app-api-details-page',
  providers: [provideParent(ApiDetailsPageComponent)],
  template: `
    <atft-dagre-node name="db1">
      <atft-server-barrel-actor label="PostgreSQL"></atft-server-barrel-actor>
    </atft-dagre-node>
    <atft-dagre-node name="db2">
      <atft-server-barrel-actor label="MongoDB"></atft-server-barrel-actor>
    </atft-dagre-node>
    <atft-dagre-edge from="api" to="db1"></atft-dagre-edge>
    <atft-dagre-edge from="api" to="db2"></atft-dagre-edge>
  `
})
class ApiDetailsPageComponent extends EmptyComponent {

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>
  ) {
    super(rendererService, parent);
    console.log('ApiDetailsPageComponent.constructor', parent);
  }

}


@Component({
  selector: 'app-no-details-page',
  providers: [provideParent(NoDetailsPageComponent)],
  template: `

  `
})
class NoDetailsPageComponent extends EmptyComponent {

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>
  ) {
    super(rendererService, parent);
    console.log('NoDetailsPageComponent.constructor', parent);
  }

}

// ======================================================================
const routes: Routes = [
  {path: '', redirectTo: '/noDetails', pathMatch: 'full'}, // redirect to `first-component`
  {path: 'noDetails', component: NoDetailsPageComponent},
  {path: 'spaDetails', component: SpaDetailsPageComponent},
  {path: 'apiDetails', component: ApiDetailsPageComponent},
  {path: '**', redirectTo: 'noDetails'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
class StoryRoutingModule {
}

@NgModule({
  declarations: [
    StorybookRouterMainComponent,
    SpaDetailsPageComponent,
    ApiDetailsPageComponent,
    NoDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    StoryRoutingModule,
    AtftModule,
    AtftDataCenterActorModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [StorybookRouterMainComponent]
})
class StoryModule {
}


// ======================================================================
export default {
  title: 'Dagre Layout/Router Sample',
  decorators: [
    moduleMetadata({
      imports: [
        AtftModule,
        AtftDataCenterActorModule,
        StoryModule
      ]
    })
  ]
};

export const RouterSample = (args) => ({
  component: StorybookRouterMainComponent,
  props: args
});

