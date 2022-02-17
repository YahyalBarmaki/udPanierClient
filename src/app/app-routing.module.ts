import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProduitsComponent } from './adminComponents/list-produits/list-produits.component';
import { HomeAdminPanelComponent } from './components/admin-panel/home-admin-panel/home-admin-panel.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CommandePlusComponent } from './components/commande-plus/commande-plus.component';
import { CommandesComponent } from './components/commandes/commandes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DesignyourcartComponent } from './components/designyourcart/designyourcart.component';
import { HappyCustomersComponent } from './components/happy-customers/happy-customers.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsProductComponent } from './components/products/details-product/details-product.component';
import { ProductsComponent } from './components/products/products.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { UserProfilComponent } from './components/user-profil/user-profil.component';

import { AuthGuard } from "./shared/guard/auth.guard";



const routes: Routes = [
  
  { path: '', pathMatch: 'full', redirectTo: 'https://usine-digitale-vcard.herokuapp.com' },
  { path: 'https://usine-digitale-vcard.herokuapp.com', component: HomeComponent },
  { path: 'https://usine-digitale-vcard.herokuapp.com/signIn', component: SignInComponent },
  { path: 'https://usine-digitale-vcard.herokuapp.com/signUp', component: SignUpComponent },
  //{ path: 'cart', component: CartComponent },
  //{ path: 'products', component: ProductsComponent },
  { path: 'https://usine-digitale-vcard.herokuapp.com/admin-panel-home', component: HomeAdminPanelComponent },
  { path: 'https://usine-digitale-vcard.herokuapp.com/profile', component: UserProfilComponent },
  //{ path: 'product/:id', component: DetailsProductComponent },
  { path: 'https://usine-digitale-vcard.herokuapp.com/detailsProduct', component: DetailsProductComponent },
  { path: 'https://usine-digitale-vcard.herokuapp.com/happyCustomer', component: HappyCustomersComponent },
  { path: 'https://usine-digitale-vcard.herokuapp.com/dashboards', component: DashboardComponent ,
   canActivate: [AuthGuard]  
},
  { path: 'https://usine-digitale-vcard.herokuapp.com/checkout', component: CheckoutComponent },
  { path: 'https://usine-digitale-vcard.herokuapp.com/commande', component:CommandesComponent},
  {path: 'https://usine-digitale-vcard.herokuapp.com/designyourcart',component:DesignyourcartComponent},
  {path: 'https://usine-digitale-vcard.herokuapp.com/thankyou',component:ThankyouComponent},
  {path: 'https://usine-digitale-vcard.herokuapp.com/commande_plus',component:CommandePlusComponent},
  {path:'https://usine-digitale-vcard.herokuapp.com/listproduit',component:ListProduitsComponent,
  canActivate: [AuthGuard] }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
