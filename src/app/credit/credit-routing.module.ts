import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditComponent } from './credit.component';
import { CreditVersionComponent } from './credit-version/credit-version.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
  path: 'credit',
  canActivate: [AuthGuard],
  component: CreditComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditRoutingModule { }
