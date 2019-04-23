import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MortgageRoutingModule } from './mortgage-routing.module';
import { MortgageComponent } from './mortgage.component';
import { MatStepperModule, MatInputModule, MatButtonModule, MatAutocompleteModule } from '@angular/material';
import { WizardModule } from '../wizard/wizard.module';

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
    WizardModule,
    MortgageRoutingModule
  ]
})
export class MortgageModule { }
