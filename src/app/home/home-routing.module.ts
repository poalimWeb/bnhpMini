import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeVersionComponent } from './home-version/home-version.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
/**
 * idea: create a list of versions in this compoenet and each version will call a service for filling the later version component
 * when creating 1 sub componenet there can be changes only to service calls parameters.
 * any code/template changes will must be in a different component.
 */
