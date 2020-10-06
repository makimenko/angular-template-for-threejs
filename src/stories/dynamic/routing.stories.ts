import {Component, NgModule} from '@angular/core';
import {moduleMetadata} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';


@Component({
  selector: 'app-main',
  template: `
    <h1>Main</h1>
    <input value="First" type="button" routerLink="first"/>
    <input value="Second" type="button" routerLink="second"/>
    <hr/>
    <router-outlet></router-outlet>
  `
})
class MainComponent {

}

@Component({
  selector: 'app-first-page',
  template: `
    <h2>First Page</h2>
  `
})
class FirstPageComponent {

}

@Component({
  selector: 'app-second-page',
  template: `
    <h2>Second Page</h2>
  `
})
class SecondPageComponent {

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
    StoryRoutingModule
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
        AtftModule,
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
