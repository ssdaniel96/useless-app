import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UselessLibModule } from '@poc/Useless-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UselessLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
