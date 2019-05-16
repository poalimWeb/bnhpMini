import { WizardComponent } from "./wizard.component";
import { wizardStepContentDirective, WizardStepDirective } from './wizard-step.directive';
import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports:[
        CommonModule
    ],
    declarations: [
        WizardComponent,
        WizardStepDirective,
        wizardStepContentDirective
    ],
    exports: [
        WizardComponent,
        WizardStepDirective,
        wizardStepContentDirective
    ]
})
export class WizardModule {
}
