import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataObject;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getHomeData().subscribe((data) => {
      this.dataObject = data;
    });
  }

}
