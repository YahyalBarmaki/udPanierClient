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
  
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'signUp', component: SignUpComponent },
  //{ path: 'cart', component: CartComponent },
  //{ path: 'products', component: ProductsComponent },
  { path: 'admin-panel-home', component: HomeAdminPanelComponent },
  { path: 'profile', component: UserProfilComponent },
  //{ path: 'product/:id', component: DetailsProductComponent },
  { path: 'detailsProduct', component: DetailsProductComponent },
  { path: 'happyCustomer', component: HappyCustomersComponent },
  { path: 'dashboards', component: DashboardComponent ,
   canActivate: [AuthGuard]  
},
  { path: 'checkout', component: CheckoutComponent },
  { path: 'commande', component:CommandesComponent},
  {path: 'designyourcart',component:DesignyourcartComponent},
  {path: 'thankyou',component:ThankyouComponent},
  {path: 'commande_plus',component:CommandePlusComponent},
  {path:'listproduit',component:ListProduitsComponent,
  canActivate: [AuthGuard] }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
