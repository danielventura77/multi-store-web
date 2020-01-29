import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeFashionV2Component} from './components/home-fashion-v2/home-fashion-v2.component';
import {HomeFashionV1Component} from './components/home-fashion-v1/home-fashion-v1.component';
import {HomeElectronicsComponent} from './components/home-electronics/home-electronics.component';
import {ProductV1Component} from './components/product-v1/product-v1.component';
import {ProductV2Component} from './components/product-v2/product-v2.component';
import {CartComponent} from './components/cart/cart.component';


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
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
