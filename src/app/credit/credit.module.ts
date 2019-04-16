import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreditRoutingModule } from './credit-routing.module';
import { CreditVersionComponent } from './credit-version/credit-version.component';
import { CreditComponent } from './credit.component';

@NgModule({
  declarations: [
    CreditVersionComponent,
    CreditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CreditRoutingModule
  ],
  entryComponents:[CreditComponent,CreditVersionComponent]
})
export class CreditModule {
  constructor() {}
   static chooseComponenetToLoad(loadNewversion: boolean) {
    if (loadNewversion) {
      return CreditComponent;
    } else {
      return CreditVersionComponent;
    }
  }
 }
