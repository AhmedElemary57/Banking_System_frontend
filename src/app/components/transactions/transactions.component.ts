import { Component, OnInit } from '@angular/core';
import {Transaction} from "../../Models/Transaction";
import {TransactionService} from "../../Services/transaction.service";
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  public isLoading: boolean = false;
  transactions?: Observable<Transaction[]>;
  transactions$ =  new BehaviorSubject<Transaction[]>([]);

  constructor(private transactionService:TransactionService) {

  }

  ngOnInit(): void {
    this.loadTransactions();
    this.transactions = this.transactions$.asObservable();

  }

  loadTransactions() {
    this.transactionService.getTransactions().subscribe(
      (response)=>{
        console.log(response);
        this.isLoading = false;
        // @ts-ignore
        this.transactions$.next(response.body);
      },
      (error)=>{
        console.log(error);
        this.isLoading = false;
      },
      ()=>{
        console.info("completed");
        this.isLoading = false;
      }
    )
  }

}
