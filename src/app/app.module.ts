import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThreeExamplesModule } from './three-examples/three-examples.module';
import { ThreeWrapperModule } from 'three-wrapper';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ThreeExamplesModule,
    ThreeWrapperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
