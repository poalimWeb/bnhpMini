import {Directive, TemplateRef, Input, HostBinding, ContentChild } from '@angular/core';

@Directive({selector:'wizardStepContent'})
export class wizardStepContentDirective {
    constructor(public templateRef: TemplateRef<any>) {

    }
}

@Directive({selector:'app-wizard-step'})
export class WizardStepDirective {
    @Input() heading: string;
    @HostBinding('class.disabled') @Input() disabled = false;
    @HostBinding('class.active') @Input() active = false;
    @ContentChild(wizardStepContentDirective) contentTpl: wizardStepContentDirective;
}