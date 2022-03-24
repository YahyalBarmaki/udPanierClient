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
import { TaproprecarteComponent } from './components/taproprecarte/taproprecarte.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { UserProfilComponent } from './components/user-profil/user-profil.component';

import { AuthGuard } from "./shared/guard/auth.guard";



const routes: Routes = [

<<<<<<< HEAD

  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
=======
  { path: '', redirectTo: 'home', pathMatch: '' },
=======
  
<<<<<<< HEAD
=======
  { path: '', redirectTo: '/', pathMatch: 'full' },
>>>>>>> f10f9323694bb6b84e47f9030ca2dc19ca6d39bf
>>>>>>> 59da0ee847f3010e92d9d28c88b1c070d28067fa
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
>>>>>>> fa0e533ee4115c177b94b104d28c49673e321448
  { path: 'signIn', component: SignInComponent },
  { path: 'signUp', component: SignUpComponent },
  //{ path: 'cart', component: CartComponent },
  { path: 'products', component: ProductsComponent },
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
  {path: 'designyourcart',component:DesignyourcartComponent,canActivate: [AuthGuard]},
  {path: 'thankyou',component:ThankyouComponent},
  {path: 'taproprecarte',component:TaproprecarteComponent,canActivate: [AuthGuard]},
  {path: 'commande_plus',component:CommandePlusComponent,canActivate: [AuthGuard]},
  {path:'listproduit',component:ListProduitsComponent,
  canActivate: [AuthGuard] }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
