import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http:HttpClient) { }

  public getCustomers(){
    return this.http.get("https://arcane-crag-09119.herokuapp.com/getAllUsers", {
      observe: 'response',
      params: {
        userEmail: "all transactions"
      },
      responseType: 'json'
    });

  }
}
