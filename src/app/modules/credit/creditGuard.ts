import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { RestService } from '../../rest.service';
import { tap, map } from 'rxjs/operators';
import { CreditModule } from '../credit/credit.module';

@Injectable({
  providedIn: 'root'
})
export class CreditGuard implements CanActivate {
  constructor(private router: Router,
              private restService: RestService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    // if (this.checkIfUserAuthenticated()) {
      //  return this.checkFeatureVersion(state.url).pipe(
      //   tap((answer) => {
      //     const loadNewVersion = next.data['loadNewversion'];
      //     next.routeConfig.component = CreditModule.chooseComponenetToLoad(loadNewVersion);
      // }),
      // map(() => true))
      return of(true);
//   } else {
//     this.router.navigate(['home']);
//     return of(false);
//   }
}

//   checkIfUserAuthenticated() {
//     if (localStorage.getItem('userName')) {
//       return true;
//     }
//     return false;
//   }

  // checkFeatureVersion(url: string): Observable<boolean> {
  //   const userNameStr = localStorage.getItem('userName');
  //   return this.restService.get(url, {userName: userNameStr})
  //   .pipe(tap((data) => {
  //       localStorage.setItem(url.replace('/', ''), data.version);
  //       console.log(url +' version with userName: ', data.version);
  //   }));
  // }
}
