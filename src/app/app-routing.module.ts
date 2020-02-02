import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeFashionV2Component} from './components/home-fashion-v2/home-fashion-v2.component';
import {HomeFashionV1Component} from './components/home-fashion-v1/home-fashion-v1.component';
import {HomeElectronicsComponent} from './components/home-electronics/home-electronics.component';
import {ProductV1Component} from './components/product-v1/product-v1.component';
import {ProductV2Component} from './components/product-v2/product-v2.component';
import {CartComponent} from './components/cart/cart.component';
import {CheckoutDetailsComponent} from './components/checkout-details/checkout-details.component';
import {CheckoutShippingComponent} from './components/checkout-shipping/checkout-shipping.component';
import {CheckoutPaymentComponent} from './components/checkout-payment/checkout-payment.component';
import {CheckoutReviewComponent} from './components/checkout-review/checkout-review.component';
import {CheckoutCompleteComponent} from './components/checkout-complete/checkout-complete.component';
import {OrderTrackingComponent} from './components/order-tracking/order-tracking.component';
import {AccountProfileComponent} from './components/account-profile/account-profile.component';
import {AccountOrdersComponent} from './components/account-orders/account-orders.component';
import {AccountWishlistComponent} from './components/account-wishlist/account-wishlist.component';
import {AccountAddressComponent} from './components/account-address/account-address.component';
import {AccountPaymentComponent} from './components/account-payment/account-payment.component';
import {AccountPasswordRecoveryComponent} from './components/account-password-recovery/account-password-recovery.component';
import {AccountSigninComponent} from './components/account-signin/account-signin.component';
import {DepartmentGridComponent} from './components/department-grid/department-grid.component';
import {DepartmentListComponent} from './components/department-list/department-list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home-fashion-v1',
    pathMatch: 'full'
  },
  { path: 'home-fashion-v2', component: HomeFashionV2Component },
  { path: 'home-fashion-v1', component: HomeFashionV1Component },
  { path: 'home-electronics', component: HomeElectronicsComponent },
  { path: 'product-v1', component: ProductV1Component },
  { path: 'product-v2', component: ProductV2Component },
  { path: 'cart', component: CartComponent },
  { path: 'checkout-details', component: CheckoutDetailsComponent },
  { path: 'checkout-shipping', component: CheckoutShippingComponent },
  { path: 'checkout-payment', component: CheckoutPaymentComponent },
  { path: 'checkout-review', component: CheckoutReviewComponent },
  { path: 'checkout-complete', component: CheckoutCompleteComponent },
  { path: 'order-tracking', component: OrderTrackingComponent },
  { path: 'account-profile', component: AccountProfileComponent },
  { path: 'account-orders', component: AccountOrdersComponent },
  { path: 'account-wishlist', component: AccountWishlistComponent },
  { path: 'account-address', component: AccountAddressComponent },
  { path: 'account-payment', component: AccountPaymentComponent },
  { path: 'account-password-recovery', component: AccountPasswordRecoveryComponent },
  { path: 'account-signin', component: AccountSigninComponent },
  { path: 'department-grid', component: DepartmentGridComponent },
  { path: 'department-list', component: DepartmentListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
