import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MortgageRoutingModule } from './mortgage-routing.module';
import { MortgageComponent } from './mortgage.component';
import { MatStepperModule, MatInputModule, MatButtonModule, MatAutocompleteModule } from '@angular/material';

@NgModule({
  declarations: [MortgageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule, 
    MortgageRoutingModule
  ]
})
export class MortgageModule { }
