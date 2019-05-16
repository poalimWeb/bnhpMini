import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { currentAccountRoutingModule } from './currentAccount-routing.module';
import { currentAccountComponent } from './currentAccount.component';
import { MatStepperModule, MatInputModule, MatButtonModule, MatAutocompleteModule } from '@angular/material';
import { WizardModule } from '../wizard/wizard.module';

@NgModule({
  declarations: [currentAccountComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    WizardModule,
    currentAccountRoutingModule
  ]
})
export class currentAccountModule { }
