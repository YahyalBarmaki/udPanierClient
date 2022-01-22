import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* Angular Material */
import { MaterialModule } from './material/angular-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { ProductsComponent } from './components/products/products.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { CompatibilityComponent } from './components/compatibility/compatibility.component';
import { HappyCustomersComponent } from './components/happy-customers/happy-customers.component';
import { GraphQLModule } from './graphql.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserProfilComponent } from './components/user-profil/user-profil.component';
import { HomeAdminPanelComponent } from './components/admin-panel/home-admin-panel/home-admin-panel.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsItemComponent } from './components/products/products-item/products-item.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { DetailsProductComponent } from './components/products/details-product/details-product.component';
import { RouterModule } from '@angular/router';
/**Social Login */
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
/**
 * Toastr alert
 */
import { ToastrModule } from 'ngx-toastr';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrdersModule } from './models/orders.modules';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    ScrollToTopComponent,
    ProductsComponent,
    DetailProductComponent,
    CompatibilityComponent,
    HappyCustomersComponent,
    UserProfilComponent,
    HomeAdminPanelComponent,
    DashboardComponent,
    ProductsItemComponent,
    CartItemComponent,
    DetailsProductComponent,
    CheckoutComponent,
    CartIconComponent,

  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductsComponent },
      { path: 'products/:productId', component: DetailsProductComponent },
      { path: 'cart', component: CartComponent }
    ]),
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    OrdersModule,
    GraphQLModule,
    ToastrModule.forRoot()
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '700968558232-m35hbi9tllfn5s3tervh5uu8r8qo3h60.apps.googleusercontent.com'
            ),

          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(
              '289195476502503'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
