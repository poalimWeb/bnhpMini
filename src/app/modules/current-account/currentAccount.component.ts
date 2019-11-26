import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { RestService } from '../../rest.service';
import { WizardComponent } from '../wizard/wizard.component';

@Component({
  selector: 'app-CurrentAccount',
  templateUrl: './currentAccount.component.html',
  styleUrls: ['./currentAccount.component.scss']
})
export class currentAccountComponent implements OnInit {
  @ViewChild(WizardComponent, {static: false}) private wizard: WizardComponent;
  index=0;
  form: FormGroup;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  featureVersion;

  constructor(private _formBuilder: FormBuilder,
              private rest: RestService) {}

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
    // rest call
    this.rest.get('/current-account', {}).subscribe( (data) => {
      localStorage.setItem('current-account', data.version);
    }, error => {
      console.log('OFFLINE mode');
      localStorage.setItem('current-account', '2');
    });
    this.featureVersion = localStorage.getItem('current-account');
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
