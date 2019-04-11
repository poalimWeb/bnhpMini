import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreditRoutingModule } from './credit-routing.module';
import { CreditVersionComponent } from './credit-version/credit-version.component';

@NgModule({
  declarations: [CreditVersionComponent],
  imports: [
    CommonModule,
    FormsModule,
    CreditRoutingModule
  ]
})
export class CreditModule { }
