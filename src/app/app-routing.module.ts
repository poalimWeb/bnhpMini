import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
    {path: 'credit', loadChildren: './credit/credit.module#CreditModule'},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home' , loadChildren: './home/home.module#HomeModule'},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
