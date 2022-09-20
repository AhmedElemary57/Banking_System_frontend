import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Transaction} from "../Models/Transaction";
import {HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {


  constructor(private http:HttpClient) { }

  public makeTransaction(transaction: Transaction) :Observable<HttpResponse<boolean>>{
    return this.http.post<boolean>("http://localhost:8080/addTransaction", transaction, {
      observe: 'response',
      responseType: 'json'
      }
    );
  }
  public getTransactions() :Observable<HttpResponse<Transaction[]>>{
    return this.http.get<Transaction[]>("http://localhost:8080/getTransactions", {
      observe: 'response',
      params: {
        userEmail: "all transactions"
      },
      responseType: 'json'
      }
    );
  }
}
