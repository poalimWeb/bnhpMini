import { Injectable } from '@angular/core';
import { ATMData } from './ATMData';
import { CreditData } from './creditData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  homeATMList = [new ATMData({date: '12/10/2019', amount: 90,  ATMId: '12:555'}),
                 new ATMData({date: '12/10/2019', amount: 110, ATMId: '12:555'}),
                 new ATMData({date: '12/10/2019', amount: 120, ATMId: '12:555'}),
                 new ATMData({date: '12/10/2019', amount: 150, ATMId: '12:555'}),
                 new ATMData({date: '11/10/2019', amount: 450, ATMId: '12:552'}),
                 new ATMData({date: '11/10/2019', amount: 700, ATMId: '12:552'}),
                 new ATMData({date: '11/10/2019', amount: 700, ATMId: '12:552'}),
                 new ATMData({date: '11/10/2019', amount: 700, ATMId: '12:555'}),
                 new ATMData({date: '10/10/2019', amount: 500, ATMId: '12:555'}),
                 new ATMData({date: '10/10/2019', amount: 400, ATMId: '12:555'}),
                 new ATMData({date: '10/10/2019', amount: 300, ATMId: '12:557'}),
                 new ATMData({date: '10/10/2019', amount: 200, ATMId: '12:537'}),
                 new ATMData({date: '09/10/2019', amount: 100, ATMId: '12:535'}),
                 new ATMData({date: '09/10/2019', amount: 510, ATMId: '12:535'}),
                 new ATMData({date: '09/10/2019', amount: 520, ATMId: '12:555'}),
                 new ATMData({date: '09/10/2019', amount: 900, ATMId: '12:545'}),
                 new ATMData({date: '08/10/2019', amount: 560, ATMId: '12:545'}),
                 new ATMData({date: '08/10/2019', amount: 300, ATMId: '12:545'}),
                 new ATMData({date: '08/10/2019', amount: 560, ATMId: '12:545'}),
                 new ATMData({date: '08/10/2019', amount: 380, ATMId: '12:545'}),
                 new ATMData({date: '07/10/2019', amount: 660, ATMId: '12:545'}),
                 new ATMData({date: '07/10/2019', amount: 800, ATMId: '12:545'})];
  creditData  = [new CreditData({date: '26/08/2018', amount: 1337, referDetails: 'בנק לאומי'}),
                 new CreditData({date: '08/05/1989', amount: 119991, referDetails: 'בנק לאומי'}),
                 new CreditData({date: '14/10/1989', amount: 1337, referDetails: 'קפה קפה'}),
                 new CreditData({date: '03/09/1900', amount: 10000, referDetails: 'קפה גן סיפור'}),
                 new CreditData({date: '05/09/1900', amount: 10000, referDetails: 'קולנוע רב חן'}),
                 new CreditData({date: '12/09/1800', amount: 10000, referDetails: 'קפה לוונדר'}),
                 new CreditData({date: '03/12/1991', amount: 2500, referDetails: 'בנק הפועלים'}),
                 new CreditData({date: '03/07/1995', amount: 1000, referDetails: 'טיב טעם'}),
                 new CreditData({date: '31/10/2019', amount: 100, referDetails: 'יוחננוף'}),
                 new CreditData({date: '25/10/2015', amount: 100, referDetails: 'עוד מקום'}),
                 new CreditData({date: '10/10/2018', amount: 100, referDetails: 'אין לי רצון להמציא'}),
                 new CreditData({date: '01/11/2016', amount: 100, referDetails: 'בית חולים קפלן'}),
                 new CreditData({date: '06/12/2019', amount: 100, referDetails: 'מימדיון'}),
                 new CreditData({date: '22/05/2019', amount: 100, referDetails: 'סופרלאנד ראשון לציון'}),
                 new CreditData({date: '12/02/2019', amount: 100, referDetails: 'LOLAPALUZA'})];
  constructor() { }

  public getHomeData(): Observable<any> {
      return Observable.create( (observer) => {
        setTimeout(() => {
          observer.next(this.homeATMList);
          observer.complete();
        }, 0);
      });
  }

  public getCreditData(): Observable<any> {
    return Observable.create( (observer) => {
      setTimeout(() => {
        observer.next(this.creditData);
        observer.complete();
      }, 0);
    });
  }
}
