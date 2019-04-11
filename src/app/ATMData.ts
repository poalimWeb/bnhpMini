export class ATMData {
  date: string;
  amount: number;
  ATMId: string;
  constructor(data) {
    Object.assign(this, data);
  }
}
