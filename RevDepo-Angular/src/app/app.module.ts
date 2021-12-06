import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from  '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DisplayProductsComponent } from './component/display-products/display-products.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { CartComponent } from './component/cart/cart.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { SearchbarComponent } from './component/searchbar/searchbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CartService } from './service/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DisplayProductsComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent,
    SearchbarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule
    
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
