import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-version',
  templateUrl: './home-version.component.html',
  styleUrls: ['./home-version.component.css']
})
export class HomeVersionComponent implements OnInit {
  id;
  hero$: Observable<any>;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    }

}
