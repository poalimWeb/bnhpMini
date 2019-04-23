import { Component, OnInit, AfterContentChecked, AfterViewInit, QueryList, ContentChildren, ViewChildren, ElementRef, HostBinding, Input } from '@angular/core';
import { WizardStepDirective } from './wizard-step.directive'; 
@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements AfterContentChecked ,AfterViewInit{
  @ContentChildren (WizardStepDirective) steps: QueryList<WizardStepDirective>;
  @Input() isFirsStepFocus = false;
  @ViewChildren('stepTitle') private stepsTitles: QueryList<ElementRef>;
  @HostBinding('class.wizard') private className = true;
  activeStepIndex = 0;
  private activeStep: WizardStepDirective;
  private set currentStep(step: WizardStepDirective) {
    this.activeStep = step;
    this.activeStep.active = true;
    this.activeStepIndex = this.steps.toArray().indexOf(step);
  }

  constructor() { }

  ngAfterViewInit(){
    if(this.isFirsStepFocus) {
      const elem: ElementRef = <ElementRef>this.stepsTitles.toArray()[0];
      elem.nativeElement.focus();
    }
  }

  ngAfterContentChecked() {
    if (this.steps.length === 0){
      return;
    }
    const active = this.steps.find( (step) => {
      if (step.active) {
        this.currentStep = step;
        return true;
      }
      return false;
    });

    if (!active) {
      this.currentStep = this.steps.first;
    }
  }

  next() {
    const i = this.findNextActiveStep();
    if (i !== this.activeStepIndex) {
      this.steps.forEach(step => step.active = false);
      this.currentStep = this.steps.toArray()[i];
      const elem: ElementRef = <ElementRef>this.stepsTitles.toArray()[i];
      elem.nativeElement.focus();
    }
  }

  prev() {
    const i=this.findPrevActiveStep();
    if (i !== this.activeStepIndex) {
      this.steps.forEach(step => step.active = false);
      this.currentStep = this.steps.toArray()[i];
      const elem: ElementRef = <ElementRef>this.stepsTitles.toArray()[i];
      elem.nativeElement.focus();
    }
  }

  findNextActiveStep(): number {
    let i = this.activeStepIndex;
    while (i<this.steps.length-1) {
      i++;
      if (!this.steps.toArray()[i].disabled) {
        break;
      }
    }
    return i;
  }

  findPrevActiveStep(): number {
    let i = this.activeStepIndex;
    while (i>0) {
      i--;
      if (!this.steps.toArray()[i].disabled) {
        break;
      }
    }
    return i;
  }


}
