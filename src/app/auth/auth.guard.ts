import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { RestService } from '../rest.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private restService: RestService) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.checkFeatureVersion(state.url);
    return true;
  }

  checkFeatureVersion(url: string) {
    const userNameStr = localStorage.getItem('userName');
    console.log(userNameStr);
    this.restService.get(url, {userName: userNameStr}).subscribe((data) => {
      console.log('version with userName: ', data.version);
    });
  }
}
