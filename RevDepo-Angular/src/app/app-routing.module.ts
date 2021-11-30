import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { DisplayProductsComponent } from './component/display-products/display-products.component';
import { LoginComponent } from './component/login/login.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  {path: 'display-products', component: DisplayProductsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'cart', component: CartComponent},
  {path: 'product-details', component: ProductDetailsComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: '**', redirectTo: 'display-products'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
