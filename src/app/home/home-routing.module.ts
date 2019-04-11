import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeVersionComponent } from './home-version/home-version.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'home/:id', component: HomeVersionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
