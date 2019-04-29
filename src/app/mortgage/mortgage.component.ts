import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { WizardComponent } from '../wizard/wizard.component';

@Component({
  selector: 'app-mortgage',
  templateUrl: './mortgage.component.html',
  styleUrls: ['./mortgage.component.scss']
})
export class MortgageComponent implements OnInit {
  @ViewChild(WizardComponent) private wizard: WizardComponent;
  index=0;
  form: FormGroup;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  featureVersion;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.form = this._formBuilder.group({
      someControl: ['', Validators.required]
    });
    this.featureVersion = localStorage.getItem('feature_flag');
  }

  next() {
    this.index++;
    this.wizard.next();
  }

  next2() {
    this.wizard.next();
  }

  prev() {
    this.index--;
  }

}
