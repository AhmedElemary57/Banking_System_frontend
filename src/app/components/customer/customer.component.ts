import {Component, Input, OnInit} from '@angular/core';
import {Transaction} from "../../Models/Transaction";
import {Customer} from "../../Models/Customer";
import {TransactionService} from "../../Services/transaction.service";
import {Router} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  public isLoading: boolean = false;
  transactions?: Observable<Transaction[]>;
  transactions$ =  new BehaviorSubject<Transaction[]>([]);
  customerEmail?:string;
  constructor(private transactionService:TransactionService,
              private router:Router) {

  }

  ngOnInit(): void {
    this.customerEmail= this.router.url.substring(11)
    this.loadTransactions();
    this.transactions = this.transactions$.asObservable();

  }

  loadTransactions() {
    console.log("clicked mail is "+this.customerEmail);
    if (this.customerEmail!=null) {
      this.isLoading = true;
      this.transactionService.getUserTransactions(this.customerEmail).subscribe(
        (response) => {
          console.log(response);
          this.isLoading = false;
          // @ts-ignore
          this.transactions$.next(response.body);
        },
        (error) => {
          console.log(error);
          this.isLoading = false;
        },
        () => {
          console.info("completed");
          this.isLoading = false;
        }
      )
    }
  }


}
