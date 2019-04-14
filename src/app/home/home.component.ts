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
  }

  onHomeClick() {

  }
}
