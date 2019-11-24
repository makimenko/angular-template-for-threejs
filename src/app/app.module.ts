import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AtftModule} from 'atft';

// For development (code watch): import { AtftModule } from 'projects/atft/src/lib/atft.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AtftModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
