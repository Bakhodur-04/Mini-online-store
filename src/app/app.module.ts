import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import localeRuExtra from '@angular/common/locales/extra/ru';
registerLocaleData(localeRu, 'ru-RU', localeRuExtra);

import { AppComponent } from './app.component';
import { CatalogModule } from './containers/catalog/catalog.module';
import { CartModule } from './containers/cart/cart.module';
import { AppRoutingModule } from './app-routing.module';
import { TopBarModule } from './containers/top-bar/top-bar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CatalogModule,
    CartModule,
    AppRoutingModule,
    TopBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
