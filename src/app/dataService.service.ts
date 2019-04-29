import { Injectable } from '@angular/core';
import { ATMData } from './models/ATMData';
import { CreditData } from './models/creditData';
import { Observable } from 'rxjs';
import { ForeignCurrencyRates } from './models/foreignCurrencyRates';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  homeATMList = [new ATMData({date: '12/10/2019', amount: 90,  ATMId: '12:555', desc:'תיאור מפורט 1'}),
                  new ATMData({date: '12/10/2019', amount: 110, ATMId: '12:555', desc:'תיאור מפורט 1'}),
                  new ATMData({date: '12/10/2019', amount: 120, ATMId: '12:555', desc:'תיאור מפורט 1'}),
                  new ATMData({date: '12/10/2019', amount: 150, ATMId: '12:555', desc:'תיאור מפורט 1'}),
                  new ATMData({date: '11/10/2019', amount: 450, ATMId: '12:552', desc:'תיאור מפורט 1'}),
                  new ATMData({date: '11/10/2019', amount: 700, ATMId: '12:552', desc:'תיאור מפורט 1'}),
                  new ATMData({date: '11/10/2019', amount: 700, ATMId: '12:552', desc:'תיאור מפורט 1'}),
                  new ATMData({date: '11/10/2019', amount: 700, ATMId: '12:555', desc:'תיאור מפורט 1'}),
                  new ATMData({date: '10/10/2019', amount: 500, ATMId: '12:555', desc:'תיאור מפורט 1'}),
                  new ATMData({date: '10/10/2019', amount: 400, ATMId: '12:555', desc:'תיאור מפורט 1'}),
                  new ATMData({date: '10/10/2019', amount: 300, ATMId: '12:557', desc:'תיאור מפורט 1'}),
                  new ATMData({date: '10/10/2019', amount: 200, ATMId: '12:537', desc:'תיאור מפורט 1'}),
                  new ATMData({date: '07/10/2019', amount: 800, ATMId: '12:545', desc:'תיאור מפורט 1'})];
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
  foreignCurrencyRates = [new ForeignCurrencyRates({currecy: 'IL Shekel', counterCurrency: 'US Dolar', amount: 3.80}),
                          new ForeignCurrencyRates({currecy: 'IL Shekel', counterCurrency: 'THY Bhat', amount: 8.20}),
                          new ForeignCurrencyRates({currecy: 'IL Shekel', counterCurrency: 'UK Sterling', amount: 5.20}),
                          new ForeignCurrencyRates({currecy: 'IL Shekel', counterCurrency: 'DEN koboni', amount: 7.00}),
                          new ForeignCurrencyRates({currecy: 'IL Shekel', counterCurrency: 'KAT Dinar', amount: 2.80}),
                          new ForeignCurrencyRates({currecy: 'IL Shekel', counterCurrency: 'EUR', amount: 4.00}),
                          new ForeignCurrencyRates({currecy: 'IL Shekel', counterCurrency: 'ETB Bir', amount: 2.1}),
                          new ForeignCurrencyRates({currecy: 'IL Shekel', counterCurrency: 'INR Rupi', amount: 3.52}),
                          new ForeignCurrencyRates({currecy: 'IL Shekel', counterCurrency: 'DKK kr', amount: 3.88}),] 
   
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

  public getForeigCurrencyRates(): Observable<any> {
    return Observable.create( (observer) => {
      setTimeout (() => {
        observer.next(this.foreignCurrencyRates);
        observer.complete();
      }, 0)
    })
  }
}
