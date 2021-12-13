import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { DisplayProductsComponent } from './component/display-products/display-products.component';
import { LoginComponent } from './component/login/login.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { RegisterComponent } from './component/register/register.component';
import { ResultPageComponent } from './component/result-page/result-page.component';
import { SearchbarComponent } from './component/searchbar/searchbar.component';
import { AllSalesPageComponent } from './component/all-sales-page/all-sales-page.component';

const routes: Routes = [
  {path: 'display-products', component: DisplayProductsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'product-details', component: ProductDetailsComponent},
  {path: 'result-page/:title', component: ResultPageComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'searchbar', component:SearchbarComponent},
  {path: 'allsales', component:AllSalesPageComponent},
  {path: '**', redirectTo: 'display-products'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
