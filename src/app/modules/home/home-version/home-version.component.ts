import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-version',
  templateUrl: './home-version.component.html',
  styleUrls: ['./home-version.component.scss']
})
export class HomeVersionComponent implements OnInit {
  version;
  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.version = this.route.snapshot.params['id'];
    }

}
