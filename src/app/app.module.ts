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
import { CheckoutDetailsComponent } from './components/checkout-details/checkout-details.component';
import { CheckoutShippingComponent } from './components/checkout-shipping/checkout-shipping.component';
import { CheckoutPaymentComponent } from './components/checkout-payment/checkout-payment.component';
import { CheckoutReviewComponent } from './components/checkout-review/checkout-review.component';
import { CheckoutCompleteComponent } from './components/checkout-complete/checkout-complete.component';
import { OrderTrackingComponent } from './components/order-tracking/order-tracking.component';
import { OrderDetailsModalComponent } from './components/order-details-modal/order-details-modal.component';
import { AccountProfileComponent } from './components/account-profile/account-profile.component';
import { AccountOrdersComponent } from './components/account-orders/account-orders.component';
import { AccountWishlistComponent } from './components/account-wishlist/account-wishlist.component';
import { AccountAddressComponent } from './components/account-address/account-address.component';
import { AccountNewAddressModalComponent } from './components/account-new-address-modal/account-new-address-modal.component';
import { AccountPaymentComponent } from './components/account-payment/account-payment.component';
import { AccountNewPaymentModalComponent } from './components/account-new-payment-modal/account-new-payment-modal.component';
import { AccountPasswordRecoveryComponent } from './components/account-password-recovery/account-password-recovery.component';
import { AccountSigninComponent } from './components/account-signin/account-signin.component';
import { DepartmentGridComponent } from './components/department-grid/department-grid.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';

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
    CartComponent,
    CheckoutDetailsComponent,
    CheckoutShippingComponent,
    CheckoutPaymentComponent,
    CheckoutReviewComponent,
    CheckoutCompleteComponent,
    OrderTrackingComponent,
    OrderDetailsModalComponent,
    AccountProfileComponent,
    AccountOrdersComponent,
    AccountWishlistComponent,
    AccountAddressComponent,
    AccountNewAddressModalComponent,
    AccountPaymentComponent,
    AccountNewPaymentModalComponent,
    AccountPasswordRecoveryComponent,
    AccountSigninComponent,
    DepartmentGridComponent,
    DepartmentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
