import { WizardComponent } from "./wizard.component";
import { wizardStepContentDirective, WizardStepDirective } from './wizard-step.directive';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { DirectiveModule } from '../directives/directive.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports:[
        CommonModule
        // DirectiveModule
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