import { Component, OnInit } from '@angular/core';
import {Customer} from "../../Models/Customer";
import {BehaviorSubject, Observable} from "rxjs";
import {CustomersService} from "../../Services/customers.service";
import {Users} from "../../Models/Users";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  public isLoading: boolean = false;
  customers?: Customer[];
  users?:Observable<Customer[]>;
  users$ = new BehaviorSubject<Customer[]>([]);

  constructor(private customersService:CustomersService) {

  }
  ngOnInit(): void {
    this.getCustomers();
    this.users = this.users$.asObservable();
    // @ts-ignore
    this.users.subscribe(res => {
      this.customers = res as Customer[];
      Users.users = this.customers;
    });
  }

  getCustomers(){
    this.isLoading = true;
    this.customersService.getCustomers().subscribe(
      res => {
        console.log(res);
        // @ts-ignore
        this.users$.next(res.body);
        this.isLoading = false;
      },(error)=>{
        console.log(error);
        this.isLoading = false;
      },
      ()=>{
        console.info("completed");
        this.isLoading = false;
      })
  }
}
