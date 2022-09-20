import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http:HttpClient) { }

  public getCustomers(){
    return this.http.get("http://localhost:8080/getAllUsers", {
      observe: 'response',
      params: {
        userEmail: "all transactions"
      },
      responseType: 'json'
    });

  }
}
