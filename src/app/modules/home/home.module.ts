import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeVersionComponent } from './home-version/home-version.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeVersionComponent,HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ], entryComponents: [HomeComponent]
})
export class HomeModule { }
