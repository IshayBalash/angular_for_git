import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {UrlInfoservice} from "../app/shared/services/PepoleList.service";
import { RouterModule, Routes } from '@angular/router';




import { AppComponent } from './app.component';

import { PepoleListComponent } from './pepole-list/pepole-list.component';
import { PepoleImgComponent } from './pepole-img/pepole-img.component'

const appRoutes: Routes = [
  { path: 'list', component: PepoleListComponent },
  { path: 'person', component: PepoleImgComponent },
  { path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
  { path: '**', component: PepoleListComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    PepoleListComponent,
    PepoleImgComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)


  ],
  providers: [ UrlInfoservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
