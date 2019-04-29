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
  toggle = false;
  featureFlag;
  constructor(private dataService: DataService,
              private rest: RestService) { }

  ngOnInit() {
    this.featureFlag = localStorage.getItem('feature_flag');
    // get component data
    this.dataService.getHomeData().subscribe((data) => {
      if (this.featureFlag == '2'){
        this.dataObject = data;
      } else {
        this.dataObject = {excMes : 'הלקוח אינו רשום לשירות UP חכם'};
      }
    });
    //get user data - like login
    this.rest.get('/userData', {}).subscribe( (data) => {
      localStorage.setItem('userName', data.userName);
    }, error => {
      console.log('OFFLINE mode');
      localStorage.setItem('userName', 'shahaf shuhamy');
    });
    // get all application keys
    this.rest.get('/bnhpApp', {}).subscribe( (data) => {
      for (let key of Object.keys(data)) {
        localStorage.setItem(key, data[key]);
      }
    }, error => {
      console.log('OFFLINE mode');
      localStorage.setItem('home', '2');
      localStorage.setItem('credit', '2');
      localStorage.setItem('feature_flag', '2');
    });
    // if (localStorage.getItem('feature_flag') == '2'){
    //   this.tableStyleBlue = true;
    // } else {
    //   this.tableStyleBlue = false;
    // }
  }
}
