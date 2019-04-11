import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditComponent } from './credit.component';
import { CreditVersionComponent } from './credit-version/credit-version.component';

const routes: Routes = [
  {path: 'credit', component: CreditComponent},
  {path: 'credit/:id', component: CreditVersionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditRoutingModule { }
