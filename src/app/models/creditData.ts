export class CreditData {
  data: string;
  amount: number;
  referDetails: string;
  constructor(data) {
    Object.assign(this, data);
  }
}
