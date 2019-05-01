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
    this.rest.get('/home', {}).subscribe( (data) => {
        localStorage.setItem('home', data.version);
    }, error => {
      console.log('OFFLINE mode');
      localStorage.setItem('home', '2');
    });
  }
}
