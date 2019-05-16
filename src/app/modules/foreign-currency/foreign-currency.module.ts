import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForeignCurrencyRoutingModule } from './foreign-currency-routing.module';
import { ForeignCurrencyComponent } from './foreign-currency.component';

@NgModule({
  declarations: [ForeignCurrencyComponent],
  imports: [
    CommonModule,
    ForeignCurrencyRoutingModule
  ],
  entryComponents:[ForeignCurrencyComponent]
})
export class ForeignCurrencyModule { }
