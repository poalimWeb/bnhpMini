import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bnhp',
  templateUrl: './nav-bnhp.component.html',
  styleUrls: ['./nav-bnhp.component.scss']
})
export class NavBnhpComponent implements OnInit {
  featureFlag;
  index = 0;
  constructor() { }

  ngOnInit() {
    this.featureFlag = localStorage.getItem('feature_flag');
  }
  
  updateIndex(num){
    console.log(this.index);
    this.index = num;
  }
}
