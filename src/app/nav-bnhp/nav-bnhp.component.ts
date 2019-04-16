import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bnhp',
  templateUrl: './nav-bnhp.component.html',
  styleUrls: ['./nav-bnhp.component.scss']
})
export class NavBnhpComponent implements OnInit {
  featureFlag;
  constructor() { }

  ngOnInit() {
    this.featureFlag = localStorage.getItem('feature_flag');
  }

}
