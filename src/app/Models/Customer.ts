export class Customer{
    _id: string;
    name: string;
    email: string;
    balance: number;

    constructor(_id: string, name: string, email: string, balance: number){
        this._id = _id;
        this.name = name;
        this.email = email;
        this.balance = balance;
    }


}
