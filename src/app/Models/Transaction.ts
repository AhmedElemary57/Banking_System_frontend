export class Transaction{
  _id: string | undefined;
  date: string;
  amount: number;
  from: string;
  to: string;
  public constructor( date: Date, amount: number , from: string  ,to: string ){
    this.date = new Date().getDay().toString()+"/"+new Date().getMonth().toString()+"/"+new Date().getFullYear().toString()+
      " "+new Date().getHours().toString()+":"+new Date().getMinutes().toString()+":"+new Date().getSeconds().toString();
    this.from = from;
    this.to = to;
    this.amount = amount;
  }

}
