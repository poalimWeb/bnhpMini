import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-credit-version',
  templateUrl: './credit-version.component.html',
  styleUrls: ['./credit-version.component.css']
})
export class CreditVersionComponent implements OnInit {
  version;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.version = this.route.snapshot.params['id'];
  }

}
