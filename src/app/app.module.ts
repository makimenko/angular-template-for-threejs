import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThreeExamplesModule } from './three-examples/three-examples.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ThreeExamplesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
