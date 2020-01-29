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
import { DepartmentsMenuV1Component } from './components/departments-menu-v1/departments-menu-v1.component';
import { DepartmentsMenuV2Component } from './components/departments-menu-v2/departments-menu-v2.component';
import { CartDropdownComponent } from './components/cart-dropdown/cart-dropdown.component';
import { PrimaryMenuComponent } from './components/primary-menu/primary-menu.component';
import { ProductV1Component } from './components/product-v1/product-v1.component';
import { ProductV2Component } from './components/product-v2/product-v2.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeFashionV2Component,
    HomeFashionV1Component,
    QuickViewComponent,
    LoginComponent,
    HomeElectronicsComponent,
    DepartmentsMenuV1Component,
    DepartmentsMenuV2Component,
    CartDropdownComponent,
    PrimaryMenuComponent,
    ProductV1Component,
    ProductV2Component,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
