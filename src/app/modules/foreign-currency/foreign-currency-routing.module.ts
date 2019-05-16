import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForeignCurrencyComponent } from './foreign-currency.component';

const routes: Routes = [
  {path:'', component: ForeignCurrencyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForeignCurrencyRoutingModule { }
