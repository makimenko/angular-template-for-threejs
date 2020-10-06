import {Component, NgModule, Optional, SkipSelf} from '@angular/core';
import {moduleMetadata} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {Router, RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import {worldSceneWrapper} from '../scene-wrapper/world-scene-wrapper';
import {EmptyComponent} from '../../../projects/atft/src/lib/object/helper';
import {provideParent} from '../../../projects/atft/src/lib/util';
import {RendererService} from '../../../projects/atft/src/lib/renderer';
import {AbstractObject3D} from '../../../projects/atft/src/lib/object';


@Component({
  selector: 'app-main',
  template: worldSceneWrapper(`
    <atft-empty name="main">
      <atft-empty name="selector">
        <atft-box-mesh name="box1" atft-raycaster-group (click)="chooseFirst()" height="20" width="20" depth="20" translateZ="10">
        </atft-box-mesh>
        <atft-box-mesh name="box2" atft-raycaster-group (click)="chooseSecond()" height="20" width="20" depth="20" translateZ="10" translateX="30">
        </atft-box-mesh>
      </atft-empty>
      <router-outlet></router-outlet>
    </atft-empty>
`)
})
class MainComponent {

  constructor(private router: Router) {
  }

  public chooseFirst() {
    console.log('Choose first');
    this.router.navigate(['first']);
  }

  public chooseSecond() {
    console.log('Choose second');
    this.router.navigate(['second']);
  }

}

@Component({
  selector: 'app-first-page',
  providers: [provideParent(FirstPageComponent)],
  template: `
    <atft-box-mesh name="first-box" height="10" width="10" depth="10" translateZ="30">
    </atft-box-mesh>
  `
})
class FirstPageComponent extends EmptyComponent {

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>
  ) {
    super(rendererService, parent);
    console.log('FirstPageComponent.constructor', parent);
  }

}

@Component({
  selector: 'app-second-page',
  providers: [provideParent(SecondPageComponent)],
  template: `
    <atft-box-mesh name="second-box" height="10" width="10" depth="10" translateZ="30" translateX="30">
    </atft-box-mesh>
  `
})
class SecondPageComponent extends EmptyComponent {

  constructor(
    protected rendererService: RendererService,
    @SkipSelf() @Optional() protected parent: AbstractObject3D<any>
  ) {
    super(rendererService, parent);
    console.log('SecondPageComponent.constructor', parent);
  }

}

// ======================================================================

const routes: Routes = [
  {path: '', redirectTo: '/first', pathMatch: 'full'}, // redirect to `first-component`
  {path: 'first', component: FirstPageComponent},
  {path: 'second', component: SecondPageComponent},
  {path: '**', redirectTo: 'first'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
class StoryRoutingModule {
}

@NgModule({
  declarations: [
    MainComponent,
    FirstPageComponent,
    SecondPageComponent
  ],
  imports: [
    BrowserModule,
    StoryRoutingModule,
    AtftModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [MainComponent]
})
class StoryModule {
}

// ======================================================================
export default {
  title: 'Dynamic',
  decorators: [
    moduleMetadata({
      imports: [
        StoryModule
      ],
      declarations: []
    })
  ]
};

export const Routing = (args) => ({
  component: MainComponent,
  props: args
});
