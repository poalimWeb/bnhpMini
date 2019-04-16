import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataService.service';

@Component({
  selector: 'app-foreign-currency',
  templateUrl: './foreign-currency.component.html',
  styleUrls: ['./foreign-currency.component.scss']
})
export class ForeignCurrencyComponent implements OnInit {
  dataObject;
  featureVersion;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getForeigCurrencyRates().subscribe((data) => {
      this.dataObject = data;
    });
    console.log(localStorage.getItem('feature_flag'));
    this.featureVersion = localStorage.getItem('feature_flag');
  }

}
