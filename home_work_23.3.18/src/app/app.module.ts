import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Targil1Component } from './targil1/targil1.component';
import { Targil2Component } from './targil2/targil2.component';


@NgModule({
  declarations: [
    AppComponent,
    Targil1Component,
    Targil2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
