import { Component, OnInit } from '@angular/core';
import {Customer} from "../../Models/Customer";
import {Observable} from "rxjs";
import {FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {TransactionService} from "../../Services/transaction.service";
import {Transaction} from "../../Models/Transaction";
import {Users} from "../../Models/Users";
import {CustomersService} from "../../Services/customers.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-make-transaction',
  templateUrl: './make-transaction.component.html',
  styleUrls: ['./make-transaction.component.css']
})
export class MakeTransactionComponent implements OnInit {
  transaction?:Transaction;
  to?:string;from?:string;amount?:number;
  isLoading:boolean=false; transactionDone:boolean=false; transactionFailed:boolean=false;loadingPage:boolean=false;
  myControl = new FormControl('');
  myForm:FormGroup = new FormGroup('');
  constructor(private makeTransactionService:TransactionService,
              private getCustomersService:CustomersService,
              private router:Router) {

  }


  ngOnInit(): void {
    if (Users.users == null){
      this.loadingPage = true;
      this.getCustomersService.getCustomers().subscribe(
        res => {
          console.log(res);
          // @ts-ignore
          Users.users = res.body;
          this.router.navigateByUrl('/', { skipLocationChange: true })
            .then(() => {
              this.router.navigate(['/make-transaction']);
            });
          this.loadingPage= false;
        },(error)=>{
          console.log(error);
          this.isLoading = false;
        },()=>{
          console.info("completed");
          this.isLoading = false;
        })
    }

    this.myForm=new FormGroup({
      from: new FormControl('',[Validators.required]),
      to: new FormControl('',[Validators.required]),
      amount:new FormControl('',[Validators.required])
    })

    this.myForm.valueChanges.subscribe(data=>{
      this.from=data.from;
      this.to=data.to;
      this.amount=data.amount;
    })
    console.log(this.myForm)

  }

  makeTransaction( ){
    console.log("makeTransaction from "+ this.from+" to "+ this.to +" amount "+this.amount);
    this.isLoading=true;
    if (this.amount != null && this.from != null && this.to != null){
      let trnsaction = new Transaction( new Date(), this.amount, this.from, this.to);
      this.makeTransactionService.makeTransaction(trnsaction).subscribe(
        (response)=>{
          if (response.body){
            console.log("transaction done");
            this.transactionDone=true;
            this.isLoading = false;
            this.myForm.reset();
          }else {
            console.log("transaction failed");
            this.transactionFailed = true;
            this.isLoading = false;
            this.myForm.reset();
          }

        });
    }
  }
  isUser(user:string|undefined):boolean{
    if (user==undefined) return false;
    let users = Users.users;
    // @ts-ignore
    for (let i = 0; i < users.length; i++) {
      if (!(users) || users[i].email == user){
        return true;
      }
    }
    return false;
  }

}
