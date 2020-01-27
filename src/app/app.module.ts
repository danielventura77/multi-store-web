import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeFashionV2Component} from './components/home-fashion-v2/home-fashion-v2.component';
import {HomeFashionV1Component} from './components/home-fashion-v1/home-fashion-v1.component';
import { QuickViewComponent } from './components/quick-view/quick-view.component';
import { LoginComponent } from './components/login/login.component';
import { HomeElectronicsComponent } from './components/home-electronics/home-electronics.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeFashionV2Component,
    HomeFashionV1Component,
    QuickViewComponent,
    LoginComponent,
    HomeElectronicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
