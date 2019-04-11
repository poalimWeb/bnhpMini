import { Component, OnInit } from '@angular/core';
import { DataService } from '..//dataService.service';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {
  dataObject;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCreditData().subscribe((data) => {
      this.dataObject = data;
    });
  }

}
