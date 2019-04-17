import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home' , loadChildren: './home/home.module#HomeModule'},
    {path: 'credit', loadChildren: './credit/credit.module#CreditModule'},
    {path: 'mortgage', loadChildren: './mortgage/mortgage.module#MortgageModule'},
    {path: 'foreignCurrency', loadChildren: './foreign-currency/foreign-currency.module#ForeignCurrencyModule'},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: NoPreloading})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
