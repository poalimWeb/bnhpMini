import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { RestService } from '../rest.service';
import { CreditComponent } from '../credit/credit.component';
import { CreditVersionComponent } from '../credit/credit-version/credit-version.component';
import { tap, map } from 'rxjs/operators';
import { CreditModule } from '../credit/credit.module';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router, 
              private restService: RestService) {}
  
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    // if (this.checkIfUserAuthenticated()) {
       return this.checkFeatureVersion(state.url).pipe( 
        tap((answer) => {
          const loadNewVersion = next.data['loadNewversion'];
          next.routeConfig.component = CreditModule.chooseComponenetToLoad(loadNewVersion);
            // if(loadNewVersion){
            // next.routeConfig.component = CreditComponent;
            // next.routeConfig.loadChildren = './home/home.module#HomeModule';
            // } else {
            // next.routeConfig.component = CreditVersionComponent;
            // next.routeConfig.loadChildren = './credit/credit.module#CreditModule';
          // }
      }), 
      map(() => true))
  // } else {
  //   this.router.navigate(['home']);
  //   return of(false);
  // }
}

  // checkIfUserAuthenticated() {
  //   if (localStorage.getItem('userName')) {
  //     return true;
  //   }
  //   return false;
  // }

  // checkFeatureVersion(url: string): Promise<boolean> {
  //   const userNameStr = localStorage.getItem('userName');
  //   return new Promise<boolean>( (resolve, reject) =>
  //     this.restService.get(url, {userName: userNameStr}).subscribe((data) => {
  //       localStorage.setItem(url, data.version);
  //       console.log(url +' version with userName: ', data.version);
  //       resolve(true);
  //   }));
  // }
  checkFeatureVersion(url: string): Observable<boolean> {
    const userNameStr = localStorage.getItem('userName');
    return this.restService.get(url, {userName: userNameStr})
    .pipe(tap((data) => {
        localStorage.setItem(url.replace('/', ''), data.version);
        console.log(url +' version with userName: ', data.version);
    }))  
  }
}
