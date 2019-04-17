import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataService.service';
import { Injectable } from '@angular/core';
import { RestService } from '../rest.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
@Injectable()
export class HomeComponent implements OnInit {
  dataObject;
  tableStyleBlue;
  constructor(private dataService: DataService,
              private rest: RestService) { }

  ngOnInit() {
    this.dataService.getHomeData().subscribe((data) => {
      this.dataObject = data;
    });
    this.rest.get('/userData', {}).subscribe( (data) => {
      console.log(data);
      localStorage.setItem('userName', data.userName);
    });
    this.rest.get('/bnhpApp', {}).subscribe( (data) => {
      console.log(data);
      for (let key of Object.keys(data)) {
        localStorage.setItem(key, data[key]);
      }
    });
    
    if (localStorage.getItem('feature_flag') == '2'){
      this.tableStyleBlue = true;
    } else {
      this.tableStyleBlue = false;
    }
  }

  onHomeClick() {

  }
}
