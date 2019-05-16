import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditComponent } from './credit.component';
import { CreditGuard } from './creditGuard';

const routes: Routes = [
  {
  path: '',
  canActivate: [CreditGuard],
  component: CreditComponent,
  data: {
    loadNewversion: localStorage.getItem('credit') == '2'
  }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditRoutingModule { }
