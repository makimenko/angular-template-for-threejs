import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThreeJsModule } from './three-js/three-js.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ThreeJsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
