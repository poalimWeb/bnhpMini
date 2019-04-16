export class ForeignCurrencyRates {
    currecy: string;
    counterCurrency: string;
    amount: number;
    constructor(data) {
      Object.assign(this, data);
    }
  }
  