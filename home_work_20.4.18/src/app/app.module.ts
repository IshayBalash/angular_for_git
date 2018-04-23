import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Artical_list } from './shared/services/sarticallist.services';
import { ArticlesListComponentComponent } from './articles-list-component/articles-list-component.component';
import { ArticleInfoComponentComponent } from './article-info-component/article-info-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { ArticleIndex } from './shared/services/indexServices.services';




@NgModule({
  declarations: [
    AppComponent,
    ArticlesListComponentComponent,
    ArticleInfoComponentComponent,
    HeaderComponentComponent,
    FooterComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Artical_list,ArticleIndex],
  bootstrap: [AppComponent]
})
export class AppModule { }
