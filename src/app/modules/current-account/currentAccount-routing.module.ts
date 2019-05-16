import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { currentAccountComponent } from './currentAccount.component';

const routes: Routes = [
  {path:'', component: currentAccountComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class currentAccountRoutingModule { }
